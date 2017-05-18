<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="First Name">
    <b-form-input v-model="employee.firstName" required readonly></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Last Name">
    <b-form-input  v-model="employee.lastName" required readonly></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Age">
    <b-form-input v-model="employee.age" type="number" readonly></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-2">
    <b-input-group left="Sex">
    <b-form-select v-model="employee.sex" :options="options" required disabled>
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Phone Number">
    <b-form-input v-model="employee.phoneNumber" type="number" readonly></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>
    <!--ADDRESS -->
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Street">
    <b-form-input v-model="employee.street" readonly></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-4">
    <b-input-group left="City">
    <b-form-input v-model="employee.city" readonly></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-2">
    <b-input-group left="State">
    <b-form-input v-model="employee.state" readonly></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>   
    <div class="row">
    <div class="col-md-6">
    <b-input-group left="Country">
    <b-form-input v-model="employee.country" readonly></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
    <b-button variant="primary" :to="{path: '/employees'}"> <!-- BUTTON TO CONSULT employee-->
        Back
    </b-button>

    <b-button variant="primary" :to="{name:'editEmployee', params: { employee: this.employee}}"> <!-- BUTTON TO CONSULT EMPLOYEE-->
        Edit
    </b-button>

     <b-button variant="primary" @click.prevent="deleteEmpl()"> <!-- BUTTON TO CONSULT EMPLOYEE-->
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
        employee: [],
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
         'deleteEmployee'
         ]),
      deleteEmpl: function(){

            this.deleteEmployee(this.employee.id)
            .then( response => { 
             alert("Employee deleted !");
              this.$router.push('/employees')            
            })
         .catch( response => { alert("Error") });                   
        }
         
    },
    created: function() {
      this.employee = this.$route.params.employee;       
   }
}

</script>