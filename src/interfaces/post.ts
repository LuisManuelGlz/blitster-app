export interface User {
  userId: string;
  fullName: string;
  username: string;
  avatar: string;
}

export interface Post {
  postId: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  createdAt: Date;
}
