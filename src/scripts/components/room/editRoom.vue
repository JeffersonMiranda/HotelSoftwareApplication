<template>
    <div>
    
    <form>
    <div class="row">
    
    <div class="col-md-4">
    <b-input-group left="Room Type">
    <b-form-input v-model="room.roomType" required ></b-form-input>
    </b-input-group>
    </div>

    <div class="col-md-8">
    <b-input-group left="Bed Type">
    <b-form-input  v-model="room.bedType" required ></b-form-input>
    </b-input-group> 
    </div> 
     
    </div>
    </br>
    
    <div class="row">

    <div class="col-md-4">
    <b-input-group left="Rate">
    <b-form-input v-model="room.rate" type="number" ></b-form-input>
    </b-input-group>   
    </div>

    <div class="col-md-4">
    <b-input-group left="Room Status">
    <b-form-input v-model="room.roomStatus" type="text" ></b-form-input>
    </b-form-select>
    </b-input-group>
    </div>
    </div>

   </br>
    
    <div class="row">
    <div class="col-md-8">
    <b-input-group left="Notes">
    <b-form-input v-model="room.notes" texarea ></b-form-input>
    </b-input-group>       
    </div>
     </div>
     
    </br>

   <div class="row">
    <div class="col-md-6">
        <b-button variant="primary" @click.prevent="update_room()">
          Save modifications
        </b-button>
         <b-button variant="primary" @click.prevent="backToRoomsList()">
          Back to rooms list
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
        room: []
     }
    },
   methods:{
     ...mapActions([
         'updateRoom'
     ]),
     update_room: function(){
         this.updateRoom(this.room)
         .then( response => { 
             alert("Room updated !");  // CLEAN CUSTOMER FORMS IN A CALL BACK               
            })
         .catch( response => { alert("Error") })
             
     },
     backToRoomsList: function(){
           this.$router.push('/rooms');      
     }
 },
  created: function() {
      this.room = this.$route.params.room;       
   }
}

</script>