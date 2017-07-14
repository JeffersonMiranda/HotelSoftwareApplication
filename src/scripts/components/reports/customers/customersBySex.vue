<template>
    <div>
    
        <div class="row">
            <form class="form-inline">
    
                <b-input-group left="Select sex">
                    <b-form-select id="sexSelect" v-model="selectedSex" :options="options"></b-form-select>
                </b-input-group>
    
                <b-form-checkbox class="allSexCheckBox" v-model="allSexes" value="true" unchecked-value="false">
                    All sexes
                </b-form-checkbox>
    
            </form>
        </div>
    
        </br>
    
        <div class="row">
            <fields-selection @headers_data="importHeaders"></fields-selection>
            <!-- FIELDS COMPONENT TO SELECT FIELDS ON REPORT -->
        </div>
    
        <div class="row">
    
            <b-button variant="primary" @click.prevent="">
                Generate PDF Report
            </b-button>
    
        </div>

    </div>
</template>

<script>

import { mapActions } from 'vuex';
import fieldsSelection from './fieldsSelection.vue';
import queryString from 'query-string';

export default {

    components: {
        fieldsSelection
    },
    data() {    
        return {
            headersUrl: [], // HEADERS USED IN THE REPORT FOR URL
            customers: [],
            options: ['Male', 'Female'],
            selectedSex: "",
            allSexes: "false",  // ALL SEXES IN THE REPORTS IF TRUE AND DISABLE SELECT FIELD IF TRUE
            urlFilter: "" // URL FILTERS
        }
    },
    methods: {
        importHeaders: function (data) {
            this.headersUrl = data // RECEIVE CUSTOMER HEADERS FROM CHILD COMPONENT // FIELDS-SELECTION
        },
        createUrlFilter: function(){
            if (this.allSexes == "false") {
              var sexValue = this.selectedSex  
              this.urlFilter = queryString.stringify({ sex : sexValue});
            }
            else if (this.allSexes == "true")  { // NO FILTER IF ALL SEXES IS TRUE
                this.urlFilter = "";
            }
        }
    },
    watch: {
        allSexes: function () {
            var form = document.getElementById("sexSelect");  // GET SELECT SEX ELEMENT
            this.createUrlFilter();            
            if (this.allSexes == "true") { // DISABLE SEX SELECT
                form.disabled = true;
            }
            else {
                form.disabled = false;
            }
        },
        selectedSex: function(){
            this.createUrlFilter(); 
        }
    }
}

</script>

<style scoped>
/* BOOTSTRAP-VUE STYLE JUST WORKS WITH CLASSES, NO ID */

.allSexCheckBox {
    padding-left: 10px;
}
</style>
