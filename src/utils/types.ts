export type TInitialAuth = {
  loggedIn: boolean;
  userId: null | string;
}

type TInitialReactions = {
  thumbsUp: {count: number, users: string[]};
  thumbsDown: {count: number, users: string[]};
  hooray: {count: number, users: string[]};
  heart: {count: number, users: string[]};
  rocket: {count: number, users: string[]};
  eyes: {count: number, users: string[]};
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
