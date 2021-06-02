import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import classes from './Comment.module.css';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../storev2/users-slice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'; 

import { useSelector } from 'react-redux';

import API from '../../../fakeAPI';

/**
 * Renders a comment item 
 * @author Abdelrahman Mamdouh
 * @param {number} postId - id of the photo/post
 * @param {number} commentId - id of the comment
 * @param {string} username - username of the commentor
 * @param {string} avatarPhoto - avatar photo of the commentor
 * @param {boolean} isByCurrentUser - is this comment by the current logged user 
 * @returns (
 *      <Avatar />
 *      commentText
 *      <EditIcon />   if currentUser is owner
 *      <DeleteIcon /> if currentUser is owner
 * )
 */
const Comment = (props) => {
    const dispatch = useDispatch();
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editingText, setEditingText] = useState(''); 

    const token = useSelector(state => state.users.currentUser.token);

    const handleEdit = () => {
        setIsEditingComment(true);
        setEditingText(props.commentText);
        dispatch(usersActions.setIsEditingACommentTrue());
    }

    const handleEditChange = (event) => {
        setEditingText(event.target.value);
    }


    const handleEditingSubmit = (event) => {
        event.preventDefault();
        setIsEditingComment(false);
        // var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
        // API.patch(`comments/${+props.commentId}`, {
        //     id: props.commentId,
        //     postId: props.postId,
        //     commentText: editingText,
        //     avatarPhoto: props.avatarPhoto,
        //     username: props.username,
        //     dateCommented: d //updating the date commented
        // }).then(res => {
        //     dispatch(usersActions.toggleComments());
        // })
        // dispatch(usersActions.setIsEditingACommentFalse());
        console.log("COMMENTID: "+props.commentId);
        API.patch(`photo/comments/${props.commentId}`, {
            body: editingText
        }, { 
            headers: {
            "Authorization": `Bearer ${token}` 
        }}).then(res => {
            console.log("EDITING TEXT");
            console.log(res);
            if (res.data.data.status === 'success') {
                
            }
            dispatch(usersActions.toggleComments());
        }).catch(err => {
            console.log("ERROR EDITING TEXT");
            console.log(err.response);
        });
        dispatch(usersActions.setIsEditingACommentFalse());
    }

    const handleRemoveComment = () => {
        // API.delete(`comments/${+props.commentId}`)
        // .then(res => {
        //     dispatch(usersActions.toggleComments());
        // }).catch(err => console.log(err));

        API.delete(`photo/${props.postId}/comments/${props.commentId}`, { 
            headers: {
            "Authorization": `Bearer ${token}` 
        }})
            .then(res => {
                console.log("DELETEING COMMENT");
                console.log(token);
                console.log(res);
                dispatch(usersActions.toggleComments());
            }).catch(err => {
                console.log(err.response);
                console.log(props.postId);
                console.log("ERROR DELETEING COMMENT");
                console.log(token);
            });
    }

    let editableComment = (
        
        <form onSubmit={handleEditingSubmit}>
            
        <TextField
            style={{width: '500px', marginLeft: '5px'}}
            id="outlined-multiline-flexible"
            placeholder={editingText}
            defaultValue={editingText}
            multiline
            rowsMax={4}
            value={editingText}
            onChange={handleEditChange}
            variant="outlined"
        />
            <Button variant="contained" color="primary" style={{height: '40px', marginTop: '10px', marginLeft: '365px'}} type="submit">Edit comment</Button>

        </form>
        
        
    );

  

    return (
        <div className={classes.add__comment}>
            <Avatar data-testid="avatar" src={props.avatarPhoto} alt={props.username}/>
            
            {isEditingComment ? editableComment :
            
            (
                
                <div >
                    <h3 style={{marginLeft: '10px', fontSize: "15px"}}>{props.username}</h3>
                    <p style={{marginLeft: '12px', fontSize: '11px'}}>{props.dateCommented}</p>
                    <Typography style={{marginLeft: '10px', fontSize: "13px"}}>{props.commentText}</Typography>
                    <div className={classes.edit_delete}>
                    {props.isByCurrentUser && (
                        <IconButton onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                    )}
                    {props.isByCurrentUser && (
                        <IconButton onClick={handleRemoveComment}>
                            <DeleteIcon />
                        </IconButton>
                    )}
                    </div>
                </div>
                    
            )
            
            }
 
        </div>
    );

}

Comment.propTypes = {
    /**
     * id of the post that this comment belongs to
     */
    postId: PropTypes.any.isRequired,
    /**
     * id of the current comment
     */
    commentId: PropTypes.number.isRequired,
    /**
     * username of the commentor
     */
    username: PropTypes.string.isRequired,
    /**
     * profile picture of the commentor
     */
    avatarPhoto: PropTypes.string.isRequired,
    /**
     * if this comment belongs to currentUser
     */
    isByCurrentUser: PropTypes.bool
};

export default Comment;
