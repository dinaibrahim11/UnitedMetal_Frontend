import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import classes from '../Comment/Comment.module.css';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../storev2/users-slice';
import API from '../../../fakeAPI';
import PropTypes from 'prop-types';

/*

    isAddComment: to view the input textbox or not
    
*/

/**
 * Provides the input text box along with the Add Comment button
 * @author Abdelrahman Mamdouh
 * @param {*} props 
 * @returns <TextField />
 */
const NewComment = (props) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    

    const userAvatarPhoto = useSelector(state => state.users.currentUser.avatarPhoto);
    const userName = useSelector(state => state.users.currentUser.username);

    const handleChange = (event) => {
        setCommentText(event.target.value);
    }

    /**
     * Make a POST request with text written in the input box
     * @param {*} event 
     * @returns {void}
     */
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
            /**
             * toggleComments forces the comments to be refetched showing
             * the most updated comments
             */
            setCommentText('');
            dispatch(usersActions.toggleComments());
        })

    }


    const inputAddComment = (
        <> 
        <form onSubmit={handleSubmit}> 
            <TextField
                data-testid="form"
                className={classes.input__comment}
                //style={{width: '380px', marginLeft: '5px', marginBottom: '5px', marginRight: '5px'}}
                id="outlined-multiline-flexible"
                //label="Comment"
                placeholder="Add comment to the photo"
                multiline
                rowsMax={4}
                value={commentText}
                onChange={handleChange}
                variant="outlined"
            />
            
        <Button data-testid="addComment" variant="contained" color="primary" className={classes.add__comment__button} type="submit">Add</Button>
        </form>
        </>
    );



    return (
        <div className={classes.add__comment}>
            <Avatar src={userAvatarPhoto} alt={userName} style={{marginRight: '5px'}}/>
           
            { inputAddComment }
            
        </div>
    );

}

NewComment.propTypes = {
    /**
     * id of the post commenting on
     */
    postId: PropTypes.number.isRequired
};

export default NewComment;
