export interface Post {
  postId: string;
  user: any;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  createdAt: Date;
}
