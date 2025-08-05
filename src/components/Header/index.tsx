import { useLocation } from 'react-router-dom';
import {
  MagnifyingGlass,
  ChatTeardropDots,
  Gear,
  SignOut,
  User,
} from '@phosphor-icons/react';
import { useMemo, useState, useRef, useEffect } from 'react';

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
    <header className="bg-surface text-text border-b border-border px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 select-none">
          <div className="w-8 h-8 rounded-md bg-primary text-white font-bold flex items-center justify-center text-base shadow-sm">
            S
          </div>
          <span className="text-xl font-semibold text-text tracking-tight leading-none">
            Silva<span className="text-primary">Dit</span>
          </span>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center border border-border bg-bg rounded-md overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-primary transition">
            <input
              type="text"
              placeholder="Buscar threads..."
              className="w-full px-4 py-2 bg-surface text-sm outline-none"
            />
            <button className="px-3 hover:text-text transition">
              <MagnifyingGlass size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 relative" ref={menuRef}>
          <button className="text-text hover:text-text transition">
            <ChatTeardropDots size={20} />
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full overflow-hidden border border-border hover:ring-2 ring-primary transition"
          >
            <img
              src={'avatarPlaceholder'}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-bg border border-border shadow-lg rounded-md py-2 z-50 text-sm">
              <MenuItem icon={<User size={16} />} label="Perfil" />
              <MenuItem
                icon={<ChatTeardropDots size={16} />}
                label="Mensagens"
              />
              <MenuItem icon={<Gear size={16} />} label="Configurações" />
              <div className="border-t border-border my-2" />
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
      className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-border/10 transition ${
        danger ? 'text-red-500 hover:text-red-600' : 'text-text'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
