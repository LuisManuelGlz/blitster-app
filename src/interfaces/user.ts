import { Profile } from './profile';

export interface UserForLogin {
  username: string;
  password: string;
}

export interface UserForSignup {
  fullName: string;
  email: string;
  username: string;
  password1: string;
  password2: string;
}

export interface User {
  _id: string;
  fullName: string;
  username: string;
  avatar: string;
  profile: Profile;
}
