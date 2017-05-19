<template>
  <div>
  
    <h5 id="main_title">Occupations </h5>
  
    <div class="row">
      <div class="col-md-12">
        <router-view name="occupation_procedure"></router-view>
        <!-- KIND OF PROCEDURE (EDIT, NEW, DELETE, CONSULTATION...) -->
      </div>
    </div>
  
  </div>
</template>

<script>

</script>

<style scoped>
#main_title {
  padding: 30px 0 20px 0;
}

#btnNewCustomer {
  padding: 10px 0 10px 0;
}
</style>