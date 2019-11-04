<template>
  <div class="contents">
    <slot/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Contents extends Vue { }
</script>