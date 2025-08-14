import { AxiosHeaders, RawAxiosRequestHeaders } from 'axios';
import { api } from './api';
import { routes } from '~/proxy';

export const getFeed = async (token: string) => {
  const authorization = `Bearer ${token}`;
  return await api.get<IFeed[]>(routes.home.feed, {
    headers: { Authorization: authorization },
  });
};

export const createPost = async (data: ICreatePost, token: string) => {
  const authorization = `Bearer ${token}`;
  return await api.post(routes.home.createPost, data, {
    headers: { Authorization: authorization },
  });
};

export const getTrendingDetails = async (token: string) => {
  const authorization = `Bearer ${token}`;
  return await api.get<ITrendingDetails>(routes.home.trending, {
    headers: { Authorization: authorization },
  });
};

export const getFollowingDetails = async (token: string) => {
  const authorization = `Bearer ${token}`;
  return await api.get<IFollowingDetails>(routes.home.following, {
    headers: { Authorization: authorization },
  });
};
