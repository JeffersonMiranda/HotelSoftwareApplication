<template>
    <div>
    
        <form>
            <div class="row">
    
                <div class="col-md-6">
                    <b-input-group left="Customer">
                        <b-form-input disabled v-model="occupation.customer"></b-form-input>
                    </b-input-group>
                </div>
    
                <div class="col-md-4">
                    <b-input-group left="Room">
                        <b-form-input disabled v-model="occupation.room.roomType" required></b-form-input>
                    </b-input-group>
                </div>
            
            </div>
            </br>

            <div class="row">
                <div class="col-md-8">
                    <b-input-group left="Employee">
                        <b-form-input disabled v-model="occupation.employee.firstName" required></b-form-input>
                    </b-input-group>
                </div>
            </div>
    
            </br>
    
            <div class="row">
    
                <div class="col-md-2">
                    <label>Entry date</label>
                    <input v-model="occupation.entryDate" type="date" class="form-control" disabled>
                </div>
    
                <div class="col-md-8">
                    <label>Exit date</label>
                    <input v-model="occupation.exitDate" type="date" class="form-control" disabled>
                </div>
    
            </div>

    </br>
    
    <div class="row">
        <div class="col-md-4">
            <b-button variant="primary" :to="{path: '/occupations'}">
                <!-- BUTTON TO BACK TO occupations-->
                Back
            </b-button>
    
        </div>
    </div>
    
    </form>
        
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

    data() {
        return {
            occupation: []
        }
    },
    methods: {

    },
    created: function () {
        this.occupation = this.$route.params.occupation;
    }
}

</script>