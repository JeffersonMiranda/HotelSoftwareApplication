<template>
  <!-- REDIRECT TO HOME OR LOGIN DEPENDING ON AUTHORIZATION -->
  <div>
  
    <div v-if="$auth.ready()">
  
      <div v-if="$auth.check()">
        <home></home>
      </div>
  
      <div v-if="!$auth.check()">
        <login></login>
      </div>
  
    </div>
  
  </div>
</template>

<script>

import login from './scripts/components/Login.vue';
import home from './home.vue';

export default {
  components: {
    login,
    home
  }
}

</script>