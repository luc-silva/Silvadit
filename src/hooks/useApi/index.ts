import axios, { CreateAxiosDefaults } from 'axios';
import { useMemo } from 'react';

export type IHookWithAuth = { user: unknown };

export const useApi = (props?: IHookWithAuth) => {
  const securedApi = useMemo(() => {
    if (!props) return;

    const config: CreateAxiosDefaults = {
      baseURL:
        import.meta.env.VITE_BACKEND_BASE_URL ||
        `http://localhost:${import.meta.env.VITE_BACKEND_BASE_PORT || 9090}`,
      headers: {
        Authorization: `Bearer 1233`,
      },
    };

    return axios.create(config);
  }, [props]);

  const api = useMemo(() => {
    const config: CreateAxiosDefaults = {
      baseURL:
        import.meta.env.VITE_BACKEND_BASE_URL ||
        `http://localhost:${import.meta.env.VITE_BACKEND_BASE_PORT || 9090}`,
    };

    return axios.create(config);
  }, []);

  return { securedApi, api };
};
