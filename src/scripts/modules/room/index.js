import * as roomService from './../../services/rooms/';

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
        roomService.getRooms().then(function(response){ // url: customer/
          commit('SETROOMS',response.data);
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   postRoom({commit},data){  // INSERT NEW ROOM ON DATABASE
     return new Promise((resolve,reject) => {       
        roomService.createRoom(data).then(function(response){
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
     });
   },
   deleteRoom({commit},id){
     return new Promise((resolve,reject) => {       
        roomService.deleteRoom(id).then(function(response){  // url: customer/1/
          resolve(response);        
      }).catch(function(error){
          reject(error);
      });
    });
   },
   updateRoom({commit},data){  // INSERT NEW CUSTOMER ON DATABASE
     return new Promise((resolve,reject) => {       
        roomService.updateRoom(data).then(function(response){ // url: customer/1/ + data
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
