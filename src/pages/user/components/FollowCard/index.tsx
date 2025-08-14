import { Avatar, Button, Card, Typography } from '@mui/material';

type IProps = {
  type: 'user' | 'forum';
  variant: 'simple' | 'detailed';
  data: any;
};

export const FollowCard = ({ type, variant, data }: IProps) => {
  const name = data.name;
  const avatarUrl = data.avatarUrl;
  const bannerUrl = data.bannerUrl;
  const followers = data.followersCount ?? 0;
  const isNSFW = data.isNSFW ?? false;
  const isBanned = data.isBanned ?? false;

  const blurClass = isNSFW ? 'blur-sm grayscale brightness-75' : '';
  const nsfwBadge = isNSFW ? (
    <span className="absolute top-2 left-2 text-xs px-2 py-0.5 bg-red-500 text-white rounded">
      NSFW
    </span>
  ) : null;

  const bannedBanner = isBanned ? (
    <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-sm font-medium">
      {type === 'user' ? 'Usuário banido' : 'Fórum banido'}
    </div>
  ) : null;

  if (variant === 'simple') {
    return (
      <div className="bg-surface border border-border rounded-lg p-3 flex items-center gap-4 relative">
        <img
          src={avatarUrl}
          alt="avatar"
          className={`w-10 h-10 rounded-full object-cover ${
            isNSFW ? 'blur-sm grayscale' : ''
          }`}
        />
        <div className="flex flex-col">
          <span className="font-medium text-text">{name}</span>
          {isBanned && <span className="text-xs text-red-500">Banido</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg border border-border rounded-lg overflow-hidden shadow-sm relative">
      <div className="h-24 w-full bg-bg relative">
        <img
          src={bannerUrl}
          alt="banner"
          className={`h-full w-full object-cover ${blurClass}`}
        />
        {nsfwBadge}
        {bannedBanner}
      </div>

      <div className="p-4 flex items-start gap-4 bg-surface">
        <img
          src={avatarUrl}
          alt="avatar"
          className={`w-14 h-14 rounded-full object-cover ${
            isNSFW ? 'blur-sm grayscale' : ''
          }`}
        />
        <div className="flex-1">
          <p className="font-semibold text-subtitle">{name}</p>
          <p className="text-sm text-text">{followers} seguidores</p>
          {isBanned && (
            <p className="text-xs text-red-500">Este perfil está banido.</p>
          )}
        </div>
        <button className="px-3 py-1 text-sm border border-border rounded hover:bg-hover transition">
          Seguir
        </button>
      </div>
    </div>
  );
};
