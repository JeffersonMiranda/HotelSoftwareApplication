<template>
   <div>
  <div class="row">
    <div class="col-md-2">
    <b-button variant="primary" to="/customers/newCustomer"> New customer </b-button>
    </div> 
    
     <div class="col-md-8 col-md-offset-2">
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
     </b-form-fieldset>
    </div>
  </div> 
  
  <div class="row" id="tableRow"> 
  <!-- Main table element -->
  <b-table striped hover :items="customersData()" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    <template slot="name" scope="field">
      {{field.value}} {{field.name.last}}
    </template>
  </b-table>
  </div>

    <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.customersData().length" :per-page="perPage" v-model="currentPage" />
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
      firstName: {
        label: 'Name',
        sortable: true
      },
      age: {
        label: 'Age'
      },
       sex: {
        label: 'Sex'
      },
      street: {
        label: 'Street'
      },
      city: {
        label: 'City'
      },
       state: {
        label: 'State'
      },
       country: {
        label: 'Country'
      }, 
      phoneNumber: {
        label: 'Phone Number'
     }
    },
    currentPage: 1,
    perPage: 10,
    filter: null
  }
 },
methods:{
  ...mapActions([
     'setCustomers'
  ]),
  ...mapGetters([
    'getCustomers'
  ])
},
computed: {
  customersData(){
     return this.getCustomers;  
  }
},
created: function(){
    this.setCustomers();   
  }
}

</script>

<style scoped>

#tableRow{
  margin: 20px 0 0 0;
}

</style>