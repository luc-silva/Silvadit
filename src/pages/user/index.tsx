import {
  Tabs,
  Tab,
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { BookmarkSimple, Heart, User, Users } from '@phosphor-icons/react';
import { useState } from 'react';
import { Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { List, GridFour } from '@phosphor-icons/react';

export default function ProfilePage() {
  const [tab, setTab] = useState(0);

  const handleChange = (_: any, newValue: number) => setTab(newValue);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-base-content">
      {/* Banner do Usuário */}
      <div className="w-full h-40 rounded-lg bg-base-300 mb-4 relative">
        {/* Se o usuário tiver banner, coloque como background-image aqui */}
        <div className="absolute inset-0 bg-[url('/path/to/banner.jpg')] bg-cover bg-center rounded-lg opacity-50" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar sx={{ width: 64, height: 64 }} />
        <div>
          <h1 className="text-xl font-semibold">Nome do Usuário</h1>
          <p className="text-sm text-base-content/70">@username</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={tab} onChange={handleChange} className="mb-4">
        <Tab label="Interações" />
        <Tab label="Seguindo" />
        <Tab label="Conta" />
      </Tabs>

      {/* Conteúdo das Abas */}
      {tab === 0 && <InteractionsTab />}
      {tab === 1 && <FollowingTab />}
      {tab === 2 && <AccountTab />}
    </div>
  );
}

function InteractionsTab() {
  return (
    <div className="space-y-4">
      <ProfileCard title="Seguiu um perfil" type="forum" />
      <ProfileCard title="Seguiu um fórum" type="forum" />
      <ProfileCard title="Curtiu uma postagem" type="forum" />
      <ProfileCard title="Comentou" type="forum" />
      <ProfileCard title="Criou uma postagem" type="forum" />
    </div>
  );
}

function FollowingTab() {
  const [viewType, setViewType] = useState<'simple' | 'detailed'>('simple');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Seguindo</h2>
        <ToggleButtonGroup
          exclusive
          value={viewType}
          onChange={(_, newValue) => {
            if (newValue) setViewType(newValue);
          }}
          size="small"
          className="bg-base-300 rounded"
        >
          <ToggleButton value="simple">
            <GridFour size={16} />
          </ToggleButton>
          <ToggleButton value="detailed">
            <List size={16} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Fóruns */}
      <div>
        <h3 className="text-md font-medium mb-2 text-base-content/80">
          Fóruns
        </h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <FollowCard key={i} type="forum" variant={viewType} />
          ))}
        </div>
      </div>

      {/* Usuários */}
      <div>
        <h3 className="text-md font-medium mb-2 text-base-content/80">
          Usuários
        </h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <FollowCard key={i} type="user" variant={viewType} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm text-base-content/80">
      <span className="font-medium text-base-content">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="bg-base-200 shadow-none border border-base-300 rounded-lg">
      <CardContent className="space-y-2">
        <Typography variant="h6" className="font-semibold">{title}</Typography>
        <div className="space-y-1">{children}</div>
      </CardContent>
    </Card>
  );
}

function AccountTab() {
  return (
    <div className="space-y-4">
      {/* Informações básicas */}
      <SectionCard title="Informações da Conta">
        <InfoLine label="Email" value="usuario@email.com" />
        <InfoLine label="Data de criação" value="30 de Julho de 2025" />
        <InfoLine label="Último login" value="01 de Agosto de 2025 às 14:23" />
        <InfoLine label="Localização" value="São Paulo, Brasil" />
        <InfoLine label="Verificação" value="✅ Conta verificada" />
      </SectionCard>

      {/* Preferências */}
      <SectionCard title="Preferências">
        <InfoLine label="Tema" value="Sistema (Auto)" />
        <InfoLine label="Visibilidade" value="Público" />
        <InfoLine label="Notificações" value="Ativadas" />
      </SectionCard>

      {/* Bio */}
      <SectionCard title="Bio">
        <Typography variant="body2" className="text-base-content/70">
          Amante de tecnologia, fóruns e discussões saudáveis. Sempre em busca
          de aprendizado e boas conversas.
        </Typography>
      </SectionCard>

      {/* Contas conectadas */}
      <SectionCard title="Contas conectadas">
        <InfoLine label="Google" value="Conectado" />
        <InfoLine label="GitHub" value="Não conectado" />
        <InfoLine label="Twitter" value="Conectado" />
      </SectionCard>

      {/* Estatísticas */}
      <SectionCard title="Estatísticas">
        <InfoLine label="Postagens" value="128" />
        <InfoLine label="Curtidas recebidas" value="452" />
        <InfoLine label="Fóruns que administra" value="2" />
        <InfoLine label="Beta tester" value="Sim" />
      </SectionCard>
    </div>
  );
}

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
    <div className="bg-base-200 shadow-none border border-base-300 rounded-lg flex gap-2 pb-0.5 pt-0.5 pl-2 pr-2 align-middle">
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

type FollowCardProps = {
  type: 'user' | 'forum';
  variant: 'simple' | 'detailed';
};

function FollowCard({ type, variant }: FollowCardProps) {
  const name = type === 'user' ? 'Usuário Legal' : 'Fórum Interessante';
  const avatarUrl = 'https://via.placeholder.com/80';
  const bannerUrl = 'https://via.placeholder.com/300x100';
  const followers = Math.floor(Math.random() * 1000);

  if (variant === 'simple') {
    return (
      <Card className="bg-base-200 shadow-none border border-base-300 rounded-lg p-3 flex items-center gap-4">
        <Avatar src={avatarUrl} />
        <Typography variant="body1" className="font-medium">
          {name}
        </Typography>
      </Card>
    );
  }

  return (
    <Card className="bg-base-200 shadow-none border border-base-300 rounded-lg overflow-hidden">
      {/* Banner */}
      <div className="h-24 w-full bg-base-300 relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex items-start gap-4">
        <Avatar src={avatarUrl} sx={{ width: 56, height: 56 }} />
        <div className="flex-1">
          <Typography variant="subtitle1" className="font-semibold">
            {name}
          </Typography>
          <Typography variant="body2" className="text-base-content/70">
            {followers} seguidores
          </Typography>
        </div>
        <Button variant="outlined" size="small">
          Seguir
        </Button>
      </div>
    </Card>
  );
}
