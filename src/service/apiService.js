import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },

  timeout: 10000,
});

// // Add an interceptor to include the token in every request (if necessary)
// apiClient.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   }, (error) => {
//     return Promise.reject(error);
// });

// // Add an interceptor to handle responses
// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized access (e.g., redirect to login)
//       // You can also dispatch an action to clear the token in Redux
//     }
//     return Promise.reject(error);
//   }
// )

export default apiClient
