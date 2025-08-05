import { TextField } from '@mui/material';
import { useRegisterContext } from '../context';

export const BasicInfoTab = () => {
  const {
    email,
    confirmEmail,
    password,
    confirmPassword,
    handleEmail,
    handleConfirmEmail,
    handlePassword,
    handleConfirmPassword,
  } = useRegisterContext();
  return (
    <div className="space-y-4 flex flex-col gap-4 text-text pt-[8px]">
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={handleEmail}
        className='bg-bg text-text border border-border rounded-2xl'
      />
      <TextField
        label="Confirmar Email"
        fullWidth
        value={confirmEmail}
        onChange={handleConfirmEmail}
      />
      <TextField
        type="password"
        label="Senha"
        fullWidth
        value={password}
        onChange={handlePassword}
      />
      <TextField
        type="password"
        label="Confirmar Senha"
        fullWidth
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
    </div>
  );
};
