<template>
<div class="container">
 
    <div class="row" id="loginForm">
        <div class="col-md-3">            
            <form>
             <b-form-input v-model="user.username" type="text" placeholder="User" required></b-form-input>             

              <b-form-input v-model="user.password" type="password" placeholder="Password" required></b-form-input>

                   <b-button variant="primary" @click="handleSubmit($event)"> Login </b-button>
            </form>
        </div>
        
    </div>
        
</div>

</template>

<script>

export default {

    data(){
        return{
           user:{ 
            username : "",
            password: ""
            }
        }
    },

    methods: {
        handleSubmit: function(e){
            e.preventDefault();

            this.$auth.login({
                data: {
                    username: this.user.username,
                    password: this.user.password
                },
                success: function(){
                    alert("Login successfull");
                    alert(JSON.stringify(this.$auth.user()));
                },
                error: function(){
                    alert("Error")
                },
                rememberMe: true,
                redirect: '/'
            })
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

