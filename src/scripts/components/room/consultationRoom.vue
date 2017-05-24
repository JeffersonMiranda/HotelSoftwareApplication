<template>
    <div>
    
        <form>
            <div class="row">
    
                <div class="col-md-4">
                    <b-input-group left="Room Type">
                        <b-form-input v-model="room.roomType" required readonly></b-form-input>
                    </b-input-group>
                </div>
    
                <div class="col-md-8">
                    <b-input-group left="Bed Type">
                        <b-form-input v-model="room.bedType" required readonly></b-form-input>
                    </b-input-group>
                </div>
    
            </div>
            </br>
    
            <div class="row">
    
                <div class="col-md-4">
                    <b-input-group left="Rate">
                        <b-form-input v-model="room.rate" type="number" readonly></b-form-input>
                    </b-input-group>
                </div>
    
                <div class="col-md-4">
                    <b-input-group left="Room Status">
                        <b-form-input v-model="room.roomStatus" type="text" readonly></b-form-input>
                        </b-form-select>
                    </b-input-group>
                </div>
            </div>
    
            </br>
    
            <div class="row">
                <div class="col-md-8">
                    <b-input-group left="Notes">
                        <b-form-input v-model="room.notes" texarea readonly></b-form-input>
                    </b-input-group>
                </div>
            </div>
    
            </br>
    
            <div class="row">
                <div class="col-md-4">
                    <b-button variant="primary" :to="{path: '/rooms'}">
                        <!-- BUTTON TO CONSULT room-->
                        Back
                    </b-button>
    
                    <b-button variant="primary" :to="{name:'editRoom', params: { room: this.room}}">
                        <!-- BUTTON TO CONSULT room-->
                        Edit
                    </b-button>
    
                    <b-button variant="primary" @click.prevent="excludeRoom()">
                        <!-- BUTTON TO CONSULT room-->
                        Delete
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
            room: [],
            selected: [],
            options: [
                {
                    text: 'Male',
                    value: 'male'
                },
                {
                    text: 'Female',
                    value: 'female'
                }
            ]
        }
    },
    methods: {
        ...mapActions([
            'deleteRoom'
        ]),
        excludeRoom: function () {
            this.deleteRoom(this.room.id)
                .then(response => {
                    alert("Room deleted !");
                    this.$router.push('/rooms')
                })
                .catch(response => { alert("Error") });
        }

    },
    created: function () {
        this.room = this.$route.params.room;
    }
}

</script>