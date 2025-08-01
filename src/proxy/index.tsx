export const routes = {
  user: {
    base: '/user',
    login: '/user/login',
    delete: '/user',
    listUsers: '/users/',
    userDetails: (id: string) => `/user/${id}`,
    listUserFriends: (id: string) => `/user/${id}/friends`,
    listUserForums: (id: string) => `/user/${id}/forums`,
  },
};
