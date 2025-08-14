import { useEffect, useMemo } from 'react';
import { ChatsIcon, UsersThreeIcon, FireIcon } from '@phosphor-icons/react';
import { PostCard } from '../../components/PostCard';
import { PostBox } from './PostBox';
import { Section } from './Section';
import { useHomePage } from './hook/useHomePage';
import { Loading } from '~/components/Loading';
import { useAppFeatures } from '~/context/appWrapper';

export const HomePage = () => {
  const {
    loadFeed,
    feedItems,
    isFeedLoading,
    followingItems,
    isFollowingLoading,
    isFollowingError,
    isFeedError,
    trendingItems,
    isTrendingError,
    isTrendingLoading,
  } = useHomePage();
  const { session } = useAppFeatures();

  const isPageLoading = useMemo(() => {
    return (isFeedLoading || isFollowingLoading) && isFeedLoading;
  }, [isFeedLoading, isFollowingLoading, isFeedLoading]);

  useEffect(() => {
    loadFeed();
  }, [session]);

  if (isPageLoading) return <Loading />;
  return (
    <div className="min-h-screen bg-bg text-text px-4 py-6">
      <div className="max-w-7xl mx-auto flex justify-center gap-6">
        {trendingItems && (
          <aside className="space-y-4 hidden lg:block w-[220px]">
            {trendingItems.forums && (
              <Section title="Fóruns em alta" icon={<FireIcon size={16} />}>
                {trendingItems.forums.map((a, index) => (
                  <li
                    className="text-sm text-text hover:text-primary cursor-pointer"
                    key={index}
                  >
                    programação
                  </li>
                ))}
              </Section>
            )}

            {trendingItems.tags && (
              <Section title="Temas populares" icon={<ChatsIcon size={16} />}>
                {trendingItems.tags.map((a, index) => (
                  <li
                    className="text-sm text-text hover:text-primary cursor-pointer"
                    key={index}
                  >
                    programação
                  </li>
                ))}
              </Section>
            )}
          </aside>
        )}
        <main
          className="space-y-6 w-[60%]"
          onScroll={({}) => console.log('teste')}
        >
          <PostBox />
          {isFeedLoading && <Loading />}
          {feedItems.map((item) => (
            <PostCard data={item} />
          ))}
          {!isFeedLoading && (
            <div className="">
              <p className="text-text text-sm text-center">
                Não há mais conteúdo a ser visualizado
              </p>
            </div>
          )}
        </main>

        {followingItems && (
          <aside className="space-y-4 hidden lg:block w-[220px]">
            {followingItems.users && (
              <Section title="Amigos" icon={<UsersThreeIcon size={16} />}>
                {followingItems.users.map((a, index) => (
                  <li
                    className="text-sm text-text hover:text-primary cursor-pointer"
                    key={index}
                  >
                    programação
                  </li>
                ))}
              </Section>
            )}

            {followingItems.forums && (
              <Section title="Fóruns seguidos" icon={<ChatsIcon size={16} />}>
                {followingItems.forums.map((a, index) => (
                  <li
                    className="text-sm text-text hover:text-primary cursor-pointer"
                    key={index}
                  >
                    programação
                  </li>
                ))}
              </Section>
            )}
          </aside>
        )}
      </div>
    </div>
  );
};
