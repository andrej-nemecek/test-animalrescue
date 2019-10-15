import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cases',
      name: 'cases',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "cases" */ './views/Cases.vue'),
    },
    {
      path: '/new-case',
      name: 'new-case',
      component: () => import(/* webpackChunkName: "new-case" */ './views/NewCase.vue'),
    },
  ],
});
