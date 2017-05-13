import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import store from './scripts/store.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSession from 'vue-session';

import 'bootstrap/dist/css/bootstrap.css'; //  BOOTSTRAP
import 'bootstrap-vue/dist/bootstrap-vue.css';

import application from './application.vue'; //MAIN COMPONENT
import Home from './home.vue'; // HOME COMPONENT
import HomeCustomer from './scripts/components/customer/HomeCustomer.vue';
import HomeOccupation from './scripts/components/occupation/HomeOccupation.vue';
import newCustomer from './scripts/components/customer/newCustomer.vue';
import tableCustomers from './scripts/components/customer/tableCustomers.vue';

Vue.use(VueRouter);
Vue.use(VueSession);
Vue.use(BootstrapVue);
Vue.use(VueAxios,axios);


const router =  new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },  /* REDIRECT TO HOME PAGE OR LOGIN IF USER IS AUTHENTICATED OR NOT */
    { path:'/customers', components: {content_type: HomeCustomer}, children: [
      {path: '', components:{ customer_procedure: tableCustomers}},
      {path: 'newCustomer', components:{ customer_procedure: newCustomer}}
    ]},
    { path:'/occupations', components: {content_type: HomeOccupation}}                   
    ]
  });


export default new Vue({
  el: 'body',
  router,
  store,
  render: h => h(application) // CHANGE TO APPLICATION, NOT ROTER VIEW
});
