<template>
  <!-- REDIRECT TO HOME OR LOGIN DEPENDING ON AUTHORIZATION -->
  <div>

   <div v-if="!user().isAuthenticated"> <!--IF USER IS NOT LOGGED IN-->
   <login></login>
   </div>

    <div v-else>
    <home></home>
    </div>

   </div>
  
  </div>
</template>

<script>

import login from './scripts/components/Login.vue';
import home from './home.vue';
import store from 'store2';
import { mapGetters } from 'vuex';

export default {
  components: {
    login,
    home
  },

  methods: {
    ...mapGetters([
        'getUser'
    ]),
    user : function() {
     return this.getUser()
    }
}


}

</script>
