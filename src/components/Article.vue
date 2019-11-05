<template>
  <div class="article">
    <div :class="{'done_check_box': true, 'active':isDone }" @click="toggleIsDone()">done?</div>

    <div class="date_box">
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

    <div class="star_button" @click="toggleIsImportant()">
      <Star :class="{'star': true, 'active':isImportant }"/>
    </div>

    <div class="set_button">
      <button @click="changeArticle">{{isDone?'Del':'Edit'}}</button>
    </div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';
import Tag from './Tag.vue';
import Star from './Star.vue';

@Component({
  components: {
    Datepicker,
    Tag,
    Star
  }
})
export default class Article extends Vue {
  private begin: Date = new Date();
  private end: Date = new Date();

  private edit: boolean = true;
  private isDone: boolean = false;
  private isImportant: boolean = false;

  private get isVaildDate(): boolean {
    return this.begin.getTime() <= this.end.getTime();
  }

  private changeArticle(): void {
    this.edit = !this.edit;
  }

  private toggleIsDone(): void {
    this.isDone = !this.isDone;
  }

  private toggleIsImportant(): void {
    this.isImportant = !this.isImportant;
  }
}
</script>