import { useState } from 'react';
import { TextField, Button as MUIButton } from '@mui/material';

export function UserSettingsPage() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    bio: '',
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8 text-base-content">
      {/* Banner */}
      <div className="relative h-40 w-full rounded-lg overflow-hidden bg-base-300">
        <img
          src="/banner-placeholder.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="btn btn-sm btn-outline">Alterar Banner</button>
        </div>
      </div>

      {/* Avatar e Formulário */}
      <div className="bg-base-200 border border-base-300 rounded-lg p-6 space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-base-300"></div>
          <button className="btn btn-sm btn-outline">Alterar Foto</button>
        </div>

        {/* Formulário */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="Nome"
            variant="outlined"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            fullWidth
          />
          <TextField
            label="Username"
            variant="outlined"
            value={form.username}
            onChange={(e) => handleChange('username', e.target.value)}
            fullWidth
          />
        </div>

        <TextField
          label="Biografia"
          variant="outlined"
          value={form.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          multiline
          rows={3}
          fullWidth
        />

        <div className="flex justify-end">
          <button className="btn btn-primary">Salvar Alterações</button>
        </div>
      </div>

      {/* Seção de exclusão */}
      <div className="bg-red-100 border border-red-300 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-red-700 mb-2">
          Deletar conta
        </h2>
        <p className="text-sm text-red-600 mb-4">
          Essa ação é irreversível. Todos os seus dados e postagens serão
          permanentemente removidos.
        </p>
        <button
          className="btn btn-outline btn-error"
          onClick={() => setShowDeleteModal(true)}
        >
          Deletar minha conta
        </button>
      </div>

      {/* Modal de confirmação */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-base-100 rounded-lg p-6 w-full max-w-sm space-y-4 border border-base-300 shadow-xl">
            <h3 className="text-lg font-semibold text-red-600">Tem certeza?</h3>
            <p className="text-sm text-base-content/70">
              Essa ação não pode ser desfeita. Deseja mesmo excluir sua conta?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-sm"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancelar
              </button>
              <button className="btn btn-sm btn-error">
                Confirmar exclusão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
