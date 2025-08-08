import { UploadSimple } from '@phosphor-icons/react';

import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Trash, UsersThree, SignOut } from '@phosphor-icons/react';

export default function ForumEditPage() {
  const [showKickAllModal, setShowKickAllModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8 text-text bg-surface border-x border-border">
      {/* Título */}
      <h1 className="text-2xl font-semibold tracking-tight text-title">
        Editar Fórum
      </h1>

      {/* Informações Básicas */}
      <section className="bg-surface rounded-xl p-6 border border-border space-y-4 flex flex-col gap-4">
        <TextField
          label="Nome do Fórum"
          defaultValue="Nome atual do fórum"
          variant="outlined"
          fullWidth
          size="small"
          slotProps={textFieldInputSlot}
        />
        <TextField
          label="Descrição"
          defaultValue="Descrição atual do fórum"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows={3}
          slotProps={textFieldInputSlot}
        />
      </section>

      {/* Configurações */}
      <section className="bg-surface rounded-xl p-6 border border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-subtitle">
        <FormControlLabel
          control={<Checkbox defaultChecked size="small" />}
          label="Conteúdo sensível (NSFW)"
          sx={{ color: 'var(--color-text)' }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Visível apenas para seguidores"
          sx={{ color: 'var(--color-text)' }}
        />
      </section>

      {/* Uploads */}
      <section className="bg-surface rounded-xl p-6 border border-border space-y-6">
        <UploadBlock label="Alterar Foto do Fórum (opcional)" type="foto" />
        <UploadBlock label="Alterar Banner do Fórum (opcional)" type="banner" />
      </section>

      {/* Ações administrativas */}
      <section className="bg-danger-bg rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-medium text-danger-title">
          Ações Administrativas
        </h2>

        <div className="text-sm text-danger-subtitle space-y-2">
          <p>
            Para promover membros ou expulsar usuários específicos, use a aba{' '}
            <strong className="text-danger-text font-medium">"Membros"</strong>{' '}
            na tela do fórum.
          </p>
          <p>Essas ações são sensíveis e não podem ser desfeitas.</p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => setShowKickAllModal(true)}
            className="w-full px-4 py-2 bg-danger-bg/50  text-danger-text rounded-md text-sm font-medium border border-danger-text"
          >
            <UsersThree size={18} className="inline-block mr-2" />
            Expulsar todos os membros
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="w-full px-4 py-2 bg-danger-bg/50  text-danger-text rounded-md text-sm font-medium border border-danger-text"
          >
            <Trash size={18} className="inline-block mr-2" />
            Deletar fórum
          </button>
          <button
            onClick={() => setShowLeaveModal(true)}
            className="w-full px-4 py-2 bg-danger-bg/50  text-danger-text rounded-md text-sm font-medium border border-danger-text"
          >
            <SignOut size={18} className="inline-block mr-2" />
            Sair do fórum e transferir administração
          </button>
        </div>
      </section>

      {/* Botão Salvar */}
      <div className="pt-2">
        <button className="px-6 py-3 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
          Salvar Alterações
        </button>
      </div>

      {/* Modais com o novo componente */}
      <Modal
        isOpen={showKickAllModal}
        onClose={() => setShowKickAllModal(false)}
        title="Expulsar todos os membros?"
        subtitle="Tem certeza que deseja expulsar todos os membros do fórum? Esta ação não pode ser desfeita."
      >
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setShowKickAllModal(false)}
            className="px-4 py-2 rounded-md bg-border text-text text-sm"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setShowKickAllModal(false);
              // lógica de expulsão
            }}
            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-warning-title/90"
          >
            Expulsar
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Deletar Fórum"
        subtitle="Tem certeza que deseja deletar este fórum? Esta ação é permanente e não pode ser desfeita."
      >
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-4 py-2 rounded-md bg-border text-text text-sm"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setShowDeleteModal(false);
              // lógica de deletar
            }}
            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-warning-title/90"
          >
            Deletar
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={showLeaveModal}
        onClose={() => setShowLeaveModal(false)}
        title="Sair do Fórum e Transferir Administração"
        subtitle="Você será removido do fórum. Um novo usuário será promovido automaticamente como administrador (definido pelo backend). Enquanto estiver fora, você não terá controle sobre as ações da nova administração."
      >
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setShowLeaveModal(false)}
            className="px-4 py-2 rounded-md bg-border text-text text-sm"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setShowLeaveModal(false);
              // lógica de sair e promover outro admin
            }}
            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-warning-title/90"
          >
            Sair e transferir
          </button>
        </div>
      </Modal>
    </div>
  );
}

function UploadBlock({
  label,
  type,
}: {
  label: string;
  type: 'foto' | 'banner';
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const dimensions = type === 'foto' ? 'h-40 w-40' : 'h-32 w-full';

  const imageClasses =
    type === 'foto'
      ? 'object-cover w-full h-full rounded-full'
      : 'object-cover w-full h-full rounded-md';

  return (
    <div className="space-y-2">
      <p className="text-sm text-subtitle/80">{label}</p>
      <label
        className={`relative flex items-center justify-center border-2 border-dashed border-border rounded-lg cursor-pointer bg-bg hover:bg-bg/20 transition overflow-hidden ${dimensions}`}
      >
        {preview ? (
          <img src={preview} alt="Preview" className={imageClasses} />
        ) : (
          <div className="flex flex-col items-center text-text/60">
            <UploadSimple size={28} />
            <span className="mt-2 text-sm text-text/70 text-center">
              Clique para enviar arquivo
            </span>
          </div>
        )}
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}

import { X } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import { textFieldInputSlot } from '~/components/Input/const';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info';
};

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  variant = 'default',
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora do conteúdo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        event.target instanceof Node &&
        overlayRef.current === event.target
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  const variantClasses =
    variant === 'default'
      ? 'bg-surface text-text'
      : `bg-${variant} text-${variant}-text`;

  const titleColor =
    variant === 'default' ? 'text-title' : `text-${variant}-title`;

  const subtitleColor =
    variant === 'default' ? 'text-subtitle' : `text-${variant}-subtitle`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
    >
      <div
        className={`relative max-w-md w-full rounded-lg shadow-xl p-6 ${variantClasses}`}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-text hover:text-title transition"
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {/* Título */}
        {title && (
          <h2 className={`text-lg font-semibold mb-1 ${titleColor}`}>
            {title}
          </h2>
        )}

        {/* Subtítulo */}
        {subtitle && (
          <p className={`text-sm mb-4 ${subtitleColor}`}>{subtitle}</p>
        )}

        {/* Conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  );
}
