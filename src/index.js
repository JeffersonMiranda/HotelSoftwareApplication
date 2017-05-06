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
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    rolesVar: 'type',
    loginData: {url: 'http://localhost:8000/rest-auth/login/', method: 'POST', redirect: '/home', fetchUser: false},
    fetchData: {url: 'http://localhost:8000/rest-auth/user/', method: 'GET'}
});


Vue.router =  new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },  /* REDIRECT TO HOME PAGE OR LOGIN IF USER IS AUTHENTICATED OR NOT */
    { path:'/customers', meta: {auth: 'admin'}, components: {content_type: HomeCustomer}, children: [
      {path: '', components:{ customer_procedure: tableCustomers}},
      {path: 'newCustomer', components:{ customer_procedure: newCustomer}}
    ]},
    { path:'/occupations', meta:{ auth:'admin' }, components: {content_type: HomeOccupation}}                   
    ]
  });

const router = Vue.router;

export default new Vue({
  el: 'body',
  router,
  store,
  render: h => h(application) // CHANGE TO APPLICATION, NOT ROTER VIEW
});
