<template>
  <section class="default_layout">
    <Sidebar/>
    <Contents>
      <Header/>
      <slot/>
    </Contents>
  </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import Contents from '../components/Contents.vue';

@Component({
  components: {
    Sidebar,
    Header,
    Contents
  }
})
export default class DefaultLayout extends Vue { }
</script>