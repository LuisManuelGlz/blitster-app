export interface ServerData {
  tokenType: string;
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface BadRequestError {
  msg: string;
  param: string;
}
