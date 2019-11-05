<template>
  <li @click="linkTo(`/${name}/${type}`)" :class="{'active': isActive}">
    <a># {{type}}</a>
  </li>
</template>

<script lang = "ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { isSameRoute } from '../utils';

@Component
export default class SidebarColum extends Vue {
  @Prop()
  private type: string;
  @Prop()
  private name: string;
  private path: string = '';
  @Watch('$route')
  private updateRoutePath(): void {
    this.path = this.$router.currentRoute.fullPath;
  }

  mounted() {
    this.path = this.$router.currentRoute.fullPath;
  }

  private linkTo(to: string): void {
    if (!isSameRoute(this.$router.currentRoute.path, to)) {
      this.$router.push(to.toLowerCase());
    }
  }

  private get isActive(): boolean {
    const comparePath: string = this.path !== '/' ? this.path : '/category/all';
    return isSameRoute(comparePath, `/${this.name}/${this.type}`);
  }
}
</script>