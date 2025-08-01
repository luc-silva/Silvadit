import { useLocation } from 'react-router-dom';
import {
  MagnifyingGlass,
  ChatTeardropDots,
  Gear,
  SignOut,
  User,
} from '@phosphor-icons/react';
import { useMemo, useState, useRef, useEffect } from 'react';
import { Logo } from '../Logo';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const disableHeader = useMemo(() => {
    const excludedPaths = ['/', '/login', '/register'];
    return excludedPaths.includes(location.pathname);
  }, [location]);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (disableHeader) return null;

  return (
    <header className="bg-base-surface text-base-text border-b border-base-border px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold">SilvaDit</span>
        </div>

        {/* Busca */}
        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center border border-base-border bg-base-bg rounded-md overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-base-primary transition">
            <input
              type="text"
              placeholder="Buscar threads..."
              className="w-full px-4 py-2 bg-transparent text-sm outline-none"
            />
            <button className="px-3 text-base-muted hover:text-base-text transition">
              <MagnifyingGlass size={20} />
            </button>
          </div>
        </div>

        {/* Área do usuário */}
        <div className="flex items-center gap-4 relative" ref={menuRef}>
          {/* Mensagens */}
          <button className="text-base-muted hover:text-base-text transition">
            <ChatTeardropDots size={20} />
          </button>

          {/* Avatar */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full overflow-hidden border border-base-border hover:ring-2 ring-base-primary transition"
          >
            <img
              src={"avatarPlaceholder"}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-base-bg border border-base-border shadow-lg rounded-md py-2 z-50 text-sm">
              <MenuItem icon={<User size={16} />} label="Perfil" />
              <MenuItem
                icon={<ChatTeardropDots size={16} />}
                label="Mensagens"
              />
              <MenuItem icon={<Gear size={16} />} label="Configurações" />
              <div className="border-t border-base-border my-2" />
              <MenuItem icon={<SignOut size={16} />} label="Sair" danger />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

function MenuItem({
  icon,
  label,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-base-border/10 transition ${
        danger ? 'text-red-500 hover:text-red-600' : 'text-base-text'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
