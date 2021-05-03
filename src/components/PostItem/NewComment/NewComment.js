import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import classes from '../Comment/Comment.module.css';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../storev2/users-slice';

import API from '../../../fakeAPI';

/*

    isAddComment: to view the input textbox or not
    
*/

const NewComment = (props) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    

    const userAvatarPhoto = useSelector(state => state.users.currentUser.avatarPhoto);
    const userName = useSelector(state => state.users.currentUser.username);

    const handleChange = (event) => {
        setCommentText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (commentText === ''){
            return;
        }
        var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
        API.post(`posts/${props.postId}/comments`, {
            postId: props.postId,
            commentText: commentText,
            username: userName, 
            avatarPhoto: userAvatarPhoto,
            dateCommented: d
        })
        .then(res => {
            
            setCommentText('');
            dispatch(usersActions.toggleComments());
        })

    }


    const inputAddComment = (
        <> 
        <form onSubmit={handleSubmit}> 
            <TextField
                style={{width: '380px', marginLeft: '5px', marginBottom: '5px', marginRight: '5px'}}
                id="outlined-multiline-flexible"
                //label="Comment"
                placeholder="Add comment to the photo"
                multiline
                rowsMax={4}
                value={commentText}
                onChange={handleChange}
                variant="outlined"
            />
            
        <Button variant="contained" color="primary" className={classes.add__comment__button} type="submit">Add</Button>
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
