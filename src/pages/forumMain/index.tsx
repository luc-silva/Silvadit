import { useMemo, useState } from 'react';
import { Avatar } from '@mui/material';
import {
  Users,
  ShieldStar,
  EyeSlash,
  Warning,
  Link as LinkIcon,
} from '@phosphor-icons/react';
import { ForumRequestsTab } from './tabs/request';
import { PostsTab } from './tabs/post';
import { ForumMembersTab } from './tabs/member';
import { ITabItem, Tabs } from '~/components/TabOptions';

export default function ForumPage() {
  const [tab, setTab] = useState('');

  const isFollower = false;
  const isNSFW = true;
  const isPrivate = true;
  const isStaff = true;

  const forumTabs: ITabItem[] = useMemo(() => {
    return [
      {
        text: 'Postagem',
        value: 'posts',
      },
      {
        text: 'Solicitações',
        value: 'requests',
      },
      { text: 'Membros', value: 'members' },
    ];
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4  flex gap-6 text-bg  h-full relative">
      <div className="flex-1 w-5xl bg-surface border border-border h-full  shadow-sm">
        <div className="relative h-60 w-full bg-bg rounded-lg overflow-hidden">
          <img
            src="/banner-placeholder.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-start gap-4 px-2 sm:px-4 border-y border-border p-4">
          <Avatar
            sx={{
              width: 96,
              height: 96,
              border: '4px solid var(--tw-bg-base-100)',
            }}
            className="bg-bg"
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-subtitle">
                  Nome do Fórum
                </h1>
                <p className="text-sm text-text mt-1">
                  descrição breve do fórum
                </p>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <div className="flex gap-2 mt-4 sm:mt-0">
                  <button
                    title="Compartilhar link"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-text hover:bg-border/30 transition"
                  >
                    <LinkIcon size={18} />
                  </button>

                  <button
                    title="Reportar fórum"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-text hover:bg-border/30 transition"
                  >
                    <Warning size={18} />
                  </button>

                  {!isFollower && (
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium border border-primary hover:bg-primary/90 transition">
                      Seguir Fórum
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 items-center flex-wrap">
              {isNSFW && (
                <div className="flex items-center gap-2 text-warning-primary text-sm">
                  <Warning size={18} /> <span>Conteúdo sensível (NSFW)</span>
                </div>
              )}
              {isPrivate && !isFollower && (
                <div className="flex items-center gap-2 text-text text-sm">
                  <EyeSlash size={18} />{' '}
                  <span>Você precisa seguir este fórum para ver postagens</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-bg text-text">
          <Tabs activeTab={tab} onClickTab={setTab} tabs={forumTabs} />
        </div>

        <div className="mt-4">
          {tab === 'post' && (
            <PostsTab isFollower={isFollower} isPrivate={isPrivate} />
          )}
          {tab === 'requests' && isStaff && (
            <ForumRequestsTab isStaff={isStaff} />
          )}
          {tab === 'membeers' && <ForumMembersTab isStaff={isStaff} />}
        </div>
      </div>

      <div className="w-72 space-y-4 bg-bg mt-4 sticky">
        <SidebarCard
          title="Staff"
          icon={<ShieldStar size={20} />}
          items={[
            { name: 'mod_joao', role: 'Moderador' },
            { name: 'admin_lu', role: 'Admin' },
          ]}
        />
        <SidebarCard
          title="Membros Recentes"
          icon={<Users size={20} />}
          items={[
            { name: 'usuario1' },
            { name: 'usuario2' },
            { name: 'usuario3' },
          ]}
        />
        <div className="bg-surface border border-border p-4 flex gap-4  shadow-sm">
          <div>
            <h2 className="text-subtitle">Seguidores</h2>
            <p className="text-text">1.204</p>
          </div>
          <div>
            <h2 className="text-subtitle">Postagens</h2>
            <p className="text-text">1.204</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: { name: string; role?: string }[];
}) {
  return (
    <div className="bg-surface border border-border p-4  shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-text font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-text">
            @{item.name}{' '}
            {item.role && (
              <span className="text-xs text-text ml-1">({item.role})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
