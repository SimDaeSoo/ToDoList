<template>
  <li @click="linkTo(`/${name}/${type}`)">
    <a># {{type}}</a>
  </li>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SidebarColum extends Vue {
  @Prop()
  private type: string;
  @Prop()
  private name: string;

  private linkTo(to: string): void {
    if (this.$router.currentRoute.path.replace(/\//g, '') !== to.replace(/\//g, '')) {
      this.$router.push(to);
    }
  }
}
</script>