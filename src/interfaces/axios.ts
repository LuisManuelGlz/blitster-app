export interface ServerData {
  tokenType: string;
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}
