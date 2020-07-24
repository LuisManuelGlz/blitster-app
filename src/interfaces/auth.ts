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
  iat: number;
  exp: number;
}

export interface DecodedToken extends Decoded {
  userId: string | null;
}
