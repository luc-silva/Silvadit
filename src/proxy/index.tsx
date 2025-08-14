export const routes = {
  user: {
    base: '/user',
    listUsers: '/users/',
    getUserDetails: (id: string) => `/user/${id}`,
    getUserFollowedForums: (id: string) => `/user/${id}/following/forums`,
    getUserFollowedUsers: (id: string) => `/user/${id}/following/friends`,
    getUserFollowers: (id: string) => `/user/${id}/forums`,
  },
  auth: {
    base: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    update: '/update',
    delete: '/auth/delete',
  },
  home: {
    createPost: 'home/post',
    feed: 'home',
  },
};
