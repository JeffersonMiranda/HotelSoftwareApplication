<template>
   <div>
  <div class="row">
    <div class="col-md-2">
    <b-button variant="primary" to="/payments/makePayment"> Make payment </b-button>
    </div> 
    
     <div class="col-md-8 col-md-offset-2">
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
     </b-form-fieldset>
    </div>
  </div> 
  
  <div v-if="!loading">
  <div class="row" id="tableRow"> 
  <!-- Main table element -->
  <b-table striped hover :items="paymentsData()" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">

      <template slot="employee" scope="item">
        
      </template>
    
    <template slot="consultButton" scope="item">
     <b-button variant="primary" size="sm" :to="{name:'consultationPayment', params: { payment: item.item }}"> <!-- BUTTON TO CONSULT PAYMENT-->
          Consult
        </b-button>

    </template>
  </b-table>
  </div>

    <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.paymentsData().length" :per-page="perPage" v-model="currentPage" />
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
       occupation: {
       label: 'Customer'
      }, 
      employee: {
        label: 'Employee'
      },    
       totalDays: {
        label: 'Total days'
      },
      paymentDay: {
        label: 'Pay day'
      },
      price: {
        label: 'Price'
      },
       pai: {
        label: 'Paid'
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
     'setPayments'
  ]),
  ...mapGetters([
    'getPayments'
  ])
},
computed: {
  paymentsData(){
     return this.getPayments;  
  }
},
created: function(){
     this.setPayments().then( response => {
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