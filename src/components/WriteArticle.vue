<template>
  <div class="article">
    <!-- Date Box -->
    <div class="date_box">
      <Datepicker class="datepicker" v-model="begin" name="begin" :format="'yyyy-MM-dd'"/>~
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import Tag from './Tag.vue';
import Star from './Star.vue';
import { IArticle } from '../interfaces';

@Component({
  components: {
    Datepicker,
    Tag,
    Star
  }
})
export default class WriteArticle extends Vue {
  private tagString: string = '';
  private article: IArticle = {
    articleID: this.$store.getters.articleID,
    contents: '',
    begin: Date.now(),
    end: Date.now(),
    isImportant: false,
    isDone: false,
    tags: []
  };

  private initialize(): void {
    const defaultArticle: IArticle = {
      articleID: this.$store.getters.articleID,
      contents: '',
      begin: Date.now(),
      end: Date.now(),
      isImportant: false,
      isDone: false,
      tags: []
    };

    Vue.set(this, 'article', defaultArticle);
  }

  private toggleIsImportant(): void {
    this.article.isImportant = !this.article.isImportant;
  }

  private get isVaildDate(): boolean {
    return this.article.begin <= this.article.end;
  }

  private get buttonText(): string {
    let buttonText: string = 'Add';
    return buttonText;
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

  private addArticle(): void {
    const newArticle: IArticle = Object.assign({}, this.article) as IArticle;
    this.$store.dispatch('addArticle', newArticle);
    this.initialize();
  }
}
</script>