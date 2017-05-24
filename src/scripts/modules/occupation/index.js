import * as occupationService from './../../services/occupations/';

export default {

  state: {
    occupations: []
  },

  mutations: {
    SETOCCUPATIONS(state, data) {
      state.occupations = data;
    }
  },

  actions: {
    setOccupations({commit}){  // RETRIEVE ALL OCCUPATIONS FROM DATABASE AND INSERT IN STATE
     return new Promise((resolve,reject) => {       
        occupationService.getOccupations().then(function(response){ // url: customer/
          commit('SETOCCUPATIONS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postOccupation({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
        occupationService.createOccupation(data).then(function(response){ // url: occupation/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });

     });
   },
   deleteOccupation({commit},id){
     return new Promise((resolve,reject) => {       
        occupationService.deleteOccupation(id).then(function(response){  // url: occupation/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateOccupation({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
        occupationService.updateOccupation(data).then(function(response){ // url: occupation/1/ + data
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
  }
 },
  getters: {
    getOccupations: state => {
      return state.occupations;
    }
  }
};
