<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="First Name">
    <b-form-input v-model="employee.firstName" required></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Last Name">
    <b-form-input  v-model="employee.lastName" required></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Age">
    <b-form-input v-model="employee.age" type="number"></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-2">
    <b-input-group left="Sex">
    <b-form-select v-model="employee.sex" 
                   :options="options">
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Phone Number">
    <b-form-input v-model="employee.phoneNumber" type="number"></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>
    <!--ADDRESS -->
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Street">
    <b-form-input v-model="employee.street"></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-4">
    <b-input-group left="City">
    <b-form-input v-model="employee.city"></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-2">
    <b-input-group left="State">
    <b-form-input v-model="employee.state"></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>   
    <div class="row">
    <div class="col-md-6">
    <b-input-group left="Country">
    <b-form-input v-model="employee.country"></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
        <b-button variant="primary" @click.prevent="saveEmployee()">
          Save employee
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
     employee: { //EMPLOYEE TO SAVE IN DATABASE  
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
         'postEmployee'
     ]),
     saveEmployee: function(){
         this.postEmployee(this.employee)
         .then( response => { 
             alert("Employee saved !",  this.employee = [] );  // CLEAN EMPLOYEE FORMS IN A CALL BACK 
               
            })
         .catch( response => { alert("Error") })
             
     }
 }
}

</script>