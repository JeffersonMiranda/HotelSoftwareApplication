<template>
    <div>
    
    <div v-if="!loading">

    <form>

    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="Customer">
    <b-form-select v-model="occupation.customer" :options="customers" text-field="firstName" value-field="id">
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-4">
    <b-input-group left="Room">
    <b-form-select v-model="occupation.room" :options="rooms" text-field="roomType" value-field="id">
    </b-form-select>
    </b-input-group>
    </div>
    
    </div>

    </br>
    <div class="row">

    <div class="col-md-4">
    <b-input-group left="Employee">
    <b-form-select v-model="occupation.employee" :options="employees" text-field="firstName" value-field="id">
    </b-form-select>
    </b-input-group> 
    
    </div>     
   
    <div class="col-md-4">
    <input v-model="occupation.entryDate" type="date" class="form-control">   
    </div>

    <div class="col-md-4">

    <input v-model="occupation.exitDate" type="date" class="form-control">    
    
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
        <b-button variant="primary" @click.prevent="saveOccupation()">
          Save occupation
        </b-button>
    </div>
    </div>

     </form>
    </div>

    <div v-else>
        <spinner></spinner>
    </div>

 {{ occupation }}
 {{ payment }}
 </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'

export default {

 data() {
   return {
     loading: true, // THE FORM IS LOADING WHILE THE DATA IS FETCHED
     occupation: {  //OCCUPATION TO SAVE IN DATABASE 
         entryDate:"",
         exitDate: "",
         customer: "",
         employee: "",
         room: ""
        },
     payment: {  // EVERY OCCUPATION GENERATES A NEW PAYMENT 
        totalDays:"",
        price:"",
        occupation: ""
         },
     customers: [], // OBJECTS FOR THE SELECTED INPUT
     rooms: [],
     employees: []       
      }
 },
 methods:{
     ...mapActions([
         'postOccupation',
         'setCustomers',
         'setRooms',
         'setEmployees',
         'postPayment' // INSERT NEW PAYMENT RELATED TO THE NEW OCCUPATION  
     ]),
     saveOccupation: function(){

        this.postOccupation(this.occupation).then(response => {
            this.payment.occupation = response.data.id; // OCCUPATION ID          
            this.postPayment(this.payment).then(response =>   // CREATE THE PAYMENT FOR THE OCCUPATION
                {
                    alert("Occupation saved !");
                    this.occupation = [],   // CLEAN OCCUPATION FORMS IN A CALL BACK 
                    this.payment = [];
                })
                    .catch(error => { alert(error) });
        }).catch(error => { alert(error) });

      },
     calculateTotalDays: function(){  // METHOD TO CALCULATE TOTAL DAYS TO PAYMENT 
        var entry = new Date(this.occupation.entryDate);
        var exit = new Date(this.occupation.exitDate);
        var days = exit.getDate() - entry.getDate();  // TOTALDAYS
        this.payment.totalDays = days;
     }    
 },
 watch: {
     'occupation.room': function(){  // SEARCH ROOM RATE TO SET PAYMENT PRICE  
       var occId = this.occupation.room;
       this.payment.price = this.rooms.find( function (o){ return o.id == occId }).rate;
     },
     'occupation.entryDate' : function(){
        this.calculateTotalDays();
     },
      'occupation.exitDate' : function(){
        this.calculateTotalDays();
     }
 },
 computed: {
     ...mapGetters([
         'getCustomers',
         'getEmployees',
         'getRooms'   
     ])
 },
 created: function() {
    
     Promise.all([
         this.setCustomers(),
         this.setRooms(),
         this.setEmployees()
     ]).then(response => {
         this.customers = this.getCustomers; // SETTING DATA ELEMENTS FOR THE SELECTED FORMS BE FILLED
         this.rooms = this.getRooms;
         this.employees = this.getEmployees;
         this.loading = false; // NOW THE FORM CAN BE SHOWN
     }).catch(response => { alert("Error"); })



    }
}

</script>