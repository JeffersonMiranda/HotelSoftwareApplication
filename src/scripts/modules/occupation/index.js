import { api,helpers } from './../api.js';

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
        api.get('occupations' + helpers.getAll).then(function(response){ // url: customer/
          commit('SETOCCUPATIONS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postOccupation({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
        api.post('occupations/', data).then(function(response){ // url: occupation/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });

     });
   },
   deleteOccupation({commit},id){
     return new Promise((resolve,reject) => {       
        api.delete('occupations/'+id+'/').then(function(response){  // url: occupation/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateOccupation({commit},data){  // INSERT NEW OCCUPATION ON DATABASE
     return new Promise((resolve,reject) => {       
        api.put('occupations/'+data.id+'/', data).then(function(response){ // url: occupation/1/ + data
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
