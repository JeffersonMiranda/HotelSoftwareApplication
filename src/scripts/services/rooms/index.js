import { http, helpers } from '.././http.js';


export const getRooms = () => {
    return http.get('rooms/') // url: rooms/

}

export const createRoom = (data) => {
    return http.post('rooms/', data) // url: rooms/

}

export const updateRoom = (data) => {
    return http.put('rooms/' + data.id + '/', data) // url: rooms/1/ + data

}

export const deleteRoom = (id) => {
    return http.delete('rooms/' + id + '/')  // url: rooms/1/

}