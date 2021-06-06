import React, { useState, useEffect } from 'react';
import classes from './Comments.module.css';
import { Avatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import API from '../../../fakeAPI';

import Comment from './Comment/Comment';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../storev2/users-slice';


const tmpPhoto = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";


/**
 * Force rerenders the component to use it when updating a specific UI
 * @returns 
 */
function useForceUpdate(){
    const [_, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

/**
 * A higher order component holding Comment components
 * @param {string} photoId   - id of the current post  
 * @param {string} token     - current logged in user token 
 * @returns 
 */
const Comments = (props) => {

    const dispatch = useDispatch();
    const forceUpdate = useForceUpdate();
    const [commentsList, setCommentsList] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const tmpToken = props.token; 
    const rerender = useSelector(state => state.users.toggle); //when a new comment is added, rerender
    const loggedInUserId = useSelector(state => state.users.currentUser.userId);


    useEffect(() => {
        API.get(`photo/${props.photoId}/comments`)
            .then(res => {
                setCommentsList(res.data.data.comments);
            }).catch(err => {

            })
    }, [rerender]);

    const handleChange = (event) => {
        setNewCommentText(event.target.value);
    }

    const handleAddNewComment = () => {
        API.post(`photo/${props.photoId}/comments`, {
            body: newCommentText
        }, { 
            headers: {
            "Authorization": `Bearer ${tmpToken}` 
        }}).then (res => {
            if (res.data.data.status === 'success') {
                setCommentsList(res.data.data.comments);
                dispatch(usersActions.toggleComments());
            }
        }).catch(err => {
        });
        forceUpdate();
        setNewCommentText('');
        console.log(commentsList);
    }



    return (
        <div className={classes.sub__photo__comments__view}>
            
            <Divider style={{marginBottom: '20px'}}/>

            <ul className={classes.comments}>
                {commentsList && commentsList.map(comment => (
                    
                    <Comment key={comment._id} commentId={comment._id} avatarPhoto={comment.avatarPhoto}
                        author={`${comment.userId.firstName} ${comment.userId.lastName}`} date={comment.date}
                        commentText={comment.body} isPhotoMine={comment.userId._id === loggedInUserId} 
                        authorId={comment.userId._id}
                        token={tmpToken}
                        photoId={props.photoId}
                        />
                ))}
            </ul>

            {/* <NewComment /> */}
            <div className={classes.comments__form}>
                <div className={classes.comment__icon}>
                    <Avatar src={tmpPhoto} />
                </div>
                <div className={classes.comment__form__field}>
                    <textarea value={newCommentText} onChange={handleChange} className={classes.new__comment}
                        placeholder="Add a comment"
                    ></textarea>
                    <div className={classes.comment__arrow}></div>
                </div>
                <button className={classes.add__comment__button} onClick={handleAddNewComment} >Comment</button>
            </div>

        </div>
    )
}

export default Comments;