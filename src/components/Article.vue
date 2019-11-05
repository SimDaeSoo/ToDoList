<template>
  <div class="article">
    <!-- is Important? -->
    <input type="checkbox">
    <!-- is Done? -->
    <input type="checkbox">
    <!-- Date Picker -->
    <div>
      <Datepicker class="datepicker" :value="begin" :format="'yyyy-MM-dd'" :disabled="edit"/>~
      <Datepicker class="datepicker" :value="end" :format="'yyyy-MM-dd'" :disabled="edit"/>
    </div>

    <!-- Contents -->
    <div class="article_detail">
      <!-- TODO Detail -->
      <div class="article_contents">
        <textarea placeholder="Insert your To Do List." :disabled="edit"/>
      </div>

      <!-- Tag Box -->
      <div class="article_tags">
        <Tag/>
        <input placeholder="Insert your tag. ex) #Front #Back" :disabled="edit">
      </div>
    </div>

    <button class="set_button" @click="changeArticle">{{isDone?'Delete':'Edit'}}</button>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import Tag from './Tag.vue';

@Component({
  components: {
    Datepicker,
    Tag
  }
})
export default class Article extends Vue {
  private begin: Date = new Date();
  private end: Date = new Date();
  private edit: boolean = true;

  private get isVaildDate(): boolean {
    return this.begin.getTime() <= this.end.getTime();
  }

  private changeArticle(): void {
    this.edit = !this.edit;
  }
}
</script>