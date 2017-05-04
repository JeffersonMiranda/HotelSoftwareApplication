import { api } from './../api.js';

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
    setCustomers({commit}){
      api.get('customers/').then((response) => {
       commit('SETCUSTOMERS',response.data.objects);
      }).catch(function (error) {
        console.log(error);
     });
   },
   postCustomer(data){
      api.post('customers/',data).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error)
      });
   }
  },
  getters: {
    getCustomers: state => {
      return state.customers;
    }
  }
};
