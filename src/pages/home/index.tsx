import { useEffect, useState } from 'react';
import {
  ChatCircle,
  ThumbsUp,
  Chats,
  UsersThree,
  Fire,
  Image,
} from '@phosphor-icons/react';
import { PostCard } from '../../components/PostCard';
import { PostBox } from './PostBox';
import { Section } from './Section';
import { useHomePage } from './hook/useHomePage';
import { Loading } from '~/components/Loading';

export const HomePage = () => {
  const { loadFeed, feedItems, isFeedLoading } = useHomePage();

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-6">
        <aside className="space-y-4 hidden lg:block">
          <Section title="Fóruns em alta" icon={<Fire size={16} />}>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              programação
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              design
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              games
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              devops
            </li>
          </Section>

          <Section title="Temas populares" icon={<Chats size={16} />}>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              react
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              openai
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              darkmode
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              tailwind
            </li>
          </Section>
        </aside>

        <main className="space-y-6">
          <PostBox />
          {isFeedLoading && <Loading />}
          {feedItems.map((item) => (
            <PostCard data={item} />
          ))}
        </main>

        <aside className="space-y-4 hidden lg:block">
          <Section title="Amigos" icon={<UsersThree size={16} />}>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              bruno
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              clara
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              luis
            </li>
          </Section>

          <Section title="Fóruns seguidos" icon={<Chats size={16} />}>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              devops
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              uiux
            </li>
            <li className="text-sm text-text hover:text-primary cursor-pointer">
              startups
            </li>
          </Section>
        </aside>
      </div>
    </div>
  );
};
