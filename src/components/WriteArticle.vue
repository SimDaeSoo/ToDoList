<template>
  <div class="article">
    <!-- Date Box -->
    <div class="date_box">
      <div class="date_header">Begin At</div>
      <Datepicker class="datepicker" v-model="begin" name="begin" :format="'yyyy-MM-dd'"/>
      <div class="date_header">End At</div>
      <Datepicker class="datepicker" v-model="end" name="end" :format="'yyyy-MM-dd'"/>
    </div>

    <!-- Contents -->
    <div class="article_detail">
      <!-- TODO Detail -->
      <div class="article_contents">
        <textarea placeholder="Insert your To Do List." v-model="article.contents"/>
      </div>

      <!-- Tag Box -->
      <div class="article_tags">
        <!-- tags -->
        <Tag
          v-for="(tag, index) in article.tags"
          :key="article.articleID+'tag'+index"
          :tag="tag"
          :disabled="false"
          :callback="removeTag"
        />

        <!-- tag input -->
        <input v-auto-tag-parser placeholder="Insert tags ex) #Front #Back" v-model="tagString">
      </div>
    </div>

    <!-- important button -->
    <div class="star_button" @click="toggleIsImportant">
      <Star :class="{'star': true, 'active':article.isImportant }"/>
    </div>

    <!-- set button -->
    <div :class="{'set_button':true}">
      <button @click="addArticle">{{buttonText}}</button>
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
import { getBlankArticle } from '../utils';

// Mix-in써서 짤껄 그랬나.. Write Article, Article의 중첩이 상당하다. -> 2벌을 짜는데 거의?
@Component({
  components: {
    Datepicker,
    Tag,
    Star
  }
})
export default class WriteArticle extends Vue {
  private tagString: string = "";
  private get isVaildDate(): boolean { return this.article.begin <= this.article.end; }
  private get isVaildContents(): boolean { return this.article.contents.length > 0; }
  private get begin(): Date { return new Date(this.article.begin); }
  private get end(): Date { return new Date(this.article.end); }
  private set begin(date: Date) { this.article.begin = date.getTime(); }
  private set end(date: Date) { this.article.end = date.getTime(); }
  private buttonText: string = "Add";
  private article: IArticle = getBlankArticle(this.$store.getters.articleID);

  private initialize(): void {
    this.tagString = "";
    Vue.set(this, "article", getBlankArticle(this.$store.getters.articleID));
  }

  private async save(): Promise<void> {
    const saveResult: boolean = await this.$store.dispatch("save");

    if (saveResult) {
      Vue.toasted.show("Save is Success!", { icon: "check" } as any);
    } else {
      Vue.toasted.show("Save is Fail!", { icon: "close" } as any);
    }
  }

  private addArticle(): void {
    if (!this.checkArticleVaildate()) {
      return;
    }
    const newArticle: IArticle = Object.assign({}, this.article) as IArticle;
    this.$store.dispatch("addArticle", newArticle);
    this.save();
    this.initialize();
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
  private toggleIsImportant(): void {
    this.article.isImportant = !this.article.isImportant;
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
    }
  }

  private removeTag(tag: string): void {
    const index = this.article.tags.indexOf(tag);
    if (index >= 0) {
      this.article.tags.splice(index, 1);
    }
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