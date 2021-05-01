import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './PostDetail.module.css';

const PostDetail = (props) => {

    const postId = props.match.params.id;
    // const dispatch = useDispatch();
  
    const posts = useSelector(state => state.posts.feed);
    const post = posts.find(p => p.postId === +postId);
    console.log(post.postId)
 

    return (
        <Fragment>
            <h1>Post Detail </h1>
            <h3>Post ID: {props.match.params.id}</h3>
            <div className={classes.image__view}>
                <img src={post.imageUrl} alt="" />
                <button>Download</button>
                <button>Share</button>
                <button>Fave</button>
            </div>

            <div className={classes.grid__parent}>
                <div className={classes.left}>Profile Info</div>
                <div className={classes.right}>Meta data</div>
                
            </div>


        </Fragment>
    );
}

export default PostDetail;