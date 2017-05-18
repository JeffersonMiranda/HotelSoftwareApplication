import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import store from './scripts/store.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSession from 'vue-session';
import Spinner from 'vue-simple-spinner'; 

import 'bootstrap/dist/css/bootstrap.css'; //  BOOTSTRAP
import 'bootstrap-vue/dist/bootstrap-vue.css';

import application from './application.vue'; //MAIN COMPONENT
import Home from './home.vue'; // HOME COMPONENT
import HomeCustomer from './scripts/components/customer/HomeCustomer.vue';
import newCustomer from './scripts/components/customer/newCustomer.vue';
import tableCustomers from './scripts/components/customer/tableCustomers.vue';
import consultationCustomer from './scripts/components/customer/consultationCustomer.vue';
import editCustomer from './scripts/components/customer/editCustomer.vue';

import HomeRoom from './scripts/components/room/HomeRoom.vue';
import tableRooms from './scripts/components/room/tableRooms.vue';
import newRoom from './scripts/components/room/newRoom.vue';
import consultationRoom from './scripts/components/room/consultationRoom.vue';
import editRoom from './scripts/components/room/editRoom.vue';

import HomeEmployee from './scripts/components/employee/HomeEmployee.vue';
import tableEmployees from './scripts/components/employee/tableEmployees.vue';
import newEmployee from './scripts/components/employee/newEmployee.vue';
import consultationEmployee from './scripts/components/employee/consultationEmployee.vue';
import editEmployee from './scripts/components/employee/editEmployee.vue';

import HomeOccupation from './scripts/components/occupation/HomeOccupation.vue';
import newOccupation from './scripts/components/occupation/newOccupation.vue';
import tableOccupations from './scripts/components/occupation/tableOccupations.vue';
import consultationOccupation from './scripts/components/occupation/consultationOccupation.vue';

import HomePayment from './scripts/components/payment/HomePayment.vue';
import makePayment from './scripts/components/payment/makePayment.vue';
import tablePayments from './scripts/components/payment/tablePayments.vue';
import consultationPayment from './scripts/components/payment/consultationPayment.vue';

Vue.use(VueRouter);
Vue.use(VueSession);
Vue.use(BootstrapVue);
Vue.use(VueAxios,axios);
Vue.component('spinner', Spinner); // SPINNER TO SHOW IN UNLOADED PAGES


const router =  new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },  /* REDIRECT TO HOME PAGE OR LOGIN IF USER IS AUTHENTICATED OR NOT */
    { path:'/customers', components: {content_type: HomeCustomer}, children: [
      {path: '', components:{ customer_procedure: tableCustomers}},
      {path: 'newCustomer', components:{ customer_procedure: newCustomer}},
      {path: 'consultationCustomer/:customer', name:'consultationCustomer', components:{ customer_procedure: consultationCustomer}},
      {path: 'editCustomer/:customer', name:'editCustomer', components:{ customer_procedure: editCustomer}}
    ]},
    { path:'/occupations', components: {content_type: HomeOccupation}, children: [
      {path: '', components:{ occupation_procedure: tableOccupations}},
      {path: 'newOccupation', components:{ occupation_procedure: newOccupation}},
      {path: 'consultationOccupation', name:'consultationOccupation', components:{ occupation_procedure: consultationOccupation}}
    ]},     
     { path:'/rooms', components: {content_type: HomeRoom}, children: [
      {path: '', components:{ room_procedure: tableRooms}},
      {path: 'newRoom', components:{ room_procedure: newRoom}},
      {path: 'consultationRoom/:room', name:'consultationRoom', components:{ room_procedure: consultationRoom}},
      {path: 'editRoom/:room', name:'editRoom', components:{ room_procedure: editRoom}}
    ]},
      {path:'/employees', components: {content_type: HomeEmployee}, children: [
      {path: '', components:{ employee_procedure: tableEmployees}},
      {path: 'newEmployee', components:{ employee_procedure: newEmployee}},
      {path: 'consultationEmployee/:employee', name:'consultationEmployee', components:{ employee_procedure: consultationEmployee}},
      {path: 'editEmployee/:employee', name:'editEmployee', components:{ employee_procedure: editEmployee}}     
    ]},     
      {path:'/payments', components: {content_type: HomePayment}, children: [
      {path: '', components:{ payment_procedure: tablePayments}},
      {path: 'makePayment', components:{ payment_procedure: makePayment}},
      {path: 'consultationPayment/:payment', name:'consultationPayment', components:{ payment_procedure: consultationPayment}}   
    ]}             
    ]
  });

export default new Vue({
  el: 'body',
  router,
  store,
  render: h => h(application) // CHANGE TO APPLICATION, NOT ROTER VIEW
});
