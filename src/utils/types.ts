export type TInitialAuth = {
  loggedIn: boolean;
  userId: null | string;
}

type TInitialReactions = {
  thumbsUp: {count: number, likes: string[]};
  thumbsDown: {count: number, likes: string[]};
  hooray: {count: number, likes: string[]};
  heart: {count: number, likes: string[]};
  rocket: {count: number, likes: string[]};
  eyes: {count: number, likes: string[]};
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
  director?: string;
};
