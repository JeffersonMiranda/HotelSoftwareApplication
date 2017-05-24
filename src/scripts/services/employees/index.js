import { http, helpers } from '.././http.js';


export const getEmployees = () => {
    return http.get('employees/') // url: employees/

}

export const createEmployee = (data) => {
    return http.post('employees/', data) // url: employees/

}

export const updateEmployee = (data) => {
    return http.put('employees/' + data.id + '/', data) // url: employees/1/ + data

}

export const deleteEmployee = (id) => {
    return http.delete('employees/' + id + '/')  // url: employees/1/

}