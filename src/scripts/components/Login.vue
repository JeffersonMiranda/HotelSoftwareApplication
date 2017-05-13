<template>
<div class="container">
 
    <div class="row" id="loginForm">
        <div class="col-md-3">            
            <form>
             <b-form-input v-model="user.username" type="text" placeholder="User" required></b-form-input>             

              <b-form-input v-model="user.password" type="password" placeholder="Password" required></b-form-input>

                   <b-button variant="primary" @click="login($event)"> Login </b-button>
            </form>
        </div>
        
    </div>
        

</div>

</template>

<script>

import {mapGetters,mapActions} from 'vuex';
import { api } from './../modules/api.js';
import store from 'store2';

export default {

    data() {
        return {
           user: { 
            username : "",
            password: ""
            }
        }
    },
    methods: {
         login: function (e) {
          e.preventDefault();

          api.post('rest-auth/login/', {
                username: this.user.username,
                password: this.user.password
          }).then(function (response) {
            if (response.status === 200 && 'token' in response.data) {
              store.session('jwt', response.data.token);
              api.defaults.headers.common['Authorization'] = 'JWT ' + response.data.token;
            }                 
          }).catch(function(error){
              console.log(error);
          });
          
          api.get('customers/', { headers: { 'Authorization': 'JWT '+ store.session('jwt') },timeout :4000})  // NECESSITA DE CREDENCIAIS PARA PODER RETORNAR DADOS
          .then(function(response){
            console.log(response.data);
          });

        }
    }
}

</script>

<style scoped>

#loginForm div { 
        margin: 0 auto;  /* CENTRALIZE THE FORM */
        padding: 180px 0 0 0; 
}

#loginForm input{
    margin: 10px 0 0 0; 
}

#loginForm button{
    margin: 10px 0 0 100px; 
}

</style>

