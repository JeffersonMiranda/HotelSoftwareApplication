import { http, helpers } from '.././http.js';


export const getPayments = () => {
    return http.get('payments'+ helpers.getAll) // url: payments/

}

export const createPayment = (data) => {
    return http.post('payments/', data) // url: payments/

}

export const updatePayment = (data) => {
    return http.put('payments/' + data.id + '/', data) // url: payments/1/ + data

}

export const deletePayment = (id) => {
    return http.delete('payments/' + id + '/')  // url: payments/1/

}