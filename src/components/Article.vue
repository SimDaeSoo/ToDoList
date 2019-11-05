<template>
  <div class="article">
    <!-- is Done? check box -->
    <div
      :class="{'done_check_box': true, 'active':isDone }"
      @click="toggleIsDone"
      v-if="!isWrite"
    >done?</div>

    <!-- Date Box -->
    <div class="date_box">
      <Datepicker class="datepicker" :value="begin" :format="'yyyy-MM-dd'" :disabled="!edit"/>~
      <Datepicker class="datepicker" :value="end" :format="'yyyy-MM-dd'" :disabled="!edit"/>
    </div>

    <!-- Contents -->
    <div class="article_detail">
      <!-- TODO Detail -->
      <div class="article_contents">
        <textarea placeholder="Insert your To Do List." :disabled="!edit"/>
      </div>

      <!-- Tag Box -->
      <div class="article_tags">
        <!-- tags -->
        <Tag/>
        <!-- tag input -->
        <input placeholder="Insert tags ex) #Front #Back" :disabled="!edit">
      </div>
    </div>

    <!-- important button -->
    <div class="star_button" @click="toggleIsImportant">
      <Star :class="{'star': true, 'active':isImportant }"/>
    </div>

    <!-- set button -->
    <div :class="{'set_button':true, 'is_done':isDone}">
      <button @click="toggleEdit">{{buttonText}}</button>
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
export default class Article extends Vue {
  @Prop()
  private type: string;
  @Prop()
  private article: IArticle;

  private begin: Date = new Date();
  private end: Date = new Date();

  private edit: boolean = this.isWrite;
  private isDone: boolean = false;
  private isImportant: boolean = false;

  private get isVaildDate(): boolean {
    return this.begin.getTime() <= this.end.getTime();
  }

  private toggleEdit(): void {
    this.edit = !this.edit;
  }

  private toggleIsDone(): void {
    this.isDone = !this.isDone;
  }

  private toggleIsImportant(): void {
    this.isImportant = !this.isImportant;
  }

  private get isWrite(): boolean {
    return this.type === 'write';
  }

  private get buttonText(): string {
    let buttonText: string = '';
    if (this.isWrite) {
      buttonText = 'Add';
    } else if (this.isDone) {
      buttonText = 'Del';
    } else {
      buttonText = 'Edit';
    }
    return buttonText;
  }
}
</script>