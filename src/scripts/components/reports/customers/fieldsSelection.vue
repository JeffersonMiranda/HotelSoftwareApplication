<template>
    <div>
        <form class="form-inline" id="headersForm">
            <!-- V-BIND:VALUE IS UTILIZED TO RETURN AN OBJECT AS VALUE -->
            <input type="checkbox" id="cbxId" class="checkBoxStyle" v-model="headers" v-bind:value="{title : 'ID', dataKey: 'id', order:1 }">
            <label for="cbxId">ID </label>
    
            <input type="checkbox" id="cbxFirstName" class="checkBoxStyle" v-model="headers" v-bind:value="{ title:'First Name', dataKey :'firstName', order:2}">
            <label for="cbxFirstName"> First Name </label>
    
            <input type="checkbox" id="cbxLastName" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Last Name',dataKey:'lastName', order:3}">
            <label for="cbxLastName"> Last Name </label>
    
            <input type="checkbox" id="cbxStreet" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Street',dataKey:'street', order:4}">
            <label for="cbxStreet"> Street</label>
    
            <input type="checkbox" id="cbxCity" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'City',dataKey:'city', order:5}">
            <label for="cbxCity">City </label>
    
            <input type="checkbox" id="cbxCountry" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Country',dataKey:'country', order:6}">
            <label for="cbxCountry"> Country </label>
    
            <input type="checkbox" id="cbxPhoneNumber" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Phone Number',dataKey:'phoneNumber', order:7}">
            <label for="cbxPhoneNumber"> Phone Number </label>
    
            <input type="checkbox" id="cbxAge" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Age',dataKey:'age', order:8}">
            <label for="cbxAge"> Age </label>
    
            <input type="checkbox" id="cbxSex" class="checkBoxStyle" v-model="headers" v-bind:value="{title:'Sex',dataKey:'sex', order:9}">
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
        exportHeaders: function () {
            this.$emit('headers_data', this.headers);
        }
    },
    computed: {
        fieldsReport: function () {  // RETURN FIELDS TO BE SHOWN IN THE REPORT
            return this.headers.map(function (a) { return a.dataKey });
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
