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
      api.get('rooms/').then((response) => {
       commit('SETROOMS',response.data);
      }).catch(function (error) {
        console.log(error);
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
   }
  },
  getters: {
    getRooms: state => {
      return state.rooms;
    }
  }
};
