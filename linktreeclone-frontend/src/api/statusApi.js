import apiClient from './axiosConfig';

// GET 
export const checkApiStatus = () => {
  return apiClient.get('/status');
};
