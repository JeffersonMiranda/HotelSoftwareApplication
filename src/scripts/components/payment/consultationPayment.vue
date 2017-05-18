<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-2">
    <b-input-group left="Customer">
    <b-form-select v-model="occupation.customer">
        <option v-for="c in customer"
                :value="c.value"
                v-html="c.name">
        </option>
    </b-form-select>
    </b-input-group>
    </div>

    <div class="col-md-4">
    <b-input-group left="Room">
    <b-form-input v-model="occupation.room" required></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Employee">
    <b-form-input  v-model="occupation.employee" required></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-2">
    <b-input-group left="Entry date">
    <b-form-input v-model="occupation.dataEntry" type="number"></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-8">
    <b-input-group left="Exit date">
    <b-form-input v-model="occupation.exitDate" type="number"></b-form-input>
    </b-input-group>       
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
    
</template>

<script>

import { mapActions } from 'vuex'

export default {

 data() {
   return {
     occupation: [], //OCCUPATION TO SAVE IN DATABASE 
     customer : [
        { name : "Jefferson" , id: 1 },
        { name : "Naylton", id : 2 }
             ]
     }
 },
 methods:{
     ...mapActions([
         'postOccupation'
     ]),
     saveOccupation: function(){
         this.postOccupation(this.occupation)
         .then( response => { 
             alert("Occupation saved !",  this.occupation = [] );  // CLEAN OCCUPATION FORMS IN A CALL BACK 
               
            })
         .catch( response => { alert("Error") })
             
     }
 }
}

</script>