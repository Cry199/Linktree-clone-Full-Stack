import apiClient from '../../../api/axiosConfig';

export const signup = (userData) => {
  return apiClient.post('/users/register', userData);
};

export const signin = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};

export const getMe = () => {
  return apiClient.get('/users/me');
};