import { createContext, PropsWithChildren, useContext } from "react";
import { useApp } from "../../hooks/useApp";

export const AppContext = createContext({} as ReturnType<typeof useApp>);

export const AppContextWrapper = ({ children }: PropsWithChildren) => {
    const config = useApp();
    return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};

export const useAppFeatures = () => useContext(AppContext);
