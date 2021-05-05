/*
    NOTE: photo and post are used interchangeably

*/

import { 
    createSlice, 
    createAsyncThunk, 
    createSelector, 
    createEntityAdapter
} from "@reduxjs/toolkit";
import axios from 'axios';
import * as api from '../api';


//const BASE_PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
//const FIREBASE_ENDPOINT = 'https://react-http-23f9c-default-rtdb.firebaseio.com';
const BASE_COMMENTS = "https://jsonplaceholder.typicode.com/comments";



const postsAdapter = createEntityAdapter(
    // TODO: add a comparer function
);
const initialState = postsAdapter.getInitialState({
    // TODO: add more fields if needed
    status: "idle",
    error: null
});


export const getRecentPhotos = createAsyncThunk("posts/getRecentPhotos",
    async (userId) => {
        const response = await axios.get(`${api.BASE_API_ENDPOINT}/users/${userId}/recent`);
        return response.data;
    }
);

export const getRecentPosts = createAsyncThunk("posts/getRecentPhotos",
    async () => {
        const response = await axios.get(`${api.BASE_API_ENDPOINT}/posts`);
        return response.data;
    }
);

export const getComments = createAsyncThunk("photo/getComments",
    async (photoId) => {
        const response = await axios.get(`${BASE_COMMENTS}/${photoId}`);
        return response.data;
    }
);

export const addNewComment = createAsyncThunk("posts/addComment", 
    async () => {
        const response = await axios.post(`${api.BASE_API_ENDPOINT}/posts`)
    }
);


const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        addPostComment(state, action) {
            var d = (new Date()).toString().split(' ').splice(1,3).join(' ');

            const { postId, commentText, username, avatarPhoto } = action.payload;
            const existingPostIndex = state.entities[postId];
            console.log("adding a comment")
            console.log(existingPostIndex)
            // const newFeed = state.feed;
            
            // if (existingPostIndex >= 0) {
                
            //     newFeed[existingPostIndex].comments.push({
            //             commentId: ++globalCommentId,
            //             commentText: commentText,
            //             postId: postId,
            //             username: username,
            //             avatarPhoto: avatarPhoto,
            //             dateCommented: d
            //         });

            //     state.feed = newFeed;
                
                
            // }
        },
        
        editPostComment(state, action) {
            const {postId, commentId, commentText} = action.payload;
            const existingPostIndex = state.feed.findIndex(post => post.postId === postId);
            const commentToUpdateIndex = state.feed[existingPostIndex].comments.findIndex(comment => comment.commentId === commentId);
            const oldComment = state.feed[existingPostIndex].comments[commentToUpdateIndex];
            
            state.feed[existingPostIndex].comments = state.feed[existingPostIndex].comments.filter(comment => comment.commentId !== commentId);
        
            var d = (new Date()).toString().split(' ').splice(1,3).join(' ');

            if (existingPostIndex >= 0 && commentToUpdateIndex >= 0) {
                
                state.feed[existingPostIndex].comments.push({
                    
                    commentText: commentText,
                    commentId: oldComment.commentId,
                    postId: oldComment.postId,
                    username: oldComment.username,
                    avatarPhoto: oldComment.avatarPhoto,
                    dateCommented: d
                    });
            }
        },

        removeCommentPost(state, action) {
            const {postId, commentId} = action.payload;

            const existingPostIndex = state.feed.findIndex(post => post.postId === postId);
            state.feed[existingPostIndex].comments = state.feed[existingPostIndex].comments.filter(comment => comment.commentId !== commentId);
        },

        setView(state, action) {
            const viewText = action.payload;
            state.activityView = viewText;
        },
    },
    extraReducers: {
        [getRecentPhotos.pending]: (state, action) => {
            state.status = "pending";
        },
        [getRecentPhotos.fulfilled]: (state, action) => {
            state.status = "succeeded";
            postsAdapter.addMany(state, action.payload);
        },
        [getRecentPhotos.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },


    }
});



export const postsActions = postsSlice.actions;
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostsIds
} = postsAdapter.getSelectors(state => state.posts);


export default postsSlice;

export const selectPostByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.ownerId === userId)
);