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
    components: {
        AppHeader,
        AppContent,
        AppFooter,
        Login
    },
    data() {
        return {
            customers: []
        }
    },
    created: function () {
        console.log(this.axios.baseURL);
        this.$customers.getAllCustomers()
          .then(response => { console.log(response.data) })
    }
}


</script>
