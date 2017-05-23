import { api } from './../api.js';
import store from 'store2'; // LIB TO MANAGE SESSIONS 
import Vue from 'vue';

export default {

state: {
  user: { username: "",
          isAuthenticated: false
  }
},

mutations: {
    SETUSER(state,user,isAuthenticated){
        state.user.username = user.username;
        state.user.isAuthenticated = !isAuthenticated; // SETTING TRUE
    }
},

actions: {  
    userLogin({commit},user){
         api.post('rest-auth/login/', {
                username: user.username,
                password: user.password
          }).then(function (response) {
            if (response.status === 200 && 'token' in response.data) {              
              store.session('jwt', response.data.token); // SET SESSION FOR TOKEN 
              api.defaults.headers['Authorization'] = 'JWT ' + response.data.token; // SET HEADER FOR AUTHORIZATION
              Vue.axios.defaults.headers['Authorization'] = 'JWT ' + response.data.token; // TESTING 
              commit('SETUSER',user,true);   
            }                 
          }).catch(function(error){
                alert(error);
          });
     }

},

getters: {
    getUser: state => { 
        return state.user;
     }
}

};
