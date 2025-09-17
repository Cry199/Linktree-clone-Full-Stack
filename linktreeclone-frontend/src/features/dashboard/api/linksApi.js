import apiClient from '../../../api/axiosConfig';

export const createLink = (linkData) => {
  // 'linkData': { title, url }
  return apiClient.post('/links', linkData);
};

export const deleteLink = (id) => {
  return apiClient.delete(`/links/${id}`);
};

/*  
    fazer
 
    backend: GET /links

    backend: PUT /links/{id}

    backend: GET /{username}/links

*/