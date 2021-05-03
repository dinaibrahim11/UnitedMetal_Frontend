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


const PostFooter = (props) => {   
    const [showComments, setShowComments] = useState(false);
    const userName = useSelector(state => state.users.currentUser.username);
    const isEditingAComment = useSelector(state => state.users.currentUser.isEditingAComment);


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
                        <IconButton onClick={addFavHandler} component="span" className={classes.Button}>
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title='Fav'>
                        <IconButton onClick={addFavHandler} component="span" className={classes.Button}>
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
                        
                        return <Comment key={comment.id} dateCommented={comment.dateCommented} postId={comment.postId} commentId={comment.id} isByCurrentUser={comment.username === userName} isAddComment={false} avatarPhoto={comment.avatarPhoto} username={comment.username} commentText={comment.commentText} />
                    })}

                    {!isEditingAComment && <NewComment postId={props.postId} />}

                </CardContent>
            </Collapse>

        </Fragment>
    )
}

export default PostFooter;
