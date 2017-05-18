import { api,helpers } from './../api.js';

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
    setCustomers({commit}){  // RETRIEVE ALL CUSTOMERS FROM DATABASE AND INSERT IN STATE
       return new Promise((resolve,reject) => {       
        api.get('customers/').then(function(response){ // url: customer/
          commit('SETCUSTOMERS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });

     });
   },
   postCustomer({commit},data){  // INSERT NEW CUSTOMER ON DATABASE
     return new Promise((resolve,reject) => {       
        api.post('customers/', data).then(function(response){ // url: customer/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });

     });
   },
   deleteCustomer({commit},id){
     return new Promise((resolve,reject) => {       
        api.delete('customers/'+id+'/').then(function(response){  // url: customer/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateCustomer({commit},data){  // INSERT NEW CUSTOMER ON DATABASE
     return new Promise((resolve,reject) => {       
        api.put('customers/'+data.id+'/', data).then(function(response){ // url: customer/1/ + data
          resolve(response);        
      }).catch(function(error){
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
