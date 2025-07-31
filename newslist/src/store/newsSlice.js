import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  hasMore: true,
  skip: 0,
};

export const fetchPosts = createAsyncThunk('news/fetchPosts', async (skip) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
    const data = await response.json();
    console.log('data:', data);
    return data;
  } catch (error) {
    throw new Error('Ошибка загрузки', error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        const newPosts = action.payload.posts.map((post) => ({
          ...post,
          tags: post.tags || [],
          reactions: post.reactions || { likes: 0, dislikes: 0 },
        }));
        state.posts = action.payload.skip === 0 ? newPosts : [...state.posts, ...newPosts];
        state.skip = action.payload.skip + action.payload.limit;
        state.hasMore = state.posts.length < action.payload.total;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export default newsSlice.reducer;