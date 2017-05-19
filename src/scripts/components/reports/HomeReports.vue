<template>
    <div>
    
        <h5 id="main_title">Reports </h5>
    
        <div class="row">
            <!-- MENU UTILIZING COLLAPSE WITH LIST GROUP -->
            <div class="col-md-2">
                <ul class="list-group" id="side-menu">
                    <li class="list-group-item">
                        <b-btn v-b-toggle.customer-menu variant="link">Customers</b-btn>
                        <b-collapse id="customer-menu">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <router-link to="/"> By Sex </router-link>
                                </li>
                                <li class="list-group-item">
                                    <router-link to="/"> By Country </router-link>
                                </li>
                                 <li class="list-group-item">
                                    <router-link to="/"> By City </router-link>
                                </li>
                                <li class="list-group-item">
                                    <router-link to="/"> By State </router-link>
                                </li>
                                  <li class="list-group-item">
                                    <router-link to="/"> By Age </router-link>
                                </li>
                                  <li class="list-group-item">
                                    <router-link to="/"> By Payment Detail </router-link>
                                  </li>
                                  <li class="list-group-item">
                                    <router-link to="/"> By Occupation Detail </router-link>
                                  </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="list-group-item">
                        <b-btn v-b-toggle.occupation-menu variant="link">Occupations</b-btn>
                        <b-collapse id="occupation-menu">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="list-group-item">
                        <b-btn v-b-toggle.room-menu variant="link">Rooms</b-btn>
                        <b-collapse id="room-menu">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="list-group-item">
                        <b-btn v-b-toggle.payment-menu variant="link">Payments</b-btn>
                        <b-collapse id="payment-menu">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                                <li class="list-group-item">
                                    sub-menu
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
    
                </ul>
            </div>
    
            <div class="col-md-3">
                <router-view name="reports_procedure"></router-view>
                <!-- KIND OF REPORTS (CUSTOMERS, ROOMS, OCCUPATIONS...) -->
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

#side-menu li {
    color: blue;
    border: none;
}

#side-menu li button {
    text-decoration: none;
    color: blue;
    padding: 0;
    margin: 0;
}

#side-menu li button:focus {
    outline: 0;
    box-shadow: none;
}
</style>