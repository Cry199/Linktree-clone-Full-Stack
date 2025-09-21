import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://linktree-clone-api-faw777jkuq-rj.a.run.app',
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

apiClient.interceptors.response.use(
  (response) => {
    return response;
  }, 
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('authToken');
      window.location.href = '/login'; 
      console.log('Sessão expirada. Redirecionando para o login.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;