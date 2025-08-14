interface IFeed {
  postId: string;
  owner: {
    userId: string;
    username: string;
  };
  forum: {
    title: string;
    id: string;
  } | null;
  content: string;
  title: string;
  isNsfw: boolean;
  dateCreated: Date;
  dateEdited: Date | null;
}
