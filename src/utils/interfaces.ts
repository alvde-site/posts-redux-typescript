import { Post } from "./types";

export interface PostsState {
  posts: Post[];
  status: string;
  error: string | undefined;
}
