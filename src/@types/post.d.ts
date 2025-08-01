interface IPost {
    title: string;
    content: string;
    likes: number;
    dislikes: number;
    comentaries: number;
    communityId: string;
    comunityName: string;
    userId: string;
    userName: string;
    postedAt: Date;
}

interface ILessDetailedPost {
    title: string;
    commentaries: number;
    upvotes: number;
    forum_id: string;
    forum_name: string;
}

interface ILessDetailedUser {
    username: string;
    followers: number;
    posts: number;
}

interface ILessDetailedForum {
    name: string;
    followers: number;
}
