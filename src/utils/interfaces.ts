import { TPost } from "./types";

export interface IPostsState {
  initialPosts: TPost[],
  posts: TPost[];
  status: string;
  error: string | undefined;
}
