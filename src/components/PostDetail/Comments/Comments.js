import React, { Fragment, useState, useEffect } from 'react';
import classes from './Comments.module.css';
import { Avatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TimeAgo from 'timeago-react';
import API from '../../../fakeAPI';

import Comment from './Comment/Comment';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../storev2/users-slice';


const tmpPhoto = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
const tmpAvatarPhoto1 = "data:image/jpeg;base64,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"

let tmpId = 4;

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Comments = (props) => {

    const dispatch = useDispatch();
    const forceUpdate = useForceUpdate();
    const [isEditIconShown, setIsEditIconShown] = useState(false);
    const [isDeleteIconShown, setIsDeleteIconShown] = useState(false);
    const [commentsList, setCommentsList] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [currentUserName, _] = useState('Abdelrahman Mamdouh'); // TODO: useSelector to get name and currentUser's info
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editingText, setEditingText] = useState(''); 
    
    const loggedInUserToken = useSelector(state => state.users.currentUser.token);
    const tmpToken = props.token; //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjY1ODg0MWQ1OTNjNjVjOGMxYTc5OCIsImlhdCI6MTYyMjU3NjgyMywiZXhwIjoxNjMwMzUyODIzfQ.8mCry7WtW7Z7OkhKTF13UWO_H_SDt2VAF49ucCwyDpk";
    const [addedComment, setAddedComment] = useState(false);
    //const rerender = useSelector(state => state.users.toggleCommentsPostDetail); //when a new comment is added, rerender
    const rerender = useSelector(state => state.users.toggle); //when a new comment is added, rerender


    useEffect(() => {
        // API.get(`photos/${props.photoId}`)
        //     .then(res => {
        //         console.log(res)
        //         console.log("res.comments: "+res.comments)
        //         setCommentsList(res.data.comments);
        //     }).catch(err => {
        //         console.log(err);
        //     })
            //alert("changed")

        API.get(`photo/${props.photoId}/comments`)
            .then(res => {
                console.log("COMMENTS");
                console.log(res);
                setCommentsList(res.data.data.comments);
            }).catch(err => {

            })
    }, [rerender]);

    const handleMouseCommmentHoverOnEnter = () => {
        setIsEditIconShown(true);
        setIsDeleteIconShown(true);
    }

    const handleMouseCommentHoverOnLeave = () => {
        setIsEditIconShown(false);
        setIsDeleteIconShown(false);
    }

    const handleChange = (event) => {
        setNewCommentText(event.target.value);
    }

    const handleAddNewComment = () => {
        // TODO: make api requests
        // API.patch(`photos/${photoId}/comments`, {

        // }).then()


        API.post(`photo/${props.photoId}/comments`, {
            body: newCommentText
        }, { 
            headers: {
            "Authorization": `Bearer ${tmpToken}` 
        }}).then (res => {
            console.log("ADD NEW COMMENT");
            console.log(res);
            if (res.data.data.status === 'success') {

                setCommentsList(res.data.data.comments);
                dispatch(usersActions.toggleComments());
                //setAddedComment(prev => !prev);
                //dispatch(usersActions.toggleCommentsPhotoDetails());
            }
        }).catch(err => {
            console.log(err.response);
        });
        forceUpdate();
        setNewCommentText('');
        console.log(commentsList);
    }

    const handleCommentEdit = () => {
        alert("hi")
    }


    const handleEdit = () => {
        setIsEditingComment(true);
        //setEditingText(props.commentText);
        //dispatch(usersActions.setIsEditingACommentTrue());
    }

    const handleEditChange = (event) => {
        setEditingText(event.target.value);
    }


    const handleEditingSubmit = (event) => {
        // event.preventDefault();
        // setIsEditingComment(false);
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
    }

    const comment = (avatarPhoto, author, commentText, date) => {
        return (
            <li className={classes.comment} onMouseEnter={handleMouseCommmentHoverOnEnter} onMouseLeave={handleMouseCommentHoverOnLeave}>
                <div className={classes.comment__icon}>
                    <Avatar src={avatarPhoto} alt="userPhoto"/>
                </div>
                <p className={classes.comment__author}><Link className={classes.comment__author__link}>{author}</Link>
                <TimeAgo
                    datetime={date}
                    locale='en'
                    className={classes.comment__date}
                />
                </p>
                <div className={classes.comment__content}>
                    {commentText}
                </div>
                {isDeleteIconShown && <DeleteIcon className={classes.icon} fontSize="small" />}
                {isEditIconShown && <EditIcon className={classes.icon} fontSize="small" />}
            </li>
        )
    }


    // TODO: check if a comment is mine or not

    return (
        <div className={classes.sub__photo__comments__view}>
            
            <Divider style={{marginBottom: '20px'}}/>

            <ul className={classes.comments}>
                {commentsList && commentsList.map(comment => (
                    
                    <Comment key={comment._id} commentId={comment._id} avatarPhoto={comment.avatarPhoto}
                        author={`${comment.userId.firstName} ${comment.userId.lastName}`} date={comment.date}
                        commentText={comment.body} isPhotoMine={comment.userId._id === props.userId} 
                        authorId={comment.userId._id}
                        token={tmpToken}
                        photoId={props.photoId}
                        />
                    // <li key={comment.id} className={classes.comment} onMouseEnter={handleMouseCommmentHoverOnEnter} onMouseLeave={handleMouseCommentHoverOnLeave}>
                    //     <div className={classes.comment__icon}>
                    //         <Avatar src={comment.avatarPhoto} alt="userPhoto"/>
                    //     </div>
                    //     <p className={classes.comment__author}><Link className={classes.comment__author__link}>{comment.author}</Link>
                    //     <TimeAgo
                    //         datetime={comment.date}
                    //         locale='en'
                    //         className={classes.comment__date}
                    //     />
                    //     </p>
                    //     <div className={classes.comment__content}>
                    //         {comment.commentText}
                    //     </div>
                    //     {(comment.isPhotoMine && isDeleteIconShown) && <DeleteIcon className={classes.icon} fontSize="small" />}
                    //     {(comment.isPhotoMine && isEditIconShown) && <EditIcon onClick={handleCommentEdit} className={classes.icon} fontSize="small" />}
                    // </li>
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