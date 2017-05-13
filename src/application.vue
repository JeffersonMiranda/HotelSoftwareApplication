<template>
  <!-- REDIRECT TO HOME OR LOGIN DEPENDING ON AUTHORIZATION -->
  <div>

   <login></login>
  
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