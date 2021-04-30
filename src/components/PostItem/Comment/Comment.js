import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import classes from './Comment.module.css';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/user-slice';
import { postsActions } from '../../../store/posts-slice';



const Comment = (props) => {
    const dispatch = useDispatch();
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editingText, setEditingText] = useState(''); 

    //call the refetching of commments if status is completed, calls function from parent component
    // useEffect(() => {

    // }, []);


    const handleEdit = () => {
        setIsEditingComment(true);
        setEditingText(props.commentText);
        dispatch(userActions.setIsEditingACommentTrue());
    }

    const handleEditChange = (event) => {
        setEditingText(event.target.value);
    }


    const handleEditingSubmit = (event) => {
        event.preventDefault();
        setIsEditingComment(false);
        dispatch(postsActions.editPostComment({postId: props.postId, commentId: props.commentId, commentText: editingText}));
        dispatch(userActions.setIsEditingACommentFalse());
    }

    const handleRemoveComment = () => {

        dispatch(postsActions.removeCommentPost({postId: props.postId, commentId: props.commentId}));
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
                    <h3 style={{marginLeft: '10px'}}>{props.username}</h3>
                    <p style={{marginLeft: '12px', fontSize: '80%'}}>{props.dateCommented}</p>
                    <Typography style={{marginLeft: '10px'}}>{props.commentText}</Typography>
                    {props.isByCurrentUser && <button onClick={handleEdit}
                        >Edit</button>}
                    {props.isByCurrentUser && <button onClick={handleRemoveComment}
                        style={{marginLeft: '20px'}}>Remove</button>}
                </div>
                    
            )
            
            }
            

            
        </div>
    );

}

export default Comment;
