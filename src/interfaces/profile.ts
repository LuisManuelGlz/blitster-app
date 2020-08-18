import { User } from './user';

export interface Profile {
  _id: string;
  user: User;
  bio: string;
}
