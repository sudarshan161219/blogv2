import axios from "axios";

export const getPostsPage = async (pageparam = 1, options = {}) => {
  const response = await axios.get(`/api/?page=${pageparam}&limit=5`, options);
  return response.data;
};


// export const getPostsPage = async (pageparam = 1, options = {}) => {
//   const response = await axios.get(`/?page=${pageparam}&limit=5`, options);
//   return response.data;
// };



