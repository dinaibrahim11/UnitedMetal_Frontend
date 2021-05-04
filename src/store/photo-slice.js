import { createSlice } from '@reduxjs/toolkit';


const initialPhotoState = {
    photoId: '',
    numFaves: 0,
    numComments: 0,
    numViews: 0,
    imageUrl: '',
    usersFaved: [],
    usersCommented: [],
    dataTaken: '',
    metaData: '',
    tags: []
};

const photoSlice = createSlice({
    name: 'photo',
    initialState: initialPhotoState,
    reducers: {

    }
});


export const photoActions = photoSlice.actions;

export default photoSlice;