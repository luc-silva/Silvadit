import { ChangeEvent, useCallback, useState } from 'react';
import { useAppFeatures } from '~/context/appWrapper';
import { createPost, getFeed } from '~/service/home';

export const useHomePage = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [isNsfw, setIsNsfw] = useState<boolean>(false);
  const [feedItems, setFeedItems] = useState<IFeed[]>([]);

  const { session } = useAppFeatures();

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;

    setContent(target.value);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setTitle(target.value);
  };

  const handleTags = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    const value = target.value;
    const found = tags.filter((tag) => tag !== value);

    if (found.length === tags.length) {
      setTags((prev) => [...prev, value]);
    } else setTags(found);
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    if (target.files && target.files.length) {
      setImage(target.files[0]);
    }
  };

  const [isCreatingLoading, setIsCreatingLoading] = useState(false);
  const [isCreatingError, setIsCreatingError] = useState(false);
  const loadCreatePost = useCallback(async () => {
    if (!session) return;

    setIsCreatingLoading(true);
    setIsCreatingError(false);

    const data: ICreatePost = { content, isNsfw: `${isNsfw}`, title };

    await createPost(data, session.token)
      .catch(() => {
        setIsCreatingError(true);
      })
      .finally(() => {
        setIsCreatingLoading(false);
      });
  }, [content, isNsfw, title, isCreatingError, isCreatingLoading, session]);

  const [isFeedLoading, setIsFeedLoading] = useState(false);
  const [isFeedError, setIsFeedError] = useState(false);
  const loadFeed = useCallback(async () => {
    if (!session) return;

    setIsFeedLoading(true);
    setIsFeedError(false);

    await getFeed(session.token)
      .then(({ data }) => {
        setFeedItems(data);
      })
      .catch(() => {
        setIsFeedError(true);
      })
      .finally(() => {
        setIsFeedLoading(false);
      });
  }, [content, isNsfw, title, isFeedError, isFeedLoading, session]);

  return {
    content,
    tags,
    title,
    image,
    handleContent,
    handleTitle,
    handleTags,
    handleImage,
    setImage,
    isCreatingLoading,
    isCreatingError,
    loadCreatePost,
    isFeedError,
    isFeedLoading,
    loadFeed,
    feedItems,
  };
};
