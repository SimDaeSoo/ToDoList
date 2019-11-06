<template>
  <div class="alert_modal">
    <div class="alert_contents">{{alertString}}</div>
    <button class="alert_confirm" @click="$emit('close')">확인</button>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AlertModal extends Vue {
  @Prop()
  private alertString: string;
}
</script>