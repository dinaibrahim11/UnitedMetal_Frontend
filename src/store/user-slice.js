import { createSlice } from '@reduxjs/toolkit';


// TODO: should replace 0 and false with null??
const initialUserState = {
    id: 'testUser',
    username: 'Abdelrahman',
    avatarPhoto: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg', //profile picture
    isLoggedIn: true,
    isEditingAComment: false,
    numFollowers: 0,
    numFollowing: 0,
    followers: [],
    following: [],
    isPro: false,
    photos: [], //list of objects: viewingPrivacy, photoItem, numViews, ....
    favedPhotos: [], //list of objects
    albums: [],
    galleries: [],
    userComments: [], //the comments typed by the user
    numViews: 0,
    activityPosts: [], //posts from activity feed in Home page


};


const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState, //TODO: add liss of followers/following ...
    reducers: {
        setIsPro(state) {
            state.isPro = true;
        },
        addFavedPhoto(state, action) {
            const newFavedPhoto = action.payload;
            state.favedPhotos.push({
                id: newFavedPhoto.id,
                owner: newFavedPhoto.username,
                url: newFavedPhoto.url
            });
        },
        removeFavedPhoto(state, action) {
            //expecting the id as input parameter
            const id = action.payload;
            const existingPhoto = state.favedPhotos.find(item => item.id === id);
            console.log("id: "+id);
            console.log(state.favedPhotos);
            console.log(existingPhoto);
            if (existingPhoto) {
                state.favedPhotos = state.favedPhotos.filter(item => item.id !== id);
            }

        },
        replaceFavedPhotos(state, action) {
            state.favedPhotos = action.payload.favedPhotos;
        },
        addSingleFavedPhoto(state, action) {
            const newFavedPhoto = action.payload;
            state.favedPhotos.push({
                id: newFavedPhoto.id,
                owner: newFavedPhoto.username,
                url: newFavedPhoto.url
            });
        },

        addComment(state, action) {
            //add Comments typed by the user for a certain post
            const newComment = action.payload;
            state.userComments.push({
                postId: newComment.postId,
                commentId: newComment.commentId,
                commentText: newComment.commentText
            })
        },

        setIsEditingACommentTrue(state) {
            state.isEditingAComment = true;
        },

        setIsEditingACommentFalse(state) {
            state.isEditingAComment = false;
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

export const userActions = userSlice.actions;

export default userSlice;