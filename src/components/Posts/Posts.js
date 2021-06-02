import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem/PostItem';
import { useDispatch } from 'react-redux';
import ActivityView from './ActivityView';
import API from '../../fakeAPI';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    layout: {
        maxWidth: '600px'
    }
})

/**
 * A posts list which represents the home feed
 * 
 * @author Abdelrahman Mamdouh
 * @async 
 * @example <Posts />
 * @returns (
 *      <ActivityView />
 *      <PostItem /> list
 * )
 */
const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [postsFeed, setPostsFeed] = useState([]);

    const currentUserId = useSelector(state => state.users.currentUser.userId);

    /**
     * Make a Get request to get all recent posts/photos and save in postsFeed array
     */
    useEffect(() => {
        // API.get("posts")
        //     .then(res => {
        //         setPostsFeed(res.data);
        //     })

        API.get(`user/${currentUserId}/recent`)
            .then(res => {
                console.log("RECENT");
                console.log(res);
                console.log(res.data.status);
                if (res.data.status === 'success') {
                    console.log(res.data.data.photos.photos);
                    setPostsFeed(res.data.data.photos.photos);
                }
            }).catch(err => {
                console.log(err.response);
            })

    }, [dispatch, currentUserId]);


    return (
        //  <div style={{margin: 'auto 100px', maxWidth: '600px'}}>
        <Container className={classes.layout}>

            <ActivityView data-testid="activity"/>
            
            {postsFeed.map((post) => {
                return <PostItem key={post._id} id={post._id} username={`${post.userId.firstName} ${post.userId.lastName}`} 
                        imageUrl={post.sizes.size.original.source} caption={post.title}
                        avatarPhoto={post.avatarPhoto} 
                        externalShareLink={post.sizes.size.original.source}
                        postId={post._id}
                        comments={post.comments}
                        numFaves={post.favourites}
                        numComments={post.numFaves}
                        ownerId={post.userId._id}
                        data-testid="postItemElement"
                        />;
            })}
            </Container> 
          //</div>
     
    );
}

export default Posts;