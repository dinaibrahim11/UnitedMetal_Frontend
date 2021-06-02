import React, { Fragment, useState } from 'react';
import classes from './PostFooter.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import Collapse from '@material-ui/core/Collapse';
import { CardContent } from '@material-ui/core';
import Comment from '../Comment/Comment';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useSelector } from 'react-redux';
import NewComment from '../NewComment/NewComment';
import PropTypes from 'prop-types';
import API from '../../../fakeAPI';


/**
 * Contains comments and fave and comment icon and add to gallery icon
 * @author Abdelrahman Mamdouh 
 * @param {function} setIsFaved - a function that sets the photo to be faved
 * @param {function} handleFav - handles the fave action
 * @param {number} postId - id of the post
 * @param {boolean} isFaved - is the post faved by the current logged in user
 * @param {number} countFaves - number of people faved the photo
 * @param {Array} comments - list of comments on the photo/post
 * @returns (
 *      <FavoriteIcon />  <CommentIcon />  <AddBoxIcon />
 *      <Comment /> (list)
 * )
 */
const PostFooter = (props) => {   
    const [showComments, setShowComments] = useState(false);
    const userName = useSelector(state => state.users.currentUser.username);
    const isEditingAComment = useSelector(state => state.users.currentUser.isEditingAComment);

    const currentUserId = useSelector(state => state.users.currentUser.userId);


    const addFavHandler = () => {
        

        props.setIsFaved(prevState => !prevState);
        props.handleFav();
        

    }

 
    const showCommentsHandler = () => {
        setShowComments(prevShow => !prevShow);
    }

 

    return (
        <Fragment>
            <div className={classes.footer} >

                {props.isFaved ? (
                    <Tooltip title='Fav'>
                        <IconButton onClick={addFavHandler} component="span" className={classes.Button} data-testid="faveFilled">
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title='Fav'>
                        <IconButton onClick={addFavHandler} component="span" className={classes.Button} data-testid="faveEmpty">
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Tooltip>
                )}
                <p className={classes.count__faves}>{props.countFaves}
                </p>
                <Tooltip title='Comment'>
                    <IconButton onClick={showCommentsHandler} component="span" className={classes.Button}>
                        <CommentIcon />
                    </IconButton>
                </Tooltip>
                    
                <Tooltip title='Add to Gallery/Group'>    
                    <IconButton component="span" className={classes.Button}>
                        <AddBoxIcon />
                    </IconButton>
                </Tooltip>
                

            </div>

            <Collapse in={showComments} unmountOnExit >
                <CardContent >

                    {props.comments.map((comment) => {
                        
                        return <Comment key={comment._id} dateCommented={comment.date.slice(0,10)} postId={props.postId} commentId={comment._id} isByCurrentUser={comment.userId._id === currentUserId} isAddComment={false} avatarPhoto={comment.avatarPhoto} username={`${comment.userId.firstName} ${comment.userId.lastName}`} commentText={comment.body} />
                    })}

                    {!isEditingAComment && <NewComment postId={props.postId} />}

                </CardContent>
            </Collapse>

        </Fragment>
    )
}

PostFooter.propTypes = {
    /**
     * sets the current photo to be favorited
     */
    setIsFaved: PropTypes.func,
    /**
     * handles faves action
     */
    handleFav: PropTypes.func,
    /**
     * id of the current post
     */
    postId: PropTypes.number.isRequired,
    /**
     * is the current photo favorited by the currentUser
     */
    isFaved: PropTypes.bool,
    /**
     * count of favorites on this photo
     */
    countFaves: PropTypes.number,
    /**
     * list of comments on the post
     */
     comments: PropTypes.array

}

export default PostFooter;
