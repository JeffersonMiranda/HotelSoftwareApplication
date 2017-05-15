<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="First Name">
    <b-form-input v-model="customer.firstName" required></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Last Name">
    <b-form-input  v-model="customer.lastName" required></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Age">
    <b-form-input v-model="customer.age" type="number"></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-2">
    <b-input-group left="Sex">
    <b-form-select v-model="customer.sex" 
                   :options="options">
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Phone Number">
    <b-form-input v-model="customer.phoneNumber" type="number"></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>
    <!--ADDRESS -->
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Street">
    <b-form-input v-model="customer.street"></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-4">
    <b-input-group left="City">
    <b-form-input v-model="customer.city"></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-2">
    <b-input-group left="State">
    <b-form-input v-model="customer.state"></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>   
    <div class="row">
    <div class="col-md-6">
    <b-input-group left="Country">
    <b-form-input v-model="customer.country"></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-6">
        <b-button variant="primary" @click.prevent="updateCust()">
          Save modifications
        </b-button>
         <b-button variant="primary" @click.prevent="backToCustomersList()">
          Back to customers list
        </b-button>
    </div>
    </div>

    </form>
      
    </div>
    
</template>

<script>

import { mapActions } from 'vuex'

export default {

 data() {
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
         'updateCustomer'
     ]),
     updateCust: function(){
         this.updateCustomer(this.customer)
         .then( response => { 
             alert("User updated !");  // CLEAN CUSTOMER FORMS IN A CALL BACK               
            })
         .catch( response => { alert("Error") })
             
     },
     backToCustomersList: function(){
           this.$router.push('/customers');      
     }
 },
  created: function() {
      this.customer = this.$route.params.customer;       
   }
}

</script>