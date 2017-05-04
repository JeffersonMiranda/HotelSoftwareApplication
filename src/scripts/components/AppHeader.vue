<template>
    <header>
     <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
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
      </b-navbar>
    </header>
</template>

<script>

</script>
