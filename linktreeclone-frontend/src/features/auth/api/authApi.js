import apiClient from '../../../api/axiosConfig';

// POST /users/register
export const signup = (userData) => {
  return apiClient.post('/users/register', userData);
};

// POST /auth/login
export const signin = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};

// GET /users/me
export const getMe = () => {
  return apiClient.get('/users/me');
};

// PUT /users/me/profile
export const updateMyProfile = (profileData) => {
  return apiClient.put('/users/me/profile', profileData);
};