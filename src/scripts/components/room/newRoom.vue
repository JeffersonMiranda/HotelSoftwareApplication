<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-6">
    <b-input-group left="Room Type">
    <b-form-input v-model="room.roomType" type="text" required></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-6">
    <b-input-group left="Bed type">
    <b-form-input v-model="room.bedType" type="text" required></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-6">
    <b-input-group left="Rate">
    <b-form-input v-model="room.rate" type="number" required></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-6">
    <b-input-group left="Room Status">
    <b-form-input v-model="room.roomStatus" type="text"></b-form-input>
    </b-input-group>       
    </div>

    </div>

    </br>

    <div class="row">

    <div class="col-md-8">
    <b-input-group left="Notes">
    <b-form-input textarea v-model="room.notes"></b-form-input>
    </b-input-group>   
    </div>

    </div>

    </br>

    <div class="row">
    <div class="col-md-4">
        <b-button variant="primary" @click.prevent="saveRoom()">
          Save room
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
     room: { //room TO SAVE IN DATABASE  
        roomType:"",
        bedType:"",
        rate: "",
        roomStatus: "",
        notes: ""
     }  
   }
 },
 methods:{
     ...mapActions([
         'postRoom'
     ]),
     saveRoom: function(){
         this.postRoom(this.room)
         .then( response => { 
             alert("Room saved !",  this.room = [] );  // CLEAN ROOM FORMS IN A CALL BACK                
            })
         .catch( response => { alert("Error") });             
     }
 }

}

</script>