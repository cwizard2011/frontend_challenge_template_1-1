import axios from 'axios';

export const fetchProducts = page => axios.get(`https://backendapi.turing.com/products?page=${page}&limit=${10}`);