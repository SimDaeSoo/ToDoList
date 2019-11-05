import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import directives from './directives';
// import VModal from 'vue-js-modal';
import './styles/App.scss';

// Vue.use(VModal, { dynamic: true });
directives.autoTagParser();

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});