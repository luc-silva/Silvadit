export const routes = {
  user: {
    base: '/user',
    listUsers: '/users/',
    userDetails: (id: string) => `/user/${id}`,
    listUserFriends: (id: string) => `/user/${id}/friends`,
    listUserForums: (id: string) => `/user/${id}/forums`,
  },
  auth: {
    base: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    update: '/update',
    delete: '/auth/delete',
  },
};
