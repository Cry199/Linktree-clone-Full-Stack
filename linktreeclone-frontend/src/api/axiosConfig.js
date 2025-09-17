import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://linktree-clone-api-238899108893.southamerica-east1.run.app',
});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;