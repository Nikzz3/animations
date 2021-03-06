import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/svg',
    name: 'SVG',
    component: () => import('../views/SVG.vue')
  },
  {
    path: '/video-scrolling',
    name: 'VideScrolling',
    component: () => import('../views/VideoScrolling.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
