import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  ChatTeardropTextIcon,
  UserIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react';
import { ITabItem, Tabs } from '~/components/TabOptions';

export const SearchPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabsConst: ITabItem[] = [
    { text: 'Todos', value: 'all', icon: <MagnifyingGlassIcon size={16} /> },
    { text: 'Fóruns', value: 'forum', icon: <UsersThreeIcon size={16} /> },
    { text: 'Usuários', value: 'user', icon: <UserIcon size={16} /> },
    {
      text: 'Postagens',
      value: 'post',
      icon: <ChatTeardropTextIcon size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <SidebarFilters activeTab={activeTab} />

        <section className="flex-1 space-y-6">
          <Tabs
            activeTab={activeTab}
            onClickTab={setActiveTab}
            tabs={tabsConst}
          />
          <div className="grid gap-4">
            <SearchResultCard
              title="Exemplo de resultado"
              subtitle="Descrição ou contexto do item"
            />
            <SearchResultCard
              title="Outro resultado interessante"
              subtitle="Pode ser um fórum, usuário ou post"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const SearchResultCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="p-4 rounded border border-border bg-surface shadow-sm hover:shadow transition">
      <h3 className="text-font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-text mt-1">{subtitle}</p>}
    </div>
  );
};

export const SidebarFilters = ({ activeTab }: { activeTab: string }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [tipo, setTipo] = useState('');
  const [donoPost, setDonoPost] = useState('');
  const [somenteSeguidos, setSomenteSeguidos] = useState(false);
  const [mostrarNSFW, setMostrarNSFW] = useState(false);
  const [conteudoTipo, setConteudoTipo] = useState('');
  const [ordenarPor, setOrdenarPor] = useState('relevancia');

  return (
    <aside className="w-full lg:w-64 border border-border bg-surface rounded p-4 space-y-6">
      <h2 className="text-sm font-medium uppercase tracking-wide text-text">
        Filtros
      </h2>

      <div className="space-y-2">
        <label className="text-sm font-medium">Data (de)</label>
        <input
          type="date"
          className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <label className="text-sm font-medium">Data (até)</label>
        <input
          type="date"
          className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Tipo</label>
        <select
          className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          disabled={activeTab !== 'all'}
        >
          <option value="">Todos</option>
          <option value="forum">Fórum</option>
          <option value="post">Postagem</option>
          <option value="user">Usuário</option>
        </select>
      </div>

      {activeTab === 'forum' && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Dono da Postagem</label>
          <input
            type="text"
            placeholder="Nome de usuário"
            className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
            value={donoPost}
            onChange={(e) => setDonoPost(e.target.value)}
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="filtros-seguidos"
          checked={somenteSeguidos}
          onChange={() => setSomenteSeguidos((v) => !v)}
          className="w-4 h-4 text-primary border-border rounded"
        />
        <label
          htmlFor="filtros-seguidos"
          className="text-sm cursor-pointer select-none"
        >
          Mostrar somente fóruns seguidos
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="filtros-nsfw"
          checked={mostrarNSFW}
          onChange={() => setMostrarNSFW((v) => !v)}
          className="w-4 h-4 text-primary border-border rounded"
        />
        <label
          htmlFor="filtros-nsfw"
          className="text-sm cursor-pointer select-none"
        >
          Mostrar conteúdo NSFW
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Tipo de conteúdo</label>
        <select
          className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
          value={conteudoTipo}
          onChange={(e) => setConteudoTipo(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="texto">Texto</option>
          <option value="imagem">Imagem</option>
          <option value="link">Link</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Ordenar por</label>
        <select
          className="w-full px-3 py-2 rounded border border-border bg-bg text-sm"
          value={ordenarPor}
          onChange={(e) => setOrdenarPor(e.target.value)}
        >
          <option value="relevancia">Relevância</option>
          <option value="recentes">Mais Recentes</option>
          <option value="maisCurtidas">Mais Curtidas</option>
        </select>
      </div>
    </aside>
  );
};
