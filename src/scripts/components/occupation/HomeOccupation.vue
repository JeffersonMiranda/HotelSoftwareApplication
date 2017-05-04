<template>

  <div class="row">
    
    <h5 id="main_title"> Home Occupations </h5>

  <div class="row">
    <b-button variant="primary" href="customers/newOccupation"> New occupation </b-button>
     
     <div>
     <router-view></router-view>
     </div>

  </div>    
    
  </div>  

</template>

<script>

</script>

<style scoped>
 #main_title {
    padding: 30px 0 0 0;
 }   
</style>