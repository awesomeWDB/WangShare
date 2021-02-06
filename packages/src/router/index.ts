import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/WangElSearch',
  }, {
    path: '/WangUtils',
    name: 'WangUtils',
    component: () => import('../views/wang-utils/main.vue'),
    children: [
      {
        path: '/WangUtilsDate',
        name: 'WangUtilsDate',
        component: () => import('../views/wang-utils/wang-utils-date/main.vue')
      },
      {
        path: '/WangUtilsStorage',
        name: 'WangUtilsStorage',
        component: () => import('../views/wang-utils/wang-utils-storage/main.vue')
      }
    ]
  }, {
    path: '/WangElSearch',
    name: 'WangElSearch',
    component: () => import('../views/wang-el-search/main.vue'),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
