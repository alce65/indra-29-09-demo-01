const URL_BASE_API = 'https://jsonplaceholder.typicode.com/api';

export const getUsers = async () => {
  const response = await fetch(`${URL_BASE_API}/users`);
  return response.json();
};
