import { useState } from 'react';
import {
  User,
  ChatTeardropText,
  UsersThree,
  MagnifyingGlass,
  Calendar,
} from '@phosphor-icons/react';

export const SearchPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-base-bg text-base-text px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <SidebarFilters activeTab={activeTab} />

        {/* Conteúdo Principal */}
        <section className="flex-1 space-y-6">
          {/* Abas */}
          <div className="flex items-center gap-2 border-b border-base-border overflow-x-auto">
            <TabItem
              label="Todos"
              value="all"
              icon={<MagnifyingGlass size={16} />}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
            <TabItem
              label="Fóruns"
              value="forum"
              icon={<UsersThree size={16} />}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
            <TabItem
              label="Usuários"
              value="user"
              icon={<User size={16} />}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
            <TabItem
              label="Postagens"
              value="post"
              icon={<ChatTeardropText size={16} />}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
          </div>

          {/* Resultados */}
          <div className="grid gap-4">
            {/* Cards de resultados baseados em `activeTab` */}
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

// Componente de Aba
const TabItem = ({
  label,
  value,
  icon,
  activeTab,
  onClick,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  activeTab: string;
  onClick: (val: string) => void;
}) => {
  const active = value === activeTab;
  return (
    <button
      onClick={() => onClick(value)}
      className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition ${
        active
          ? 'border-base-primary text-base-text font-medium'
          : 'border-transparent text-base-muted hover:text-base-text'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

// Card de Resultado (genérico)
const SearchResultCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="p-4 rounded border border-base-border bg-base-surface shadow-sm hover:shadow transition">
      <h3 className="text-base font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-base-muted mt-1">{subtitle}</p>}
    </div>
  );
};

export const SidebarFilters = ({ activeTab }: { activeTab: string }) => {
  // estados internos para controlar filtros (só para demo)
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [tipo, setTipo] = useState('');
  const [donoPost, setDonoPost] = useState('');
  const [somenteSeguidos, setSomenteSeguidos] = useState(false);
  const [mostrarNSFW, setMostrarNSFW] = useState(false);
  const [conteudoTipo, setConteudoTipo] = useState('');
  const [ordenarPor, setOrdenarPor] = useState('relevancia');

  return (
    <aside className="w-full lg:w-64 border border-base-border bg-base-surface rounded p-4 space-y-6">
      <h2 className="text-sm font-medium uppercase tracking-wide text-base-muted">
        Filtros
      </h2>

      {/* Intervalo de datas */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Data (de)</label>
        <input
          type="date"
          className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <label className="text-sm font-medium">Data (até)</label>
        <input
          type="date"
          className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>

      {/* Tipo (Geral) */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Tipo</label>
        <select
          className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
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

      {/* Dono da Postagem (apenas aba fórum) */}
      {activeTab === 'forum' && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Dono da Postagem</label>
          <input
            type="text"
            placeholder="Nome de usuário"
            className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
            value={donoPost}
            onChange={(e) => setDonoPost(e.target.value)}
          />
        </div>
      )}

      {/* Somente Fóruns Seguidos */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="filtros-seguidos"
          checked={somenteSeguidos}
          onChange={() => setSomenteSeguidos((v) => !v)}
          className="w-4 h-4 text-base-primary border-base-border rounded"
        />
        <label
          htmlFor="filtros-seguidos"
          className="text-sm cursor-pointer select-none"
        >
          Mostrar somente fóruns seguidos
        </label>
      </div>

      {/* Mostrar NSFW */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="filtros-nsfw"
          checked={mostrarNSFW}
          onChange={() => setMostrarNSFW((v) => !v)}
          className="w-4 h-4 text-base-primary border-base-border rounded"
        />
        <label
          htmlFor="filtros-nsfw"
          className="text-sm cursor-pointer select-none"
        >
          Mostrar conteúdo NSFW
        </label>
      </div>

      {/* Tipo de conteúdo */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Tipo de conteúdo</label>
        <select
          className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
          value={conteudoTipo}
          onChange={(e) => setConteudoTipo(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="texto">Texto</option>
          <option value="imagem">Imagem</option>
          <option value="link">Link</option>
        </select>
      </div>

      {/* Ordenar por */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Ordenar por</label>
        <select
          className="w-full px-3 py-2 rounded border border-base-border bg-base-bg text-sm"
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
