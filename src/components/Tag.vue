<template>
  <div class="tag">
    #{{tag}}
    <button class="tag_button" :disabled="disabled" @click="callback(tag)">X</button>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tag extends Vue {
  @Prop()
  private tag: string;
  @Prop()
  private disabled: boolean;
  @Prop()
  private callback: Function;
}
</script>