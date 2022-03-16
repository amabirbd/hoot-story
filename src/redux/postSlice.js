import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://localhost:8080/").then((data) =>
    data.json()
  );
  return response.data;
});

// const data = require("../data.json");

const initialState = {
  status: null,
  posts: [],
  updatedPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    longStories: (state, action) => {
      const switchState = action.payload;

      if (!switchState) {
        state.updatedPosts = state.posts.filter((post) => {
          if (post.type !== "long") {
            return post;
          }
        });
      }
      return [...state.posts];
    },

    shortStories: (state, action) => {
      const switchState = action.payload;
      if (!switchState) {
        state.updatedPosts = state.posts.filter((post) => {
          if (post.type !== "short") {
            return post;
          }
        });
      }
      return [...state.posts];
    },

    deleteAll: (state, action) => {
      state.posts = [];
    },
  },

  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.updatedPosts = action.payload;

      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { longStories, shortStories } = postSlice.actions;
export default postSlice.reducer;
