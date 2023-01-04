import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { initialReactions } from "../../utils/constants";
import { IPostsState } from "../../utils/interfaces";
import { TFormattedPost, TPost } from "../../utils/types";
import { RootState } from "../store";
import { generateRandomReactions } from "../../utils/getRandomReactions";

const initialState: IPostsState = {
  posts: [],
  status: "idle",
  error: undefined,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://api.nomoreparties.co/beatfilm-movies", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  });
  return response as TPost[];
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction, userId } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        const isLiked = existingPost.reactions[reaction].likes.indexOf(userId);
        console.log(isLiked)
        if(isLiked >= 0) {
          existingPost.reactions[reaction].count--;
          const existingPostLikes = existingPost.reactions[reaction].likes;
          const userIndex = existingPostLikes.map((id:string) => id !== userId);
          existingPostLikes.splice(userIndex, 1);
        } else {
          existingPost.reactions[reaction].count++;
          existingPost.reactions[reaction].likes.push(userId);
        }
      }
    },
    postAdded: {
      reducer(state, action: PayloadAction<TFormattedPost>) {
        state.posts.push(action.payload);
      },
      prepare(description, nameRU, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            dateTitle: new Date().toString(),
            description,
            nameRU,
            user: userId,
            reactions: initialReactions,
            created_at: new Date().toISOString(),
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, nameRU, description } = action.payload;
      const existingPost = state.posts.find(
        (post) => post.id.toString() === id.toString()
      );
      if (existingPost) {
        existingPost.nameRU = nameRU;
        existingPost.description = description;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const formattedPost = action.payload.map((post) => {
          return {
            ...post,
            reactions: generateRandomReactions(),
          };
        });
        state.posts = state.posts.concat(formattedPost);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.posts.find((post) => post.id.toString() === postId.toString());
