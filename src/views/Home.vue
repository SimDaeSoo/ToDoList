<template>
  <DefaultLayout :name="name" :type="type">
    <div>
      <WriteArticle/>
    </div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import WriteArticle from '../components/WriteArticle.vue';

@Component({
  components: {
    DefaultLayout,
    WriteArticle
  }
})
export default class Home extends Vue {
  @Prop()
  private name: string;
  @Prop()
  private type: string;
}
</script>