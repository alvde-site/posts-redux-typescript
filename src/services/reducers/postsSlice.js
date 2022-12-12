import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { initialReactions } from "../../utils/constants";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://api.nomoreparties.co/beatfilm-movies", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  });
  return response;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postAdded: {
      reducer(state, action) {
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
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, nameRU, description } = action.payload;
      const existingPost = state.posts.find((post) => post.id.toString() === id.toString());
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
        const formattedPost = action.payload.map(post => {return {...post, reactions: initialReactions}} )
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

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id.toString() === postId.toString());
