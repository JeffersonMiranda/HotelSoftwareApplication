import { http, helpers } from '.././http.js';


export const getOccupations = () => {
    return http.get('occupations' + helpers.getAll) // url: occupations/

}

export const createOccupation = (data) => {
    return http.post('occupations/', data) // url: occupations/

}

export const updateOccupation = (data) => {
    return http.put('occupations/' + data.id + '/', data) // url: occupations/1/ + data

}

export const deleteOccupation = (id) => {
    return http.delete('occupations/' + id + '/')  // url: occupations/1/

}