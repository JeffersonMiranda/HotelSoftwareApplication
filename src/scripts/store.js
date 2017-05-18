import Vue from 'vue';
import Vuex from 'vuex';
import customer from './modules/customer/';
import room from './modules/room/';
import user from './modules/user/';
import employee from './modules/employee/';
import occupation from './modules/occupation/';
import payment from './modules/payment/';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    customer,
    user,
    room,
    employee,
    occupation,
    payment
  }
});

