import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const helpers = {
    getAll : "/?expand=~all",   // THAT'S NECESSARY TO PUT AFTER ALL GET REQUESTS TO FETCH ALL FOREIGN KEY OBJECTS
    cancelToken: null
}