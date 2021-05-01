import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import classes from '../Comment/Comment.module.css';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postsActions } from '../../../store/posts-slice';
//import Button  from 'react-bootstrap/Button';
/*

    isAddComment: to view the input textbox or not
    TODO: handleEditSubmit, modify the postId
*/


const NewComment = (props) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    

    const userAvatarPhoto = useSelector(state => state.user.avatarPhoto);
    const userName = useSelector(state => state.user.username);


    const handleChange = (event) => {
        setCommentText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch(postsActions.addPostComment({postId: props.postId, commentText: commentText, avatarPhoto: userAvatarPhoto, username: userName}));
        setCommentText('');
    }


    const inputAddComment = (
        <> 
        <form onSubmit={handleSubmit}> 
            <TextField
                style={{width: '400px', marginLeft: '5px'}}
                id="outlined-multiline-flexible"
                //label="Comment"
                placeholder="Add comment to the photo"
                multiline
                rowsMax={4}
                value={commentText}
                onChange={handleChange}
                variant="outlined"
            />
            
        <Button variant="contained" color="primary" className={classes.add__comment} type="submit">Add comment</Button>
        </form>
        </>
    );



    return (
        <div className={classes.add__comment}>
            <Avatar src={userAvatarPhoto} alt={userName}/>
           
            { inputAddComment }
            
        </div>
    );

}

export default NewComment;
