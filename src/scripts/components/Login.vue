<template>
<div class="container">
 
    <div class="row" id="loginForm">
        <div class="col-md-3">            
            <form>
             <b-form-input v-model="user.username" type="text" placeholder="User" required></b-form-input>             

              <b-form-input v-model="user.password" type="password" placeholder="Password" required></b-form-input>

              <b-button variant="primary" @click.prevent="userLogin(user)"> Login </b-button>
            </form>
        </div>
        
    </div>
        

</div>

</template>

<script>

import {mapGetters,mapActions} from 'vuex';
import { api } from './../modules/api.js';


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
        ...mapActions([
           'userLogin'
        ]),
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

