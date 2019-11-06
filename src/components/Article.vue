<template>
  <div class="article">
    <!-- is Done? check box -->
    <div :class="{'done_check_box': true, 'active':article.isDone }" @click="toggleIsDone">done?</div>

    <!-- Date Box -->
    <div class="date_box">
      <div class="date_header">Begin At</div>
      <Datepicker
        class="datepicker"
        v-model="begin"
        :name="article.articleID+'end'"
        :format="'yyyy-MM-dd'"
        :disabled="!isEditable"
      />
      <div class="date_header">End At</div>
      <Datepicker
        class="datepicker"
        v-model="end"
        :name="article.articleID+'end'"
        :format="'yyyy-MM-dd'"
        :disabled="!isEditable"
      />
    </div>

    <!-- Contents -->
    <div class="article_detail">
      <!-- TODO Detail -->
      <div class="article_contents">
        <textarea
          placeholder="Insert your To Do List."
          v-model="article.contents"
          :disabled="!isEditable"
        />
      </div>

      <!-- Tag Box -->
      <div class="article_tags">
        <!-- tags -->
        <Tag
          v-for="(tag, index) in article.tags"
          :key="article.articleID+'tag'+index"
          :tag="tag"
          :disabled="!isEditable"
          :callback="removeTag"
        />

        <!-- tag input -->
        <input
          v-if="isEditable"
          v-auto-tag-parser
          placeholder="Insert tags ex) #Front #Back"
          v-model="tagString"
          :callback="removeTag"
        >
      </div>
    </div>

    <!-- important button -->
    <div class="star_button" @click="toggleIsImportant">
      <Star :class="{'star': true, 'active':article.isImportant }"/>
    </div>

    <!-- set button -->
    <div :class="{'set_button':true, 'is_done':article.isDone, 'is_editable':isEditable}">
      <button @click="toggle">{{state}}</button>
    </div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Datepicker from "vuejs-datepicker";
import Tag from "./Tag.vue";
import Star from "./Star.vue";
import AlertModal from "./AlertModal.vue";
import { IArticle } from "../interfaces";

const enum BUTTON_TYPE {
  EDIT = "Edit",
  SAVE = "Save",
  DELETE = "Del"
}

// Mix-in써서 짤껄 그랬나.. Write Article, Article의 중첩이 상당하다. -> 2벌을 짜는데 거의?
@Component({
  components: {
    Datepicker,
    Tag,
    Star
  }
})
export default class Article extends Vue {
  @Prop()
  private article: IArticle;
  private state: BUTTON_TYPE = BUTTON_TYPE.EDIT;
  private tagString: string = "";
  private get isVaildDate(): boolean { return this.article.begin <= this.article.end; }
  private get isVaildContents(): boolean { return this.article.contents.length > 0; }
  private get isEditable(): boolean { return this.state === BUTTON_TYPE.SAVE; }
  private get begin(): Date { return new Date(this.article.begin); }
  private get end(): Date { return new Date(this.article.end); }
  private set begin(date: Date) { this.article.begin = date.getTime(); }
  private set end(date: Date) { this.article.end = date.getTime(); }

  created() {
    this.state = this.article.isDone ? BUTTON_TYPE.DELETE : BUTTON_TYPE.EDIT;
  }

  private async save(): Promise<void> {
    if (!this.checkArticleVaildate()) return;

    const saveResult: boolean = await this.$store.dispatch("save");
    if (saveResult) {
      Vue.toasted.show("Save is Success!", { icon: "check" } as any);
    } else {
      Vue.toasted.show("Save is Fail!", { icon: "close" } as any);
    }
  }

  private checkArticleVaildate(): boolean {
    if (!this.isVaildDate) {
      this.showModal('종료시간보다 시작시간이 늦을 수 없습니다.');
    } else if (!this.isVaildContents) {
      this.showModal('글의 내용이 비어있습니다.');
    }

    return this.isVaildDate && this.isVaildContents;
  }


  // Toggle
  private toggle(): void {
    if (this.state === BUTTON_TYPE.DELETE) {
      this.$store.dispatch("deleteArticle", this.article.articleID);
      this.save();
    } else if (this.state === BUTTON_TYPE.EDIT) {
      this.state = BUTTON_TYPE.SAVE;
    } else if (this.state === BUTTON_TYPE.SAVE) {
      this.state = BUTTON_TYPE.EDIT;
      this.save();
    }
  }

  private toggleIsDone(): void {
    this.article.isDone = !this.article.isDone;
    if (this.state === BUTTON_TYPE.DELETE) {
      this.state = BUTTON_TYPE.EDIT;
    } else {
      this.state = BUTTON_TYPE.DELETE;
    }
    this.save();
  }

  private toggleIsImportant(): void {
    this.article.isImportant = !this.article.isImportant;
    this.save();
  }

  // Tag
  private parseTag(): void {
    const matchedArray: Array<string> = this.tagString.match(/#.* /g);
    if (!matchedArray) return;

    const matchedString: string = matchedArray[0].trim().replace("#", "");
    this.tagString = "";

    if (this.article.tags.indexOf(matchedString) >= 0) {
    } else if (matchedString.length > 15) {
      this.showModal('태그의 길이는 15자 이내만 가능합니다.');
    } else if (this.article.tags.length >= 4) {
      this.showModal('4개 이하의 태그까지만 허용됩니다.');
    } else {
      this.article.tags.push(matchedString);
      this.save();
    }
  }

  private removeTag(tag: string): void {
    const index = this.article.tags.indexOf(tag);
    if (index >= 0) {
      this.article.tags.splice(index, 1);
    }
    this.save();
  }

  private showModal(contents: string): void {
    this.$modal.show(AlertModal, { alertString: contents }, {
      name: 'AlertModal',
      clickToClose: false,
      width: 320,
      height: 80
    });
  }
}
</script>