<template>
  <div class="header">
    <a class="category"># {{type}}</a>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop()
  private type: string;
}
</script>