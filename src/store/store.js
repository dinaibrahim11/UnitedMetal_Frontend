import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice';
import postsSlice from './posts-slice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postsSlice.reducer
    }
});

export default store;