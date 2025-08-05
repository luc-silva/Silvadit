import { ChangeEvent, useState } from 'react';
import { loginUser } from '~/service/user';

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

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const loadLogin = async () => {
    setIsLoginLoading(true);
    return await loginUser({ login, password });
  };

  return {
    login,
    password,
    handleLogin,
    handlePassword,
    loadLogin,
    isLoginLoading,
  };
};
