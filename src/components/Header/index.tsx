import { useLocation, useNavigate } from 'react-router-dom';
import {
  GearIcon,
  SignOutIcon,
  UserIcon,
  PlusIcon,
  SunIcon,
  MagnifyingGlassIcon,
  ChatTeardropDotsIcon,
} from '@phosphor-icons/react';
import { useMemo, useState, useRef, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { useAppFeatures } from '~/context/appWrapper';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { session, handleLogout } = useAppFeatures();
  const navigate = useNavigate();

  const disableHeader = useMemo(() => {
    const excludedPaths = ['/', '/login', '/register'];
    return excludedPaths.includes(location.pathname);
  }, [location]);

  const changeTheme = () => {
    const body = document.getElementById('app-body');
    if (body) {
      const isDark = body.classList.contains('dark');

      if (isDark) body.classList.replace('dark', 'light');
      if (!isDark) body.classList.replace('light', 'dark');
    }
  };

  const handleRedirectToProfile = () => {
    if (session) {
      navigate(`/user/${session.id}`);
      setIsMenuOpen(false);
    }
  };

  const handleRedirectToCreateForum = () => {
    if (session) {
      navigate(`/forum/create`);
      setIsMenuOpen(false);
    }
  };

  const handleRedirectToSettings = () => {
    if (session) {
      navigate(`/settings`);
      setIsMenuOpen(false);
    }
  };

  const handleRedirectToLogin = () => {
    if (session) {
      navigate(`/login`);
      setIsMenuOpen(false);
    }
  };

  const handleRedirectToRegister = () => {
    if (session) {
      navigate(`/register`);
      setIsMenuOpen(false);
    }
  };

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
    <header className="bg-surface border-b border-border px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center text-base shadow">
            S
          </div>
          <span className="text-xl font-semibold text-subtitle tracking-tight">
            Silva<span className="text-primary">Dit</span>
          </span>
        </div>

        <div className="flex-1 mx-6 max-w-lg text-text border border-border  rounded-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar threads..."
              className="w-full px-4 py-2 pr-10  rounded-full bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <MagnifyingGlassIcon
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text"
            />
          </div>
        </div>

        {!session && (
          <div className="flex items-center gap-4 relative">
            <button
              className="flex items-center justify-center gap-2 w-fit px-3 py-2 bg-primary text-surface rounded-md text-sm hover:bg-primary/90 transition"
              onClick={handleRedirectToRegister}
            >
              Criar Contar
            </button>
            <button
              className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-surface text-primary rounded-md text-sm hover:bg-surface/90 transition border border-primary"
              onClick={handleRedirectToLogin}
            >
              Logar
            </button>
          </div>
        )}

        {session && (
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            <button className="text-text hover:text-subtitle transition">
              <ChatTeardropDotsIcon size={20} />
            </button>

            <button
              className="text-text hover:text-subtitle transition"
              onClick={changeTheme}
            >
              <SunIcon size={20} />
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-full overflow-hidden border border-border hover:ring-2 ring-primary transition"
            >
              {true ? (
                <Avatar
                  sx={{
                    width: 'calc(var(--spacing) * 9)',
                    height: 'calc(var(--spacing) * 9)',
                  }}
                />
              ) : (
                <img
                  src={'avatarPlaceholder'}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              )}
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-52 bg-surface border border-border shadow-md rounded-lg  z-50 text-sm">
                <div className="px-2 pb-2 mt-2">
                  <button
                    className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-primary text-surface rounded-md text-sm hover:bg-primary/90 transition"
                    onClick={handleRedirectToCreateForum}
                  >
                    <PlusIcon size={16} />
                    Criar fórum
                  </button>
                </div>

                <MenuItem
                  icon={<UserIcon size={16} />}
                  label="Perfil"
                  onClick={handleRedirectToProfile}
                />
                <MenuItem
                  icon={<ChatTeardropDotsIcon size={16} />}
                  label="Mensagens"
                />
                <MenuItem
                  icon={<GearIcon size={16} />}
                  label="Configurações"
                  onClick={handleRedirectToSettings}
                />
                <div className="border-t border-border" />
                <MenuItem
                  icon={<SignOutIcon size={16} />}
                  label="Sair"
                  danger
                  onClick={handleLogout}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

function MenuItem({
  icon,
  label,
  danger = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-bg transition ${
        danger ? 'text-danger-primary hover:bg-danger-primary/20' : 'text-text'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
