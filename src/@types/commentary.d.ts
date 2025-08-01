interface ICommentary {
  author: string;
  content: string;
  createdAt: Date;
  id: number;
  likes: number;
  replies: ICommentary[];
  replies_total: number;
}
