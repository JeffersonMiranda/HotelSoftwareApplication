<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-6">
    <b-input-group left="Occupation">
    <b-form-input v-model="payment.occupation.firstName" type="text"></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-6">
    <b-input-group left="Employee">
    <b-form-input v-model="payment.employee.firstName" type="text"></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Pay date">
    <input v-model="payment.paymentDay" type="date" required>
    </b-input-group>   
    </div>

    <div class="col-md-6">
    <b-input-group left="Total days">
    <b-form-input v-model="payment.totalDays" type="number" disabled></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>

    <div class="row">

    <div class="col-md-8">
    <b-input-group left="Price">
    <b-form-input textarea v-model="payment.price" type="number" disabled></b-form-input>
    </b-input-group>   
    </div>

    </div>
    
    <div class="row">

    <div class="col-md-8">
    <b-input-group left="Notes">
    <b-form-input textarea v-model="payment.notes" type="text"></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
        <b-button variant="primary" @click.prevent="makePayment()">
          Make payment
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
     payment: { //room TO SAVE IN DATABASE  
        paymentDate:"",
        notes: "",
        paid: true,
        employee_id: "",
        occupation_id: ""
     }  
   }
 },
 methods:{
     ...mapActions([
         'updatePayment'
     ]),
     makePayment: function(){
         this.updatePayment(this.payment)
         .then( response => { 
             alert("Paid !");           
            })
         .catch( response => { alert("Error") });             
     }
 }

}

</script>