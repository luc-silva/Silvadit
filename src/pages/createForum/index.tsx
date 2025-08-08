import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { UploadSimple } from '@phosphor-icons/react';
import { textFieldInputSlot } from '~/components/Input/const';

export default function ForumCreatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8 text-text bg-surface border-x border-border">
      {/* Título */}
      <h1 className="text-2xl font-semibold tracking-tight text-title">
        Criar Novo Fórum
      </h1>

      {/* Nome e descrição */}
      <section className="bg-surface rounded-xl p-6 border border-border space-y-4 flex flex-col gap-4">
        <TextField
          label="Nome do Fórum"
          variant="outlined"
          fullWidth
          size="small"
          slotProps={textFieldInputSlot}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows={3}
          slotProps={textFieldInputSlot}
        />
      </section>

      {/* Opções */}
      <section className="bg-surface rounded-xl p-6 border border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-subtitle">
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Conteúdo sensível (NSFW)"
          sx={{ color: 'var(--color-text)', fontSize: 'var(--text-2xl)' }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Visível apenas para seguidores"
          sx={{ color: 'var(--color-text)', fontSize: 'var(--text-2xl)' }}
        />
      </section>

      {/* Uploads */}
      <section className="bg-surface rounded-xl p-6 border border-border space-y-6">
        <UploadBlock label="Foto do Fórum (opcional)" type="foto" />
        <UploadBlock label="Banner do Fórum (opcional)" type="banner" />
      </section>

      {/* Botão de ação */}
      <div className="pt-2">
        <button className="px-6 py-3 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
          Criar Fórum
        </button>
      </div>
    </div>
  );
}

// 🧩 UploadBlock com tipo e preview responsivo
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

  const dimensions =
    type === 'foto'
      ? 'h-40 w-40' // quadrado
      : 'h-32 w-full'; // banner mais largo

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
