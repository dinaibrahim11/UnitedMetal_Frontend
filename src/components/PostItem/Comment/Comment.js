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

import API from '../../../fakeAPI';


const Comment = (props) => {
    const dispatch = useDispatch();
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editingText, setEditingText] = useState(''); 

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
        var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
        API.patch(`comments/${+props.commentId}`, {
            id: props.commentId,
            postId: props.postId,
            commentText: editingText,
            avatarPhoto: props.avatarPhoto,
            username: props.username,
            dateCommented: d //updating the date commented
        }).then(res => {
            dispatch(usersActions.toggleComments());
        })
        dispatch(usersActions.setIsEditingACommentFalse());
    }

    const handleRemoveComment = () => {
        API.delete(`comments/${+props.commentId}`)
        .then(res => {
            dispatch(usersActions.toggleComments());
        }).catch(err => console.log(err));
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
            <Avatar src={props.avatarPhoto} alt={props.username}/>
            
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

export default Comment;
