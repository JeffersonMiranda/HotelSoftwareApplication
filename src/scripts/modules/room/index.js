import { api } from './../api.js';

export default {

  state: {
    rooms: []
  },
  mutations: {
    SETROOMS(state, data) {
      state.rooms = data;
    }
  },
  actions: {
   setRooms({commit}){  // RETRIEVE ALL ROOMS FROM DATABASE
    return new Promise((resolve,reject) => {       
        api.get('rooms/').then(function(response){ // url: customer/
          commit('SETROOMS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postRoom({commit},data){  // INSERT NEW ROOM ON DATABASE
     return new Promise((resolve,reject) => {       
        api.post('rooms/', data).then(function(response){
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   deleteRoom({commit},id){
     return new Promise((resolve,reject) => {       
        api.delete('rooms/'+id+'/').then(function(response){  // url: customer/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateRoom({commit},data){  // INSERT NEW CUSTOMER ON DATABASE
     return new Promise((resolve,reject) => {       
        api.put('rooms/'+data.id+'/', data).then(function(response){ // url: customer/1/ + data
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
  }
  },
  getters: {
    getRooms: state => {
      return state.rooms;
    }
  }
};
