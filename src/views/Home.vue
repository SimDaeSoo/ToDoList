<template>
  <DefaultLayout :name="name" :type="type">
    <div>
      <Datepicker :value="begin"/>
      <Datepicker :value="end"/>
    </div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    DefaultLayout,
    Datepicker
  }
})
export default class Home extends Vue {
  @Prop()
  private name: string;
  @Prop()
  private type: string;
  public begin: Date = new Date();
  public end: Date = new Date();
}
</script>