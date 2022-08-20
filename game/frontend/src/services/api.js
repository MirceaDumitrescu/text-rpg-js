const URL_DB = 'http://localhost:5050/api/v1/users';

export const getUsers = async () => {
  const response = await fetch(URL_DB);
  const data = await response.json();
  return data;
};
