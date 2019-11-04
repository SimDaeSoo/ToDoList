<template>
  <div class="sidebar">
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <label class="menu-icon" for="menu-btn" ref="closeNav">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li>
        <a @click="linkTo('/')">· All list</a>
      </li>
      <li>
        <a @click="linkTo('upcoming')">· Upcoming</a>
      </li>
      <li>
        <a @click="linkTo('importants')">· Importants</a>
      </li>
    </ul>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  private linkTo(to: string): void {
    if (this.$router.currentRoute.path.replace(/\//g, '') !== to.replace(/\//g, '')) {
      this.$router.push(to);
    }
  }
}
</script>