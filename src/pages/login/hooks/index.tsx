import { ChangeEvent, useState } from 'react';

export const useLoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setLogin(target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setPassword(target.value);
  };

  return { login, password, handleLogin, handlePassword };
};
