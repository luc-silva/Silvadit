import { ChangeEvent, useState } from 'react';
import { useAppFeatures } from '~/context/appWrapper';
import { loginUser } from '~/service/user';

export const useLoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { session, setSession } = useAppFeatures();

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

  const saveSessionOnLocal = (data: ISession) => {
    const parsed = JSON.stringify(data);
    window.localStorage.setItem('session', parsed);
  };

  const retriveSessionFromLocal = (): ISession | null => {
    const retrievedSession = window.localStorage.getItem('session');
    if (retrievedSession) {
      const parsed: ISession = JSON.parse(retrievedSession);

      return parsed;
    }

    return null;
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
