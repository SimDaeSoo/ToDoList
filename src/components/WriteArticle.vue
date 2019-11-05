<template>
  <div>
    <!-- is Important? -->
    <input type="checkbox">
    <!-- is Done? -->
    <input type="checkbox">
    <!-- Date Picker -->
    <div>
      <Datepicker class="datepicker" :value="begin" :format="'yyyy-MM-dd'"/>
      <Datepicker class="datepicker" :value="end" :format="'yyyy-MM-dd'"/>
    </div>
    <!-- TODO Detail -->
    <div>
      <textarea/>
    </div>
    <!-- Tag Box -->
    <div>
      <div>#Front</div>
      <input>
    </div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    Datepicker
  }
})
export default class WriteArticle extends Vue {
  private begin: Date = new Date();
  private end: Date = new Date();

  private get isVaildDate(): boolean {
    return this.begin.getTime() <= this.end.getTime();
  }
}
</script>