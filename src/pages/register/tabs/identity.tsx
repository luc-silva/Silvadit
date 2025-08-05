import { TextField } from '@mui/material';
import { useRegisterContext } from '../context';

export const IdentityTab = () => {
  const {
    firstName,
    lastName,
    username,
    country,
    state,
    language,
    handleFirstName,
    handleLastName,
    handleUsername,
    handleCountry,
    handleState,
    handleLanguage,
  } = useRegisterContext();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-semibold mb-2 text-subtitle">
          Informações Pessoais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text">
          <TextField
            label="Nome"
            fullWidth
            value={firstName}
            onChange={handleFirstName}
          />
          <TextField
            label="Sobrenome"
            fullWidth
            value={lastName}
            onChange={handleLastName}
          />
          <TextField
            label="Nome de Usuário"
            fullWidth
            value={username}
            onChange={handleUsername}
            className="sm:col-span-2"
          />
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-2 text-subtitle">Localização</h2>
        <p className="text-sm text-text mb-4">
          Esses dados são usados apenas para sugestões de conteúdo e exibição.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="País"
            fullWidth
            value={country}
            onChange={handleCountry}
          />
          <TextField
            label="Cidade"
            fullWidth
            value={state}
            onChange={handleState}
          />
          <TextField
            label="Idioma Preferido"
            fullWidth
            value={language}
            onChange={handleLanguage}
            className="sm:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};
