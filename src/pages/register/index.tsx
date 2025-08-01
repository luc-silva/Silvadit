import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';

const steps = ['Credenciais', 'Identidade', 'Imagens', 'Interesses'];

export function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    avatar: null as File | null,
    banner: null as File | null,
    interests: [] as string[],
    country: '',
    city: '',
    language: '',
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: 'avatar' | 'banner', file: File | null) => {
    handleChange(field, file);
  };

  const goNext = () => step < steps.length - 1 && setStep((prev) => prev + 1);
  const goBack = () => step > 0 && setStep((prev) => prev - 1);

  return (
    <div className="flex items-center h-screen">
      <div className="w-xl mx-auto px-4 py-10 space-y-6 text-base-content h-3/5">
        {/* Etapas visuais */}
        <div className="flex justify-between mb-6">
          {steps.map((label, idx) => (
            <div
              key={idx}
              className={`flex-1 text-center py-2 px-2 border-b-2 font-medium
                ${
                  idx === step
                    ? 'border-primary text-primary'
                    : idx < step
                    ? 'border-success text-success'
                    : 'border-base-300 text-base-content/50'
                }
              `}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Conteúdo da etapa */}
        <div className="space-y-6">
          {step === 0 && (
            <div className="space-y-4 flex flex-col gap-4">
              <TextField
                label="Email"
                fullWidth
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <TextField
                label="Confirmar Email"
                fullWidth
                value={form.confirmEmail}
                onChange={(e) => handleChange('confirmEmail', e.target.value)}
              />
              <TextField
                type="password"
                label="Senha"
                fullWidth
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
              <TextField
                type="password"
                label="Confirmar Senha"
                fullWidth
                value={form.confirmPassword}
                onChange={(e) =>
                  handleChange('confirmPassword', e.target.value)
                }
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              {/* Grupo: Identidade */}
              <div>
                <h2 className="text-base font-semibold mb-2">
                  Informações Pessoais
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="Nome"
                    fullWidth
                    value={form.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                  />
                  <TextField
                    label="Sobrenome"
                    fullWidth
                    value={form.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                  />
                  <TextField
                    label="Nome de Usuário"
                    fullWidth
                    value={form.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    className="sm:col-span-2"
                  />
                </div>
              </div>

              {/* Grupo: Localização */}
              <div>
                <h2 className="text-base font-semibold mb-2">Localização</h2>
                <p className="text-sm text-base-content/60 mb-4">
                  Esses dados são usados apenas para sugestões de conteúdo e
                  exibição.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="País"
                    fullWidth
                    value={form.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                  />
                  <TextField
                    label="Cidade"
                    fullWidth
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                  />
                  <TextField
                    label="Idioma Preferido"
                    fullWidth
                    value={form.language}
                    onChange={(e) => handleChange('language', e.target.value)}
                    className="sm:col-span-2"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Avatar */}
              <div>
                <label className="block font-medium mb-1">
                  Foto de perfil (opcional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange('avatar', e.target.files?.[0] || null)
                  }
                />
                {form.avatar && (
                  <img
                    src={URL.createObjectURL(form.avatar)}
                    alt="Preview"
                    className="mt-2 w-20 h-20 object-cover rounded-full border"
                  />
                )}
              </div>

              {/* Banner */}
              <div>
                <label className="block font-medium mb-1">
                  Banner (opcional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange('banner', e.target.files?.[0] || null)
                  }
                />
                {form.banner && (
                  <img
                    src={URL.createObjectURL(form.banner)}
                    alt="Banner Preview"
                    className="mt-2 h-32 w-full object-cover rounded-lg border"
                  />
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <label className="block font-medium mb-2">
                Tags de Interesse (opcional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Arte',
                  'Tecnologia',
                  'Filosofia',
                  'Ciência',
                  'Filmes',
                  'Livros',
                  'Música',
                  'Jogos',
                ].map((tag) => (
                  <FormControlLabel
                    key={tag}
                    control={
                      <Checkbox
                        checked={form.interests.includes(tag)}
                        onChange={(e) =>
                          handleChange(
                            'interests',
                            e.target.checked
                              ? [...form.interests, tag]
                              : form.interests.filter((t) => t !== tag),
                          )
                        }
                      />
                    }
                    label={tag}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navegação */}
        <div className="flex justify-between pt-6">
          <button
            onClick={goBack}
            className="btn btn-outline"
            disabled={step === 0}
          >
            Voltar
          </button>
          {step < steps.length - 1 ? (
            <button onClick={goNext} className="btn btn-primary">
              Próximo
            </button>
          ) : (
            <button className="btn btn-success">Finalizar Cadastro</button>
          )}
        </div>
      </div>
    </div>
  );
}
