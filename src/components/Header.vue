<template>
  <div class="header">Header</div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private toggle(): void {
    (this.$refs.closeNav as HTMLElement).click();
  }
}
</script>