import { URL_BASE_API } from '../config';

export const getUsers = async () => {
  const response = await fetch(`${URL_BASE_API}/users`);
  return response.json();
};
