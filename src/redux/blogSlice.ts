import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IBlog } from "../types/blog.type";
import axios from "axios";

export const getBlogList = createAsyncThunk(
    "blog/getBlogList", async () => {
        const response = await axios.get<IBlog[]>("http://localhost:3001/api/v1/blogs/Blogs");
        return response.data.data.rows
    }
)

interface IBlogState {
  blogList: IBlog[];
  isLoading: boolean;
  error: string;
}

const initialState: IBlogState = {
  blogList: [],
  isLoading: false,
  error: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogList.fulfilled, (state, action: PayloadAction<IBlog[]>) => {
        state.isLoading = false;
        state.blogList = action.payload;
      })
      .addCase(getBlogList.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.error.message || "";
      });
  }
});

export default blogSlice.reducer;
