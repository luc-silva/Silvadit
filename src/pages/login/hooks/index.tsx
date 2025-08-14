import { ChangeEvent, useState } from 'react';
import { useAppFeatures } from '~/context/appWrapper';
import { loginUser } from '~/service/user';

export const useLoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setSession, saveSessionOnLocal } = useAppFeatures();

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
    return await loginUser({ login, password }).then(({ data }) => {
      setSession(data);
      saveSessionOnLocal(data);
    });
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
