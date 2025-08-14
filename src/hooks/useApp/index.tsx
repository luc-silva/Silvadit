import { useState } from 'react';
import { useToast } from '../useToast';

export const useApp = () => {
  const [session, setSession] = useState<ISession | null>(null);

  return {
    ...useToast(),
    session,
    setSession,
  };
};
