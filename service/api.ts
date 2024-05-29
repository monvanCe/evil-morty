import axiosInstance from '@/service/axiosConfig';

export const getRequest = async (endpoint: string, params = {}) => {
  try {
    const res = await axiosInstance.get(`${endpoint}`, { params });
    return res.data;
  } catch (err) {
    console.error(`GET request to ${endpoint} failed`, err);
    throw err;
  }
};

export const postRequest = async (endpoint: string, body = {}, params = {}) => {
  return axiosInstance
    .post(`${endpoint}`, body, { params })
    .then(res => res.data)
    .catch(err => {
      console.error(`POST request to ${endpoint} failed`, err);
      throw err;
    });
};

export const deleteRequest = async (endpoint: string, params = {}) => {
  return axiosInstance
    .delete(`${endpoint}`, { params })
    .then(res => res.data)
    .catch(err => {
      console.error(`DELETE request to ${endpoint} failed`, err);
      throw err;
    });
};

export const putRequest = async (endpoint: string, body = {}, params = {}) => {
  return axiosInstance
    .put(`${endpoint}`, body, { params })
    .then(res => res.data)
    .catch(err => {
      console.error(`PUT request to ${endpoint} failed`, err);
      throw err;
    });
};

export default {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
};
