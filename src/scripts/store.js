import Vue from 'vue';
import Vuex from 'vuex';
import customer from './modules/customer/';
import room from './modules/room/';
import user from './modules/user/';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    customer,
    user,
    room
  }
});

