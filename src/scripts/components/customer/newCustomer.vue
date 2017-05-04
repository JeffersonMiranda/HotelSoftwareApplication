<template>
    <div>
    
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="First Name">
    <b-form-input v-model="customer.firstName"></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Last Name">
    <b-form-input v-model="customer.lastName"></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Age">
    <b-form-input type="number"></b-form-input>
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
    <div class="col-md-4">
        <b-button variant="primary" @click="postCustomer(customer)">
          Save customer
        </b-button>
    </div>
    </div>

    {{ customer.firstName }}

    </div>
    
</template>

<script>

import { mapActions } from 'vuex'

export default {

 data() {
   return {
     customer: { //CUSTOMER TO SAVE IN DATABASE  
        firstName:"",
        lastName:"",
        street: "",
        city: "",
        state: "",
        country:"",
        phoneNumber:"",
        age:"",
        sex:""
     },  
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
         'postCustomer'
     ])
 }
}

</script>