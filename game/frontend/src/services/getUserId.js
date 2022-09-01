import { getUsers } from '../services/api.js';

export const getUserID = async () => {
  const response = await getUsers();
  const loginAuth = JSON.parse(localStorage.getItem('loginAuth'));
  console.log(response);
  if (loginAuth) {
    const user = response.find((user) => user._id === loginAuth.id);
    return user;
  }
};
