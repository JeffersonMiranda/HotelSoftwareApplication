<template>
 <div>


  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>

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
