import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import store from './scripts/store.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth'; 

import 'bootstrap/dist/css/bootstrap.css'; //  BOOTSTRAP
import 'bootstrap-vue/dist/bootstrap-vue.css';

import application from './application.vue'; //MAIN COMPONENT
import Login from './scripts/components/login.vue'; // LOGIN COMPONENT 
import Home from './home.vue'; // HOME COMPONENT
import HomeCustomer from './scripts/components/customer/HomeCustomer.vue'
import HomeOccupation from './scripts/components/occupation/HomeOccupation.vue'
import newCustomer from './scripts/components/customer/newCustomer.vue'
import tableCustomers from './scripts/components/customer/tableCustomers.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueAuth, {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', components: { content_type: Login }},
    { path: '/', redirect: '/login' },
    { path:'/customers', components: {content_type: HomeCustomer}, children: [
      {path: '', components:{ customer_procedure: tableCustomers}},
      {path: 'newCustomer', components:{ customer_procedure: newCustomer}}
    ]},
    { path:'/occupations', component: HomeOccupation}                   
    ]
  });

export default new Vue({
  el: 'body',
  router,
  store,
  render: h => h(application) // CHANGE TO APPLICATION, NOT ROTER VIEW
});
