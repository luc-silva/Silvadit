import { Typography } from '@mui/material';
import { BookmarkSimple, Users } from '@phosphor-icons/react';
type IHistoricType = 'forum' | 'user';

function ProfileCard({ title, type }: { title: string; type: IHistoricType }) {
  const renderIcon = (type: IHistoricType) => {
    switch (type) {
      case 'forum':
        return <BookmarkSimple size={18} />;
      case 'user':
        return <Users size={18} />;
      default:
        break;
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg flex gap-2 py-0.5 px-2 align-middle w-full">
      <div className="mt-1 text-primary">{renderIcon(type)}</div>
      <div className="flex justify-between w-full">
        <Typography variant="subtitle1" className="font-medium">
          {title}
        </Typography>
        {/* 
          <Typography variant="body2" className="text-base-content/70">
            {subtitle}
          </Typography>
          {content && <Typography variant="body2" className="mt-1">{content}</Typography>}
          */}
        <div>{new Date().toDateString()}</div>
      </div>
    </div>
  );
}

export const InteractionsTab = () => {
  return (
    <div className="space-y-4 w-full p-4">
      <ProfileCard title="Seguiu um perfil" type="forum" />
      <ProfileCard title="Seguiu um fórum" type="forum" />
      <ProfileCard title="Curtiu uma postagem" type="forum" />
      <ProfileCard title="Comentou" type="forum" />
      <ProfileCard title="Criou uma postagem" type="forum" />
    </div>
  );
};
