import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export const router: Router = new Router({
    routes: [
        { path: "/", component: Home, props: (route) => ({ name: 'category', type: 'all' }) },
        { path: "/category", component: Home, props: (route) => ({ name: 'category', type: 'all' }) },
        { path: "/category/:type", component: Home, props: (route) => ({ name: 'category', type: route.params.type }) },
        { path: "/tags", component: Home, props: (route) => ({ name: 'tag', type: 'all' }) },
        { path: "/tags/:type", component: Home, props: (route) => ({ name: 'tag', type: route.params.type }) }
    ]
});