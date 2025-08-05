import axios, { CreateAxiosDefaults } from 'axios';

const securedApiConfig: CreateAxiosDefaults = {
  baseURL:
    import.meta.env.VITE_BACKEND_API ||
    `http://localhost:${import.meta.env.VITE_BACKEND_BASE_PORT || 9090}`,
  headers: {
    Authorization: `Bearer 1233`,
  },
};
const securedApi = axios.create(securedApiConfig);

const config: CreateAxiosDefaults = {
  baseURL:
    import.meta.env.VITE_BACKEND_API ||
    `http://localhost:${import.meta.env.VITE_BACKEND_BASE_PORT || 9090}`,
};

const api = axios.create(config);

export { api, securedApi };
