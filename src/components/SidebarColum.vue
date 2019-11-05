<template>
  <li @click="linkTo(`/${name}/${type}`)" :class="{'active': isActive}">
    <a># {{type}}</a>
    <a class="noti">{{articles.length}}</a>
  </li>
</template>

<script lang = "ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { isSameRoute, getFilteredArticles } from '../utils';
import { IArticle } from '../interfaces';

@Component
export default class SidebarColum extends Vue {
  @Prop()
  private type: string;
  @Prop()
  private name: string;
  @Prop()
  private callback: Function;
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
    this.callback();
  }

  private get isActive(): boolean {
    const comparePath: string = this.path !== '/' ? this.path : '/category/all';
    return isSameRoute(comparePath, `/${this.name}/${this.type}`);
  }

  private get articles(): Array<IArticle> {
    return getFilteredArticles(this.$store.getters.articles, { type: this.type, name: this.name });
  }
}
</script>