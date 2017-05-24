import { http, helpers } from '.././http.js';


export const getCustomers = () => {
    return http.get('customers/') // url: customer/

}

export const createCustomer = (data) => {
    return http.post('customers/', data) // url: customer/

}

export const updateCustomer = (data) => {
    return http.put('customers/' + data.id + '/', data) // url: customer/1/ + data

}

export const deleteCustomer = (id) => {
    return http.delete('customers/' + id + '/')  // url: customer/1/

}