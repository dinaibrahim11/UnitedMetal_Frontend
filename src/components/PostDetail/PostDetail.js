import React, { Fragment, useEffect, useState } from 'react';
import classes from './PostDetail.module.css';

import API from '../../fakeAPI';

const PostDetail = (props) => {

    const postId = props.match.params.id;
    const [post, setPost] = useState({});
 

    useEffect(() => {
        API.get(`posts/${postId}`)
            .then(res => {
                setPost(res.data);
            })
    }, [postId]);

    return (
        <Fragment>
            <h1>Post Detail </h1>
            <h2>Still Under Construction</h2>
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