<template>
  <div class="article">
    <!-- is Done? check box -->
    <div :class="{'done_check_box': true, 'active':article.isDone }" @click="toggleIsDone">done?</div>

    <!-- Date Box -->
    <div class="date_box">
      <Datepicker
        class="datepicker"
        v-model="begin"
        :name="article.articleID+'end'"
        :format="'yyyy-MM-dd'"
        :disabled="!isEditable"
      />~
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import Tag from './Tag.vue';
import Star from './Star.vue';
import { IArticle } from '../interfaces';

const enum BUTTON_TYPE {
  EDIT = 'Edit',
  SAVE = 'Done',
  DELETE = 'Del'
};

@Component({
  components: {
    Datepicker,
    Tag,
    Star
  }
})
export default class Article extends Vue {
  private state: BUTTON_TYPE = BUTTON_TYPE.EDIT;
  private tagString: string = '';

  @Prop()
  private article: IArticle;

  created() {
    if (this.article.isDone) {
      this.state = BUTTON_TYPE.DELETE;
    }
  }

  private get isVaildDate(): boolean {
    return this.article.begin <= this.article.end;
  }

  private toggle(): void {
    if (this.state === BUTTON_TYPE.DELETE) {
      this.$store.dispatch('deleteArticle', this.article.articleID);
    } else if (this.state === BUTTON_TYPE.EDIT) {
      this.state = BUTTON_TYPE.SAVE;
    } else if (this.state === BUTTON_TYPE.SAVE) {
      this.state = BUTTON_TYPE.EDIT;
    }
  }

  private get isEditable(): boolean {
    return this.state === BUTTON_TYPE.SAVE;
  }

  private toggleIsDone(): void {
    this.article.isDone = !this.article.isDone;
    if (this.state === BUTTON_TYPE.DELETE) {
      this.state = BUTTON_TYPE.EDIT;
    } else {
      this.state = BUTTON_TYPE.DELETE;
    }
    this.$store.dispatch('save');
  }

  private toggleIsImportant(): void {
    this.article.isImportant = !this.article.isImportant;
    this.$store.dispatch('save');
  }

  private parseTag(): void {
    const matchedArray: Array<string> = this.tagString.match(/#.* /g);
    if (!matchedArray) return;

    const matchedString: string = matchedArray[0].trim().replace('#', '');
    this.tagString = '';

    this.article.tags.push(matchedString);
  }

  private removeTag(tag: string): void {
    const index = this.article.tags.indexOf(tag);
    if (index >= 0) {
      this.article.tags.splice(index, 1);
    }
    this.$store.dispatch('save');
  }

  private get begin(): Date {
    return new Date(this.article.begin);
  }

  private get end(): Date {
    return new Date(this.article.end);
  }

  private set begin(date: Date) {
    this.article.begin = date.getTime();
  }

  private set end(date: Date) {
    this.article.end = date.getTime();
  }
}
</script>