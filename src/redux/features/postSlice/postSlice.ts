import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState, PostStructure } from "../../../types/postsTypes";

export const postInitialState: PostsState = {
  list: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState: postInitialState,
  reducers: {
    loadAllPosts: (
      currentPostState,
      action: PayloadAction<PostStructure[]>
    ) => ({
      ...currentPostState,
      list: [...action.payload],
    }),
    loadOnePost: (currentPostState, action: PayloadAction<PostStructure>) => ({
      ...currentPostState,
      list: [...currentPostState.list, action.payload],
    }),
  },
});

export const postReducer = postSlice.reducer;

export const {
  loadAllPosts: loadAllPostsActionCreator,
  loadOnePost: loadOnePostActionCreator,
} = postSlice.actions;