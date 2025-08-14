import { routes } from '~/proxy';
import { api } from './api';

export const submitPostCommentary = async (
  data: ISubmitCommentary,
  token: string,
) => {
  const authorization = `Bearer ${token}`;
  return await api.post(routes.post.commentary, data, {
    headers: { Authorization: authorization },
  });
};

export const getPostCommentaries = async (postId: string, token: string) => {
  const authorization = `Bearer ${token}`;
  return await api.get(routes.post.getCommentaries(postId), {
    headers: { Authorization: authorization },
  });
};
