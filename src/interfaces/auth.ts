export interface Auth {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

interface Decoded {
  username: string | null;
  role: string | null;
  isVerified: boolean | null;
}

export interface DecodedTokenPayload extends Decoded {
  _id: string;
}

export interface DecodedToken extends Decoded {
  userId: string | null;
}
