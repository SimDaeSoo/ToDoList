<template>
  <div id="app">
    <router-view/>
    <modals-container/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    const loadResult: boolean = await this.$store.dispatch('load');
    if (loadResult) {
      this.$toasted.show("Load is Success!", { icon: "check" as any });
    } else {
      this.$toasted.show("Load is Fail!", { icon: "close" as any });
    }
  }
}
</script>