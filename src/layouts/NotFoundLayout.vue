<template>
  <section class="not_found_layout">
    <Sidebar/>
    <Contents>
      <slot/>
    </Contents>
  </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Sidebar from '../components/Sidebar.vue';
import Contents from '../components/Contents.vue';

@Component({
  components: {
    Sidebar,
    Contents
  }
})
export default class NotFoundLayout extends Vue { }
</script>