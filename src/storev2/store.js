import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users-slice';
import postsSlice from './posts-slice';
import commentsSlice from './comments-slice';

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        comments: commentsSlice.reducer
    }
});

export default store;