import { http,helpers } from '.././http.js'; 
import Vue from 'vue';

// export const createCustomer = ({ }) => http.post('/customers', data);

export const getAllCustomers = () => {
    return new Promise((resolve,reject) => { 
        console.log(Vue.axios.baseURL);      
        http.axios.get('customers/').then( response => { // url: customer/
     //     commit('SETCUSTOMERS',response.data);
          resolve(response);        
      }).catch( error => {
          reject(error);
      });

     });
};