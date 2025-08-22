import axios from 'axios';

const API_URL = 'https://68a6cade639c6a54e99fdc85.mockapi.io/users'; // Example public API

const Apicalls = {


  getAllUsers: () => {
    return axios.get(API_URL).then(res => res);
  },
  getUserById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
  createUser : (user) => {
    return axios.post(API_URL, user).then(res => res);
  },
  updateUser : (id, user) => {
    return axios.put(`${API_URL}/${id}`, user);
  },
  deleteUser : (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },
};

export default Apicalls;
