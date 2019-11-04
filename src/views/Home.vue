<template>
  <DefaultLayout>
    <div>Home</div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultLayout from '../layouts/DefaultLayout.vue';

@Component({
  components: {
    DefaultLayout
  }
})
export default class Home extends Vue { }
</script>