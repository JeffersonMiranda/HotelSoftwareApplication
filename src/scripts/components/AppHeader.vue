<template>
    <header>
     <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>Hotel Software</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>  
        <b-nav-item to="/customers">Customers</b-nav-item>
        <b-nav-item to="/occupations">Occupations</b-nav-item>
        <b-nav-item to="/rooms">Rooms</b-nav-item>
        <b-nav-item to="/payments">Payments</b-nav-item>      
        <b-nav-item to="/employes">Employees</b-nav-item>
      </b-nav>    

     </b-collapse>

      <b-nav is-nav-bar>
        <b-nav-item @click="logout($event)">Logout</b-nav-item>
      </b-nav>

      </b-navbar>
    </header>
</template>

<script>

export default {

  methods: {
    logout: function(e){
      e.preventDefault();
      
      this.$auth.logout({
        makeRequest: true,
        success: function(){
          alert("Logout");
        },
        error: function(){
          alert("Error");
        },
        redirect:'/'
      });
    }
  }

}

</script>
