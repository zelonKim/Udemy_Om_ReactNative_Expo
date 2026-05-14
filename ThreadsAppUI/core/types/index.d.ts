type ThreadCardProps = {
  item: {
    id: string;
  };
  user: {
    username: string;
    name: string;
    profilePicture: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  reposts: number;
  shares: number;
};
