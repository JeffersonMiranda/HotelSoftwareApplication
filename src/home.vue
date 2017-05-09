<template>
 <div>

 <div v-if="$auth.check()"> 
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>
  </div>

  <div v-if="!$auth.check()">
    <login></login>
  </div>   

  </div>
</template>

<script>


import AppHeader from './scripts/components/AppHeader.vue';
import AppContent from './scripts/components/AppContent.vue';
import AppFooter from './scripts/components/AppFooter.vue';
import Login from './scripts/components/Login.vue';

    export default {
        components:{
            AppHeader,
            AppContent,
            AppFooter,
            Login
        }
        
    }

</script>
