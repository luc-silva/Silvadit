import { useEffect, useState } from 'react';
import { useToast } from '../useToast';

export const useApp = () => {
  const [session, setSession] = useState<ISession | null>(null);

  const handleLogout = () => {
    setSession(null);
    window.localStorage.removeItem('session');
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

  useEffect(() => {
    const session = retriveSessionFromLocal();
    if (session) {
      setSession(session);
    }
  }, []);

  return {
    ...useToast(),
    session,
    setSession,
    handleLogout,
    saveSessionOnLocal,
    retriveSessionFromLocal,
  };
};
