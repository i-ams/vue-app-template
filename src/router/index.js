import Vue from 'vue';
import VueRouter from 'vue-router'; 

import dashboard from '../views/dashboard.vue';

//calendar
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: dashboard,
    meta: {
      title: ''
    }
  },  
];
//findDietitians
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

var vm = this;

export default router;
