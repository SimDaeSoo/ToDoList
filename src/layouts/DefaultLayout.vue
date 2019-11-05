<template>
  <section class="default_layout">
    <Sidebar/>
    <div class="full">
      <Contents>
        <Header :type="type"/>
        <slot/>
      </Contents>
    </div>
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
export default class DefaultLayout extends Vue {
  @Prop()
  private name: string;
  @Prop()
  private type: string;
}
</script>