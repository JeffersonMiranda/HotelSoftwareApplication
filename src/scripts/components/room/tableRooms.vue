<template>
   <div>
  <div class="row">
    <div class="col-md-2">
    <b-button variant="primary" to="/rooms/newRoom"> New room </b-button>
    </div> 
    
     <div class="col-md-8 col-md-offset-2">
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
     </b-form-fieldset>
    </div>
  </div> 
  
  <div v-if="!loading">
  <div class="row" id="tableRow"> 
  <!-- Main table element -->
  <b-table striped hover :items="roomsData()" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
   <template slot="consultButton" scope="item">
     <b-button variant="primary" size="sm" :to="{name:'consultationRoom', params: { room: item.item }}"> <!-- BUTTON TO CONSULT CUSTOMER-->
          Consult
        </b-button>

    </template>
  </b-table>
  </div>

    <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.roomsData().length" :per-page="perPage" v-model="currentPage" />
    </div>
    </div>

  <div v-else>
    </br>
    <spinner></spinner>
  </div>  

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
 data () {
   return {
    loading: true, // THE TABLE JUST RENDER WHEN THE DATA IS LOADED
    fields: {
      id: {
        label: 'ID',
        sortable:true
      },
      roomType: {
        label: 'Room type',
        sortable: true
      },
      bedType: {
        label: 'Bed Type'
      },
       rate: {
        label: 'Rate'
      },
      roomStatus: {
        label: 'Room Status'
      },
      notes: {
        label: 'Notes'
      },
      consultButton:{
        label: ""
      }
    },
    currentPage: 1,
    perPage: 10,
    filter: null
  }
 },
methods:{
  ...mapActions([
     'setRooms'
  ]),
  ...mapGetters([
    'getRooms'
  ]),
  rowClicked: function(item,index){
      alert("");
  }
},
computed: {
  roomsData(){
     return this.getRooms;  
  }
},
created: function(){
     this.setRooms().then( response => {
        this.loading = false;
    }).catch( response => { alert("Error") });
  }
}

</script>

<style scoped>

#tableRow{
  margin: 20px 0 0 0;
}

</style>