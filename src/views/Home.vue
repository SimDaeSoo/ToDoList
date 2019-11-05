<template>
  <DefaultLayout :name="name" :type="type">
    <div>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Article from '../components/Article.vue';

@Component({
  components: {
    DefaultLayout,
    Article
  }
})
export default class Home extends Vue {
  @Prop()
  private name: string;
  @Prop()
  private type: string;
}
</script>