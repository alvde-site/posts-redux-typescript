type TInitialReactions = {
  thumbsUp: number;
  thumbsDown: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export type TFormattedPost = {
  id: string;
  date: string;
  dateTitle: string;
  description: string;
  nameRU: string;
  user: string;
  reactions: TInitialReactions;
};

export type TPost = {
  id: string;
  description: string;
  nameRU: string;
  [index: string]: any;
};

export type TFakeApiHeaders = {
  "Content-Type": string;
};

export type TFakeApi = {
  baseUrl: string;
  headers: TFakeApiHeaders;
};

export type TAuthorPostTimeProps = {
  userId?: string;
  timestamp: string;
  dateTitle: string;
};
