import { ChangeEvent, useCallback, useState } from 'react';
import { useAppFeatures } from '~/context/appWrapper';
import { createPost, getFeed, getFollowingDetails, getTrendingDetails } from '~/service/home';

export const useHomePage = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [isNsfw, setIsNsfw] = useState<boolean>(false);
  const [feedItems, setFeedItems] = useState<IFeed[]>([]);
  const [followingItems, setFollowingItems] =
    useState<IFollowingDetails | null>(null);
  const [trendingItems, setTrendingItems] = useState<ITrendingDetails | null>(
    null,
  );

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
  }, [isFeedError, isFeedLoading, session]);

  const [isFollowingLoading, setIsFolowingLoading] = useState(false);
  const [isFollowingError, setIsFollowingError] = useState(false);
  const loadFollowing = useCallback(async () => {
    if (!session) return;

    setIsFolowingLoading(true);
    setIsFollowingError(false);

    await getFollowingDetails(session.token)
      .then(({ data }) => {
        setFollowingItems(data);
      })
      .catch(() => {
        setIsFollowingError(true);
      })
      .finally(() => {
        setIsFolowingLoading(false);
      });
  }, [isFollowingError, isFollowingLoading, session]);

  const [isTrendingLoading, setIsTrendingLoading] = useState(false);
  const [isTrendingError, setIsTrendingError] = useState(false);
  const loadTrending = useCallback(async () => {
    if (!session) return;

    setIsTrendingLoading(true);
    setIsTrendingError(false);

    await getTrendingDetails(session.token)
      .then(({ data }) => {
        setTrendingItems(data);
      })
      .catch(() => {
        setIsTrendingError(true);
      })
      .finally(() => {
        setIsTrendingLoading(false);
      });
  }, [isTrendingError, isTrendingLoading, session]);

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
    loadTrending,
    isTrendingLoading,
    isTrendingError,
    trendingItems,
    loadFollowing,
    isFollowingError,
    isFollowingLoading,
    followingItems,
  };
};
