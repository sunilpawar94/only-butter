import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // Base URL from environment variable
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;