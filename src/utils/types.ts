type InitialReactions = {
  thumbsUp: number;
  thumbsDown: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export type FormattedPost = {
  id: string;
  date: string;
  dateTitle: string;
  description: string;
  nameRU: string;
  user: string;
  reactions: InitialReactions;
};

export type Post = {
  id: string;
  [index: string]: any;
};

export type TFakeApiHeaders = {
  "Content-Type": string;
};

export type TFakeApi = {
  baseUrl: string;
  headers: TFakeApiHeaders;
};