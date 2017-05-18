import { api } from './../api.js';

export default {

  state: {
    employees: []
  },

  mutations: {
    SETEMPLOYEES(state, data) {
      state.employees = data;
    }
  },

  actions: {
    setEmployees({commit}){  // RETRIEVE ALL EMPLOYEES FROM DATABASE AND INSERT IN STATE
     return new Promise((resolve,reject) => {       
        api.get('employees/').then(function(response){ // url: customer/
          commit('SETEMPLOYEES',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postEmployee({commit},data){  // INSERT NEW EMPLOYEE ON DATABASE
     return new Promise((resolve,reject) => {       
        api.post('employees/', data).then(function(response){ // url: employee/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });

     });
   },
   deleteEmployee({commit},id){
     return new Promise((resolve,reject) => {       
        api.delete('employees/'+id+'/').then(function(response){  // url: employee/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateEmployee({commit},data){  // INSERT NEW EMPLOYEE ON DATABASE
     return new Promise((resolve,reject) => {       
        api.put('employees/'+data.id+'/', data).then(function(response){ // url: employee/1/ + data
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
  }
 },
  getters: {
    getEmployees: state => {
      return state.employees;
    }
  }
};
