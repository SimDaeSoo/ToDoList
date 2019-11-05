<template>
  <div class="sidebar">
    <a class="logo" @click="toggle">- TODO List</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn" ref="closeNav">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li class="search">
        <input type="text" placeholder="Search" v-model="searchString" @keydown.enter="search" />
      </li>
    </ul>
    <ul class="menu">
      <li class="category">
        <a># Category</a>
      </li>
      <SidebarColum
        v-for="(item,index) in categories"
        :key="'category'+index"
        :name="'category'"
        :type="item"
        :callback="toggle"
      />

      <li class="category">
        <a># Tags</a>
      </li>
      <SidebarColum
        v-for="(item,index) in tags"
        :key="'tags'+index"
        :name="'tags'"
        :type="item"
        :callback="toggle"
      />
    </ul>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SidebarColum from "./SidebarColum.vue";
import { isSameRoute } from "../utils";
import { Dictionary } from "../interfaces";

@Component({
  components: {
    SidebarColum
  }
})
export default class Sidebar extends Vue {
  private categories: Array<string> = this.$store.getters.categories;
  private tags: Array<string> = this.$store.getters.tags;
  private searchString: string = "";

  private search(): void {
    this.linkTo(`/search/${this.searchString}`);
    this.searchString = "";
  }
  private linkTo(to: string): void {
    if (!isSameRoute(this.$router.currentRoute.path, to)) {
      this.$router.push(to.toLowerCase());
    }
    this.toggle();
  }

  private toggle(): void {
    (this.$refs.closeNav as HTMLElement).click();
  }
}
</script>