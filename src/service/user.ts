import { routes } from '~/proxy';
import { api } from './api';

export const registerUser = async (data: ICreateUserData) => {
  return await api.post(routes.auth.register, data);
};

export const loginUser = async (data: ILoginUserData) => {
  return await api.post(routes.auth.login, data);
};
