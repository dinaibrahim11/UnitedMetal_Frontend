import React, { Fragment, useState } from 'react';
import classes from './Comment.module.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TimeAgo from 'timeago-react';
import API from '../../../../fakeAPI';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../../storev2/users-slice';


/**
 * 
 * @param {string} photoId      - id of the photo/post
 * @param {string} token        - token of current logged in user
 * @param {string} commentId    - id of the comment on the post
 * @param {string} commentText  - comment text content
 * @param {string} date         - date commented on post
 * @returns 
 */
const Comment = (props) => {

    const dispatch = useDispatch();

    const [isEditIconShown, setIsEditIconShown] = useState(false);
    const [isDeleteIconShown, setIsDeleteIconShown] = useState(false);
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editingText, setEditingText] = useState(''); 


    const handleMouseCommmentHoverOnEnter = () => {
        setIsEditIconShown(true);
        setIsDeleteIconShown(true);
    }

    const handleMouseCommentHoverOnLeave = () => {
        setIsEditIconShown(false);
        setIsDeleteIconShown(false);
    }

    const handleEdit = () => {
        setIsEditingComment(true);
        setEditingText(props.commentText);
        //dispatch(usersActions.setIsEditingACommentTrue());
    }

    const handleEditChange = (event) => {
        setEditingText(event.target.value);
    }


    const handleEditingSubmit = (event) => {
        event.preventDefault();
        setIsEditingComment(false);
   
        API.patch(`photo/comments/${props.commentId}`, {
            body: editingText
        }, { 
            headers: {
            "Authorization": `Bearer ${props.token}` 
        }}).then(res => {
            console.log("EDITING TEXT");
            console.log(res);
            if (res.data.data.status === 'success') {
                
            }
            dispatch(usersActions.toggleComments());
        }).catch(err => {
        });
        dispatch(usersActions.setIsEditingACommentFalse());

    }

    const handleRemoveComment = () => {

        API.delete(`photo/${props.photoId}/comments/${props.commentId}`, { 
            headers: {
            "Authorization": `Bearer ${props.token}` 
        }})
            .then(res => {
                console.log("DELETEING COMMENT");
                console.log(props.token);
                console.log(res);
                dispatch(usersActions.toggleComments());
            }).catch(err => {
                console.log(err.response);
                console.log(props.photoId);
                console.log("ERROR DELETEING COMMENT");
                console.log(props.token);
            })
    }


    let editableComment = (
        
        <form onSubmit={handleEditingSubmit}>
            <div className={classes.comment__edit__wrapper}>
                <textarea className={classes.comment__edit__text}
                    value={editingText}
                    onChange={handleEditChange}
                >
                    {props.commentText}
                </textarea>
            </div>
            <button className={classes.add__comment__button} onClick={handleEditingSubmit} id="photodetail-edit-done">Done</button>
        </form>
        
        
    );

    let commentContent = (
        <Fragment>
            <div className={classes.comment__content} data-testid="comment-text">
                    {props.commentText}
            </div>
            {(props.isPhotoMine && isDeleteIconShown) && <DeleteIcon onClick={handleRemoveComment} className={classes.icon} fontSize="small" id="photodetail-delete-btn"/>}
            {(props.isPhotoMine && isEditIconShown) && <EditIcon onClick={handleEdit} className={classes.icon} fontSize="small" id="photodetail-edit-btn" />}
        </Fragment>
    );

    return (

    <Fragment>
        
        <li  className={classes.comment} onMouseEnter={handleMouseCommmentHoverOnEnter} onMouseLeave={handleMouseCommentHoverOnLeave}>
            <div className={classes.comment__icon}>
                <Avatar src={props.avatarPhoto} alt="userPhoto"/>
            </div>
            <p className={classes.comment__author}><Link className={classes.comment__author__link}>{props.author}</Link>
            <TimeAgo
                datetime={props.date}
                locale='en'
                className={classes.comment__date}
            />
            </p>
            {isEditingComment ? editableComment : commentContent}
        </li>
    </Fragment>

    );
}

export default Comment;