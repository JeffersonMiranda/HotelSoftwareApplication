<template><!-- REDIRECT TO HOME OR LOGIN DEPENDING ON AUTHORIZATION -->
 <div>

  <div v-if="!$auth.ready()">
    <login></login>
  </div>   

  <div v-if="$auth.ready()">
    <home></home>
  </div>  


  </div>
</template>

<script>

import login from './scripts/components/Login.vue';
import home from './home.vue';

export default {
  components:{
    login,
    home
  }
} 

</script>


