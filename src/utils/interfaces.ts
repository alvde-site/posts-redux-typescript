import { TPost } from "./types";

export interface PostsState {
  posts: TPost[];
  status: string;
  error: string | undefined;
}
