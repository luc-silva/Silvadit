import { routes } from '~/proxy';
import { api } from './api';

export const registerUser = async (data: ICreateUserData) => {
  return await api.post(routes.auth.register, data);
};

export const loginUser = async (data: ILoginUserData) => {
  return await api.post<ISession>(routes.auth.login, data);
};

export const getUserPage = async (id: string) => {
  return await api.get<IUserDetails>(routes.user.getUserDetails(id));
};

export const getUserFollowedForums = async (id: string) => {
  return await api.get<any[]>(routes.user.getUserFollowedForums(id));
};

export const getUserFollowedUsers = async (id: string) => {
  return await api.get<ISubscribedUser[]>(routes.user.getUserFollowedUsers(id));
};

export const getUserFollowers = async (id: string) => {
  return await api.get<any[]>(routes.user.getUserFollowedForums(id));
};
