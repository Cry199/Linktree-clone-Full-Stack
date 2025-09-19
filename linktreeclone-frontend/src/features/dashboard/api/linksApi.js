import apiClient from '../../../api/axiosConfig';

// POST /links
export const createLink = (linkData) => {
  return apiClient.post('/links', linkData);
};

// GET /links
export const getUserLinks = () => {
  return apiClient.get('/links');
};

// PUT /links/{idDoLink}
export const updateLink = (linkId, linkData) => {
  return apiClient.put(`/links/${linkId}`, linkData);
};

// DELETE /links/{idDoLink}
export const deleteLink = (linkId) => {
  return apiClient.delete(`/links/${linkId}`);
};