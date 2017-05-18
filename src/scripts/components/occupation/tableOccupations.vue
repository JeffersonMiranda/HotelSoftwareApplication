<template>
   <div>
  <div class="row">
    <div class="col-md-2">
    <b-button variant="primary" to="/occupations/newOccupation"> New occupation </b-button>
    </div> 
    
     <div class="col-md-8 col-md-offset-2">
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
     </b-form-fieldset>
    </div>
  </div> 
  
  <div v-if="!loading">
  <div class="row" id="tableRow"> 
  <!-- Main table element -->
  <b-table striped hover :items="occupationsData()" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">

      <template slot="customer" scope="item">
      {{ item.value.firstName + " " + item.value.lastName }}
      </template>

       <template slot="employee" scope="item">
      {{ item.value.firstName + " " + item.value.lastName }}
      </template>

      <template slot="room" scope="item">
      {{ item.value.roomType }}
      </template>
    
    <template slot="consultButton" scope="item">
     <b-button variant="primary" size="sm" :to="{name:'consultationOccupation', params: { occupation: item.item }}"> <!-- BUTTON TO CONSULT CUSTOMER-->
          Consult
        </b-button>

    </template>
  </b-table>
  </div>

    <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.occupationsData().length" :per-page="perPage" v-model="currentPage" />
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
       customer: {
       label: 'Customer'
      }, 
      employee: {
        label: 'Employee'
      },    
       room: {
        label: 'Room'
      },
      entryDate: {
        label: 'Entry Date'
      },
      exitDate: {
        label: 'Exit Date'
      },
      consultButton: {
        label: ''
     }
    },
    currentPage: 1,
    perPage: 10,
    filter: null
  }
 },
methods:{
  ...mapActions([
     'setOccupations'
  ]),
  ...mapGetters([
    'getOccupations'
  ])
},
computed: {
  occupationsData(){
     return this.getOccupations;  
  }
},
created: function(){
     this.setOccupations().then( response => {
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