import axios from "axios";

axios.defaults.withCredentials = true;
const authFetch = axios.create({
  baseURL: '/api',
  withCredentials: true,
  crossDomain: true,
});


authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logoutUser();
      throw error.response;
    }
  }
);



 const getPostsPage = async (pageparam = 1, options = {}) => {
  const response = await authFetch.get(`/?page=${pageparam}&limit=5`, options);
  return response.data;
};

export default getPostsPage


// export const getPostsPage = async (pageparam = 1, options = {}) => {
//   const response = await axios.get(`/?page=${pageparam}&limit=5`, options);
//   return response.data;
// };



