<template>
  <NotFoundLayout>
    <div>요청하신 페이지를 찾을 수 없습니다.</div>
  </NotFoundLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import NotFoundLayout from '../layouts/NotFoundLayout.vue';

@Component({
  components: {
    NotFoundLayout
  }
})
export default class NotFound extends Vue {
}
</script>