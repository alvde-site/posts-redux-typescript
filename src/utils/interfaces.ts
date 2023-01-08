import { TPost } from "./types";

export interface IPostsState {
  initialPosts: TPost[],
  posts: TPost[];
  postsStart: number;
  postsEnd: number;
  status: string;
  error: string | undefined;
}
