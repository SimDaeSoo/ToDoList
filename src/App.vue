<template>
  <div id="app">
    <router-view/>
    <!-- <modals-container /> -->
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
    this.initialize();
  }

  private initialize(): void {
    this.$store.dispatch('load');
  }
}
</script>