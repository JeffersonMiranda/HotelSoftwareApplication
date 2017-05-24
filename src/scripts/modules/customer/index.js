import * as customerService from './../../services/customers/';

export default {

  state: {
    customers: []
  },

  mutations: {
    SETCUSTOMERS(state, data) {
      state.customers = data;
    }
  },

  actions: {
    setCustomers({ commit }) {  // RETRIEVE ALL CUSTOMERS FROM DATABASE AND INSERT IN STATE        
      return new Promise((resolve, reject) => {
        customerService.getCustomers().then(function (response) { // url: customer/
          commit('SETCUSTOMERS', response.data);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    postCustomer({ commit }, data) {  // INSERT NEW CUSTOMER ON DATABASE
      return new Promise((resolve, reject) => {
        customerService.createCustomer(data).then(function (response) { // url: customer/
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });

      });
    },
    deleteCustomer({ commit }, id) {
      return new Promise((resolve, reject) => {
        customerService.deleteCustomer(id).then(function (response) {  // url: customer/1/
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    updateCustomer({ commit }, data) {  // INSERT NEW CUSTOMER ON DATABASE
      return new Promise((resolve, reject) => {
        customerService.updateCustomer(data).then(function (response) { // url: customer/1/ + data
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },
  getters: {
    getCustomers: state => {
      return state.customers;
    }
  }
};
