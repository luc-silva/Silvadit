interface ICommentary {
  id: string;
  post: {
    id: string;
    title: string;
  };
  user: { id: string; username: string } | null;
  content: string;
  replyId?: string;
  dateCreated: Date;
  dateEdited: Date | null;
  likes: number;
  replies: ICommentary[];
  repliesTotal: number;
}

interface ISubmitCommentary {
  content: string;
  postId: string;
  replyId?: string;
}
