import { createSlice } from '@reduxjs/toolkit';

import dummy_posts from './__mock__/Posts/dummy_posts';


const initialPostState = {
    posts: [],
    feed: dummy_posts,
};

let globalCommentId = 0; //initial id

const postSlice = createSlice({
    name: 'posts',
    initialState: initialPostState, //TODO: add liss of followers/following ...
    reducers: {
        getAllComments(state, action) {
            //const postId = action.payload;

        },

        addComment(state, action) {
            
            
            const { postId, commentText } = action.payload;
            const existingPostIndex = state.posts.findIndex(post => post.postId === postId);
            if (existingPostIndex) {
                state.posts[existingPostIndex].comments.push({
                    commentId: ++globalCommentId,
                    commentText: commentText,
                    isByCurrentUser: true.valueOf,
                    
                });
            }

        },

        addPostComment(state, action) {
            var d = (new Date()).toString().split(' ').splice(1,3).join(' ');

            const { postId, commentText, username, avatarPhoto } = action.payload;
            const existingPostIndex = state.feed.findIndex(post => post.postId === postId);
            
            const newFeed = state.feed;
            
            if (existingPostIndex >= 0) {
                
                newFeed[existingPostIndex].comments.push({
                        commentId: ++globalCommentId,
                        commentText: commentText,
                        postId: postId,
                        username: username,
                        avatarPhoto: avatarPhoto,
                        dateCommented: d
                    });

                state.feed = newFeed;
                
                
            }
        },
        
        editPostComment(state, action) {
            const {postId, commentId, commentText} = action.payload;
            const existingPostIndex = state.feed.findIndex(post => post.postId === postId);
            //alert(commentText);
            //const newFeed = state.feed;
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

        // editComment(state, action) {
        //     const { commentId, commentText } = action.payload;

        // },

        // removeComment(state, action) {
        //     const commentId = action.payload;
        // }


    }
});

export const postsActions = postSlice.actions;

export default postSlice;