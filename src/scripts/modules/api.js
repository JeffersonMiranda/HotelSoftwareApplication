import axios from 'axios';
import store from 'store2';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});