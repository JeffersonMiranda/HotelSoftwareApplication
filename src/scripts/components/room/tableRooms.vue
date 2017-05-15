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
  
  <div class="row" id="tableRow"> 
  <!-- Main table element -->
  <b-table striped hover :items="roomsData()" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
  </b-table>
  </div>

    <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.roomsData().length" :per-page="perPage" v-model="currentPage" />
    </div>

  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
 data () {
   return {
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
    this.setRooms();   
  }
}

</script>

<style scoped>

#tableRow{
  margin: 20px 0 0 0;
}

</style>