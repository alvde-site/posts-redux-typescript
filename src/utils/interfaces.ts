import { TPost } from "./types";

export interface IPostsState {
  posts: TPost[];
  status: string;
  error: string | undefined;
}
