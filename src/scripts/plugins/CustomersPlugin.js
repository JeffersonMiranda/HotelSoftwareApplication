import * as $customers from '.././services/customers/index.js';
// PLUGIN FOR CUSTOMERS SERVICE 

 const install = Vue => {
  
  Object.defineProperties(Vue.prototype, {
    $customers: {
      get() {
        return $customers;
      }
    }
  });

};

export default install ;