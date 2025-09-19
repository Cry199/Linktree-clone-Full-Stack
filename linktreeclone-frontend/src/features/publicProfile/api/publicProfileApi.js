import apiClient from '../../../api/axiosConfig';

// GET /{username}
export const getPublicProfile = (username) => {
  return apiClient.get(`/${username}`);
};