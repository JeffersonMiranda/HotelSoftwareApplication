<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="First Name">
    <b-form-input v-model="customer.firstName" required readonly></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Last Name">
    <b-form-input  v-model="customer.lastName" required readonly></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Age">
    <b-form-input v-model="customer.age" type="number" readonly></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-2">
    <b-input-group left="Sex">
    <b-form-select v-model="customer.sex" :options="options" required disabled>
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Phone Number">
    <b-form-input v-model="customer.phoneNumber" type="number" readonly></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>
    <!--ADDRESS -->
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Street">
    <b-form-input v-model="customer.street" readonly></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-4">
    <b-input-group left="City">
    <b-form-input v-model="customer.city" readonly></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-2">
    <b-input-group left="State">
    <b-form-input v-model="customer.state" readonly></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>   
    <div class="row">
    <div class="col-md-6">
    <b-input-group left="Country">
    <b-form-input v-model="customer.country" readonly></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
    <b-button variant="primary" :to="{path: '/customers'}"> <!-- BUTTON TO CONSULT CUSTOMER-->
        Back
    </b-button>

    <b-button variant="primary" :to="{name:'editCustomer', params: { customer: this.customer}}"> <!-- BUTTON TO CONSULT CUSTOMER-->
        Edit
    </b-button>

     <b-button variant="primary" @click.prevent="deleteCust()"> <!-- BUTTON TO CONSULT CUSTOMER-->
       Delete
    </b-button>
       </div>
    </div>

    </form>

    </div>
    
</template>

<script>

import { mapActions } from 'vuex'

export default {

    data (){
     return {
        customer: [],
        selected: [],   
     options:[
        { 
       text: 'Male',
       value: 'male'  
        },
        {
         text: 'Female',
         value: 'female'   
        }      
       ]
      }
    },
    methods:{
     ...mapActions([
         'deleteCustomer'
         ]),
      deleteCust: function(){

            this.deleteCustomer(this.customer.id)
            .then( response => { 
             alert("User deleted !");
              this.$router.push('/customers')            
            })
         .catch( response => { alert("Error") });                   
        }
         
    },
    created: function() {
      this.customer = this.$route.params.customer;       
   }
}

</script>