import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
// import VModal from 'vue-js-modal';
// import directives from './directives';
import './styles/App.scss';

// Vue.use(VModal, { dynamic: true });
// directives.focus();


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});