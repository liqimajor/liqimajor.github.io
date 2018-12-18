import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const all = () => import( /* webpackChunkName: "all" */ "./view/AllTodos.vue");
const active = () => import( /* webpackChunkName: "active" */ "./view/CurrentTodos.vue");
const completed = () => import( /* webpackChunkName: "completed" */ "./view/CompletedTodos.vue");
export default new Router({
  mode: 'history', //路由的模式
  routes: [
    { path: '/list/:type', component: all, props: true},
    { path: '/all', component: all },
    { path: '/active', component: active },
    { path: '/completed', component: completed },
    { path: '/', redirect: '/list/0' },
  ]
})
