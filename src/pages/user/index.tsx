import { Tabs, Tab, Avatar } from '@mui/material';
import { Flag, Heart } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useUserPage } from './hooks/useUserPage/useUserPage';
import { InteractionsTab } from './components/tabs/interactions-tab';
import { FollowingTab } from './components/tabs/following-tab';
import { AccountTab } from './components/tabs/account-tab';

export default function ProfilePage() {
  const [tab, setTab] = useState(0);

  const handleChange = (_: any, newValue: number) => setTab(newValue);
  const { loadUserDetails, profileData } = useUserPage();

  useEffect(() => {
    loadUserDetails();
  }, []);

  if (!profileData) return null;
  return (
    <div className="max-w-4xl mx-auto text-text border border-border flex flex-col h-screen">
      <div className="w-full h-40 bg-bg relative border-b border-border">
        <div className="absolute inset-0 bg-[url('/path/to/banner.jpg')] bg-cover bg-center rounded-lg opacity-50" />
      </div>

      <div className="flex items-center gap-6 bg-surface p-4">
        <Avatar sx={{ width: 64, height: 64 }} />

        <div className="flex justify-between flex-1 min-w-0">
          <div>
            <h1 className="text-xl font-semibold truncate">
              {`${profileData.firstName} ${profileData.lastName}`}{' '}
            </h1>
            <p className="text-sm text-text/70 truncate mb-2">
              @{profileData.username}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-text/80 text-sm select-none">
              <Heart weight="fill" size={16} className="text-primary" />
              <span>{321} seguidores</span>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-dark transition"
            >
              <Heart weight="fill" size={16} />
              Seguir
            </button>

            <button
              type="button"
              aria-label="Reportar usuário"
              className="p-2 rounded-md hover:bg-border/30 text-text/70 hover:text-red-600 transition"
            >
              <Flag size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-bg text-text">
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'var(--color-primary)',
            },
          }}
        >
          <Tab
            label="Interações"
            sx={{
              color: 'var(--color-text)',
            }}
          />
          <Tab
            label="Seguindo"
            sx={{
              color: 'var(--color-text)',
            }}
          />
          <Tab
            label="Conta"
            sx={{
              color: 'var(--color-text)',
            }}
          />
        </Tabs>
      </div>

      <div className="bg-surface flex grow w-full">
        {tab === 0 && <InteractionsTab />}
        {tab === 1 && <FollowingTab />}
        {tab === 2 && <AccountTab />}
      </div>
    </div>
  );
}
