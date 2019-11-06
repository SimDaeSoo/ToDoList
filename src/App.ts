import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import directives from './directives';
import VModal from 'vue-js-modal';
import './styles/App.scss';
import Toasted from 'vue-toasted';

Vue.use(VModal, { dynamic: true });
Vue.use(Toasted, { duration: 2000, iconPack: 'material', theme: 'bubble', fullWidth: false });
directives.autoTagParser();

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});