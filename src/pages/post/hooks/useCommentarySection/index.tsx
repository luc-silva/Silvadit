import { useState } from 'react';
import { useAppFeatures } from '~/context/appWrapper';
import { getCommentaryReplies } from '~/service/commentary';
import { getPostCommentaries, submitPostCommentary } from '~/service/post';

export const useCommentarySection = () => {
  const [content, setContent] = useState('');
  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    setContent(target.value);
  };

  const { session } = useAppFeatures();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const loadSubmitPostCommentary = async (postId: string, replyId?: string) => {
    if (!session) return;

    const params: ISubmitCommentary = { content, postId, replyId };

    setIsSubmitLoading(true);
    setIsSubmitError(false);

    await submitPostCommentary(params, session.token)
      .catch(() => {
        setIsSubmitError(true);
      })
      .finally(() => {
        setIsSubmitLoading(false);
      });
  };

  const [isRepliesLoading, setIsRepliesLoading] = useState(false);
  const [isRepliesError, setIsRepliesError] = useState(false);
  const [replies, setReplies] = useState<ICommentary[]>([]);
  const loadReplies = async (commentaryId: string) => {
    if (!session) return;

    setIsRepliesLoading(true);
    setIsRepliesError(false);

    await getCommentaryReplies(commentaryId, session.token)
      .then(({ data }) => setReplies(data))
      .catch(() => {
        setIsRepliesError(true);
      })
      .finally(() => {
        setIsRepliesLoading(false);
      });
  };

  const [isCommentariesLoading, setIsCommentariesLoading] = useState(false);
  const [isCommentariesError, setIsCommentariesError] = useState(false);
  const [commentaries, setCommentaries] = useState<ICommentary[]>([]);
  const loadCommentaries = async (postId: string) => {
    if (!session) return;

    setIsCommentariesLoading(true);
    setIsCommentariesError(false);

    await getPostCommentaries(postId, session.token)
      .then(({ data }) => setCommentaries(data))
      .catch(() => {
        setIsCommentariesError(true);
      })
      .finally(() => {
        setIsCommentariesLoading(false);
      });
  };

  return {
    content,
    handleContent,
    isSubmitLoading,
    isSubmitError,
    loadSubmitPostCommentary,
    isCommentariesLoading,
    isCommentariesError,
    loadCommentaries,
    isRepliesLoading,
    isRepliesError,
    loadReplies,
    commentaries,
    replies,
  };
};
