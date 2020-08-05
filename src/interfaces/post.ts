import { User } from './user';

export interface Post {
  _id: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  liked: boolean;
  createdAt: Date;
}

export interface PostForCreate {
  content: string;
}
