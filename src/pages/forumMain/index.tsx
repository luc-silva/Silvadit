import { useState } from 'react';
import {
  Tabs,
  Tab,
  Avatar,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@mui/material';
import { Users, ShieldStar, EyeSlash, Warning } from '@phosphor-icons/react';

export default function ForumPage() {
  const [tab, setTab] = useState(0);

  // Mock para simular o contexto
  const isFollower = false;
  const isNSFW = true;
  const isPrivate = true;
  const isStaff = true;

  const handleTabChange = (_: any, newValue: number) => setTab(newValue);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6 text-base-content">
      {/* Main Content */}
      <div className="flex-1 space-y-4 w-5xl">
        {/* Banner + Header do Fórum */}
        <div className="relative h-40 w-full bg-base-300 rounded-lg overflow-hidden mb-16">
          <img
            src="/banner-placeholder.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header com Avatar e Info */}
        <div className="flex items-start gap-4 px-2 sm:px-4 -mt-16">
          {/* Avatar sobreposto */}
          <Avatar
            sx={{
              width: 96,
              height: 96,
              border: '4px solid var(--tw-bg-base-100)',
            }}
            className="bg-base-100"
          />

          {/* Informações e Botões */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Nome do Fórum</h1>
                <p className="text-sm text-base-content/70 mt-1">
                  descrição breve do fórum
                </p>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button variant="outlined" size="small">
                  Compartilhar
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Warning size={16} />}
                >
                  Reportar
                </Button>
                {!isFollower && (
                  <Button variant="contained" size="small" color="primary">
                    Seguir Fórum
                  </Button>
                )}
              </div>
            </div>

            {/* Avisos NSFW / Privado */}
            <div className="flex gap-4 mt-4 items-center flex-wrap">
              {isNSFW && (
                <div className="flex items-center gap-2 text-warning text-sm">
                  <Warning size={18} /> <span>Conteúdo sensível (NSFW)</span>
                </div>
              )}
              {isPrivate && !isFollower && (
                <div className="flex items-center gap-2 text-error text-sm">
                  <EyeSlash size={18} />{' '}
                  <span>Você precisa seguir este fórum para ver postagens</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={tab} onChange={handleTabChange} className="mt-6">
          <Tab label="Postagens" />
          {isStaff && <Tab label="Configurações" />}
          {isStaff && <Tab label="Solicitações" />}
          <Tab label="Membros" />
        </Tabs>

        {/* Conteúdo da Tab */}
        <div className="mt-4">
          {tab === 0 && (
            <PostsTab isFollower={isFollower} isPrivate={isPrivate} />
          )}
          {tab === 1 && isStaff && <ForumSettingsTab />}
          {tab === 2 && isStaff && <ForumRequestsTab isStaff={isStaff} />}
          {tab === 3 && <ForumMembersTab isStaff={isStaff} />}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-72 space-y-4">
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
        <Card className="bg-base-200 border border-base-300">
          <CardContent>
            <Typography variant="subtitle1">Seguidores</Typography>
            <Typography variant="h6">1.204</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function PostsTab({
  isPrivate,
  isFollower,
}: {
  isPrivate: boolean;
  isFollower: boolean;
}) {
  if (isPrivate && !isFollower) {
    return (
      <div className="text-base-content/60 italic">
        Siga este fórum para visualizar as postagens.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Card de Postagem */}
      {[1, 2].map((_, i) => (
        <Card key={i} className="bg-base-200 border border-base-300">
          <CardContent>
            <Typography variant="subtitle1">
              Título da Postagem {i + 1}
            </Typography>
            <Typography variant="body2" className="text-base-content/70 mt-1">
              Um trecho da postagem que aparece aqui...
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ForumSettingsTab() {
  const [values, setValues] = useState({
    name: 'Nome do Fórum',
    description: 'Breve descrição do fórum...',
    isPrivate: true,
    isNSFW: false,
  });

  const handleChange = (field: string) => (event: any) => {
    setValues({
      ...values,
      [field]: event.target.checked ?? event.target.value,
    });
  };

  return (
    <form className="space-y-4">
      <div className="space-y-4">
        <Typography variant="h6">Editar Informações do Fórum</Typography>

        <TextField
          fullWidth
          label="Nome do Fórum"
          variant="outlined"
          value={values.name}
          onChange={handleChange('name')}
        />

        <TextField
          fullWidth
          multiline
          minRows={3}
          label="Descrição"
          variant="outlined"
          value={values.description}
          onChange={handleChange('description')}
        />

        <FormGroup row className="gap-4">
          <FormControlLabel
            control={
              <Switch
                checked={values.isPrivate}
                onChange={handleChange('isPrivate')}
              />
            }
            label="Fórum privado"
          />
          <FormControlLabel
            control={
              <Switch
                checked={values.isNSFW}
                onChange={handleChange('isNSFW')}
              />
            }
            label="Conteúdo NSFW"
          />
        </FormGroup>

        <div className="flex justify-end">
          <Button variant="contained" color="primary">
            Salvar alterações
          </Button>
        </div>
      </div>
    </form>
  );
}

function ForumRequestsTab({ isStaff }: { isStaff: boolean }) {
  const requests = [
    { name: 'Marina Dias', username: 'marina_d' },
    { name: 'Lucas Prado', username: 'lucasp' },
    { name: 'Bruno Silveira', username: 'br_silv' },
  ];

  return (
    <UserTableList users={requests} context="requests" isStaff={isStaff} />
  );
}

function UserTableList({ users, context, isStaff }: Props) {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');

  const filtered = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

  return (
    <div className="space-y-4">
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <TextField
          label="Buscar por nome"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
        <FormControl size="small" className="w-full sm:w-48">
          <InputLabel>Ordenar</InputLabel>
          <Select
            label="Ordenar"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <MenuItem value="asc">Nome A-Z</MenuItem>
            <MenuItem value="desc">Nome Z-A</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-12 text-sm font-medium px-2 py-1 text-base-content/60 border-b border-base-300">
        <div className="col-span-5">Usuário</div>
        {context === 'members' && (
          <div className="col-span-3 hidden sm:block">Entrou em</div>
        )}
        <div className="col-span-4 text-right">Ações</div>
      </div>

      {/* Linhas */}
      {filtered.map((user, i) => (
        <div
          key={i}
          className="grid grid-cols-12 items-center px-2 py-2 border-b border-base-300 hover:bg-base-300/50 transition rounded"
        >
          {/* Avatar + Info */}
          <div className="col-span-5 flex items-center gap-3">
            <Avatar sx={{ width: 32, height: 32 }} />
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-base-content/70">
                @{user.username}
              </div>
            </div>
          </div>

          {/* Data de entrada */}
          {context === 'members' && (
            <div className="col-span-3 hidden sm:block text-sm text-base-content/60">
              {user.joined || '--'}
            </div>
          )}

          {/* Ações */}
          <div className="col-span-4 flex justify-end gap-2 flex-wrap">
            {context === 'members' ? (
              <>
                <Button variant="outlined" size="small">
                  Seguir
                </Button>
                <Button variant="outlined" size="small" color="error">
                  Reportar
                </Button>
                {isStaff && !user.isStaff && (
                  <Button variant="outlined" size="small" color="error">
                    Expulsar
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button variant="contained" size="small">
                  Aprovar
                </Button>
                <Button variant="outlined" size="small" color="error">
                  Recusar
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
function ForumMembersTab({ isStaff }: { isStaff: boolean }) {
  const members = [
    { name: 'Ana Souza', username: 'anasz', joined: '10/07/2025' },
    {
      name: 'Carlos Lima',
      username: 'c_lima',
      joined: '11/07/2025',
      isStaff: true,
    },
    { name: 'Julia Teixeira', username: 'juh_tx', joined: '13/07/2025' },
  ];

  return <UserTableList users={members} context="members" isStaff={isStaff} />;
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
    <Card className="bg-base-200 border border-base-300">
      <CardContent>
        <div className="flex items-center gap-2 mb-2 text-base font-semibold">
          {icon}
          <span>{title}</span>
        </div>
        <ul className="space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-base-content/80">
              @{item.name}{' '}
              {item.role && (
                <span className="text-xs text-base-content/50 ml-1">
                  ({item.role})
                </span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

type UserItem = {
  name: string;
  username: string;
  joined?: string;
  isStaff?: boolean;
};

type Props = {
  users: UserItem[];
  context: 'members' | 'requests';
  isStaff: boolean;
};
