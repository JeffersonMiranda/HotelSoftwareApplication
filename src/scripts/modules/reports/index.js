
export default {

    state : {
     customerHeaders : [],
     occupationHeaders: [],
     roomHeaders: [],
     paymentHeaders: [],
     employeeHeaders: []    
    },
    mutations : {
     SETCUSTOMERHEADERS(state,data){
         state.customerHeaders = data
     },
      SETOCCUPATIONHEADERS(state,data){
         state.occupationHeaders = data
     },
      SETROOMHEADERS(state,data){
         state.roomHeaders = data
     },
      SETPAYMENTHEADERS(state,data){
         state.paymentHeaders = data
     },
      SETEMPLOYEEHEADERS(state,data){
         state.employeeHeaders = data
     }
    },
    actions : {
        setCustomerHeader({commit},data){
            commit('SETCUSTOM')
        }
    },
    getters : {

    }

}