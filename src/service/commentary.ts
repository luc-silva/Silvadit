import { routes } from '~/proxy';
import { api } from './api';

export const getCommentaryReplies = async (
  commentaryId: string,
  token: string,
) => {
  const authorization = `Bearer ${token}`;
  return await api.get(routes.commentary.getReplies(commentaryId), {
    headers: { Authorization: authorization },
  });
};
