import { http, helpers } from '.././http.js';


export const getCustomers = () => {
    return http.get('customers/') // url: customers/

}

export const createCustomer = (data) => {
    return http.post('customers/', data) // url: customers/

}

export const updateCustomer = (data) => {
    return http.put('customers/' + data.id + '/', data) // url: customers/1/ + data

}

export const deleteCustomer = (id) => {
    return http.delete('customers/' + id + '/')  // url: customers/1/

}

export const getCustomersBySex = (fields,filters) => {
  //  return http.get('customers/'+ helpers.concatenateFields(fields) + helpers +helpers.getAll)
}