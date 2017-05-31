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
    
                <b-button variant="primary" @click.prevent="">
                    Generate PDF Report
                </b-button>
            </form>
        </div>
        </br>
        <div class="row">
            <fields-selection @headers_data="importHeaders"></fields-selection> <!-- FIELDS COMPONENT TO SELECT FIELDS ON REPORT -->
        </div>
        {{ headers }}
    </div>
</template>

<script>

import { mapActions } from 'vuex';
import { reportHeaders } from './../settings/dataColumms.js';
import fieldsSelection from './fieldsSelection.vue';

export default {

    components: {
        fieldsSelection
    },
    data() {
        return {
            headers: [], // HEADERS USED IN THE REPORT
            customers: [],
            options: ['Male', 'Female'],
            selectedSex: "",
            allSexes: "false"  // ALL SEXES IN THE REPORTS IF TRUE
        }
    },
    methods: {
        importHeaders: function (data) {
            this.headers = data // RECEIVE CUSTOMER HEADERS FROM CHILD COMPONENT // FIELDS-SELECTION
        }
    },

    watch: {
        allSexes: function () {
            var form = document.getElementById("sexSelect");  // DISABLE SEX SELECT
            if (this.allSexes == "true") {
                form.disabled = true;
            }
            else {
                form.disabled = false;
            }
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
