import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const helpers = {
  getAll: "/?expand=~all",   // THAT'S NECESSARY TO PUT AFTER ALL GET REQUESTS TO FETCH ALL FOREIGN KEY OBJECTS
  cancelToken: null,
  fields: "&&fields=",
  filters: {
  },
  concatenateFields: function (f) { // FIELDS AS PARAMETER 

    var fieldsMix = "";

    for (let i = 0; i < f.length; i++) {
      fieldsMix += f[i].dataKey + ",";
    }

    fieldsMix = fieldsMix.substring(0, fieldsMix.length - 1); // REMOVE LAST COMMA BECAUSE THATS UNNECESSARY

    return this.fields + fieldsMix  // ADD THIS.FIELDS TO FIELDSMIX

  }
}