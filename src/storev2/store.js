import { configureStore, createStore } from '@reduxjs/toolkit';
import usersSlice from './users-slice';
import postsSlice from './posts-slice';
import commentsSlice from './comments-slice';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';



const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        comments: commentsSlice.reducer
    },
    preloadedState: loadState()
});

store.subscribe(
    throttle(() => saveState(store.getState()), 1000)
);

export default store;