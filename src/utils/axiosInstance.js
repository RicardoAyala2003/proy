import axios from 'axios';
//import { API_BASE_URL } from '../constants/glohal';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5002',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;