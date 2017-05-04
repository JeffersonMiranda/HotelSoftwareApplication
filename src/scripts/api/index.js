import axios from 'axios';

export default {

get(url, request) {  // GET METHOD
        return axios.get(url, request)
        .then(function (response) {
            console.log(response);
             })
        .catch(function (error) {
          console.log(error);
         });
    },
 post(url, request) {  // POST METHOD
      return axios.post(url)
     .then(function (response) {
      console.log(response);
      })
     .catch(function (error) {
    console.log(error);
     });
    },
 patch(url, request) {  // PATCH METHOD
     return 0;
    },
  delete(url, request) {   //DELETE METHOD
        return axios.delete(url, request)
         .then(function (response) {
            console.log(response);
             })
        .catch(function (error) {
          console.log(error);
         });
    }
}