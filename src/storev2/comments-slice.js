/*
    NOTE: photo and post are used interchangeably

*/

import { 
    createSlice, 
    createAsyncThunk, 
    createEntityAdapter
} from "@reduxjs/toolkit";
import axios from 'axios';
import * as api from '../api';


// const BASE_PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
// const FIREBASE_ENDPOINT = 'https://react-http-23f9c-default-rtdb.firebaseio.com';
// const BASE_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

const commentsAdapter = createEntityAdapter(
    // TODO: add a comparer function
);
const initialState = commentsAdapter.getInitialState({
    // TODO: add more fields if needed
    status: "idle",
    error: null
});

// photo/:id/comments
export const getCommentsForPost = createAsyncThunk("comments/getComments",
    async (photoId) => {
        const response = await axios.get(`${api.BASE_API_ENDPOINT}/photos/${photoId}`);
        console.log(response.data);
        return response.data;
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [getCommentsForPost.pending]: (state, action) => {
            state.status = "loading";
        },
        [getCommentsForPost.fulfilled]: (state, action) => {
            state.status = "succeeded";
            commentsAdapter.addOne(state, action.payload);
        },
        [getCommentsForPost.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
});

export const commentsActions = commentsSlice.actions;

export default commentsSlice;