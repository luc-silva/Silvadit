import { createContext, PropsWithChildren, useContext } from 'react';
import { useRegister } from '../hooks';

export const RegisterContext = createContext(
  {} as ReturnType<typeof useRegister>,
);

export const RegisterProvider = ({ children }: PropsWithChildren) => {
  const config = useRegister();
  return (
    <RegisterContext.Provider value={config}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
