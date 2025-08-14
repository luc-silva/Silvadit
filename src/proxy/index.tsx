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
    base: 'home',
    createPost: 'home/post',
    feed: 'home',
    following: 'home/following',
    trending: 'home/trending',
  },
  post: {
    base: 'post',
    commentary: 'post/commentary',
    getCommentaries: (id: string) => `/post/${id}/commentaries`,
  },
  commentary: {
    base: 'commentary',
    getReplies: (id: string) => `/commentary/${id}/replies`,
  },
};
