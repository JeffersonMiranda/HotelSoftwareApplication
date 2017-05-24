import * as paymentService from './../../services/payments/';

export default {

  state: {
    payments: []
  },

  mutations: {
    SETPAYMENTS(state, data) {
      state.payments = data;
    }
  },

  actions: {
    setPayments({commit}){  // RETRIEVE ALL PAYMENTS FROM DATABASE AND INSERT IN STATE
     return new Promise((resolve,reject) => {       
        paymentService.getPayments().then(function(response){ // url: payments/
          commit('SETPAYMENTS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postPayment({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
        paymentService.createPayment(data).then(function(response){ // url: payments/
          resolve(response);        
      }).catch(function(error){
          reject(error);          
      });

     });
   },
   deletePayment({commit},id){
     return new Promise((resolve,reject) => {       
        paymentService.deletePayment(id).then(function(response){  // url: payments/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updatePayment({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
          paymentService.updatePayment(data).then(function(response){ // url: payments/1/ + data
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
  }
 },
  getters: {
    getPayments: state => {
      return state.payments;
    }
  }
};
