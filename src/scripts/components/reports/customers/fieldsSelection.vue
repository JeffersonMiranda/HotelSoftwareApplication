<template>
    <div>
        <form class="form-inline" id="headersForm">
            <!-- V-BIND:VALUE IS UTILIZED TO RETURN AN OBJECT AS VALUE -->
            <input type="checkbox" id="cbxId" class="checkBoxStyle" v-model="headers" v-bind:value="{title : 'ID', dataKey: 'id' }">
            <label for="cbxId">ID </label>
    
            <input type="checkbox" id="cbxFirstName" class="checkBoxStyle" v-model="headers" v-bind:value="{ title:'First Name', dataKey :'firstName'}">
            <label for="cbxFirstName"> First Name </label>
    
            <input type="checkbox" id="cbxLastName" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Last Name',dataKey:'lastName'}">
            <label for="cbxLastName"> Last Name </label>
    
            <input type="checkbox" id="cbxStreet" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Street',dataKey:'street'}">
            <label for="cbxStreet"> Street</label>
    
            <input type="checkbox" id="cbxCity" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'City',dataKey:'city'}">
            <label for="cbxCity">City </label>
    
            <input type="checkbox" id="cbxCountry" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Country',dataKey:'country'}">
            <label for="cbxCountry"> Country </label>
    
            <input type="checkbox" id="cbxPhoneNumber" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Phone Number',dataKey:'phoneNumber'}">
            <label for="cbxPhoneNumber"> Phone Number </label>
    
            <input type="checkbox" id="cbxAge" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Age',dataKey:'age'}">
            <label for="cbxAge"> Age </label>
    
            <input type="checkbox" id="cbxSex" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Sex',dataKey:'sex'}">
            <label for="cbxSex">Sex </label>
    
            <b-button variant="primary" @click.prevent="allCheckboxChecked()">
                Select all fields
            </b-button>
    
        </form>
    
    </div>
</template>

<script>

import { reportHeaders } from './../settings/dataColumms.js';

export default {

    data() {
        return {
            headers: []
        }
    },
    methods: {
        allCheckboxChecked: function () { // METHOD FOR SELECT ALL FIELDS BUTTON
            var tags = document.getElementsByClassName('checkBoxStyle'); // GET CHECKBOXES
            for (let i = 0; i < tags.length; ++i) {
                if (tags[i].checked != true) {
                    tags[i].click();  // THIS METHOD IS NECESSARY TO HEADERS PROPERTY GET THE VALUES
                }
            }
        },
        getCheckBoxValue: function () {

        },
        exportHeaders: function () {
            this.$emit('headers_data', this.headers);
        }
    },
    watch: {
        headers: function () {
            this.exportHeaders(); // EMIT HEADERS TO PARENT COMPONENT IN EVERY CHANGE
        }
    }
}

</script>


<style scoped>
/* BOOTSTRAP-VUE STYLE JUST WORKS WITH CLASSES, NO ID */

label {
    padding-right: 15px;
}
</style>
