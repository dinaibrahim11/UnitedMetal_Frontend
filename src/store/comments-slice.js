import { createSlice } from '@reduxjs/toolkit';




// TODO: should replace 0 and false with null??
const initialCommentsState = {
    comments: [],
    /*
    array of comment object
    post: {
        commentId: null,
        commentText: '',
        postId: null,
        isByCurrentUser: false,
        ownerId: null,
        username: null,
        avatarPhoto: null
    }

*/ 
};

let globalCommentId = 0; //initial id

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialCommentsState, 
    reducers: {
        
        addComment(state, action) {
            //add Comments typed by the user for a certain post
            const { postId, commentText } = action.payload;
            state.comments.push({
                postId: postId,
                commentId: ++globalCommentId,
                commentText: commentText
            });
        },

        editComment(state, action) {
            const { postId, commentId, newCommentText } = action.payload;
            const existingCommentIndex = state.userComments.findIndex(item => item.commentId === commentId);
            if (existingCommentIndex) {
                state.userComments[existingCommentIndex] = { postId, commentId, newCommentText };
            }
        },

        removeComment(state, action) {
            const commentId = action.payload;
            const existingComment = state.userComments.find(item => item.commentId === commentId);
            if (existingComment) {
                state.userComments = state.userComments.filter(item => item.commentId !== commentId);
            }
        }


    }
});

export const postActions = postSlice.actions;

export default postSlice;