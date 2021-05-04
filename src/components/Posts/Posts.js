import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem/PostItem';
import { useDispatch } from 'react-redux';
import ActivityView from './ActivityView';
import API from '../../fakeAPI';


/**
 * A posts list which represents the home feed
 * 
 * @author Abdelrahman Mamdouh
 * @returns (
 *      <ActivityView />
 *      <PostItem /> list
 * )
 */

const Posts = () => {

    const dispatch = useDispatch();

    const [postsFeed, setPostsFeed] = useState([]);

    /**
     * Make a Get request to get all recent posts/photos and save in postsFeed array
     */
    useEffect(() => {
        API.get("posts")
            .then(res => {
                setPostsFeed(res.data);
            })
    }, [dispatch]);

    return (
        <div style={{margin: 'auto 10px', maxWidth: '600px'}}>
            
            <ActivityView data-testid="activity"/>
            
            {postsFeed.map((post) => {
                return <PostItem key={post.id} id={post.id} username={post.username} 
                        imageUrl={post.imageUrl} caption={post.caption}
                        avatarPhoto={post.avatarPhoto} 
                        externalShareLink={post.externalShareLink}
                        postId={post.id}
                        comments={post.comments}
                        numFaves={post.numFaves}
                        numComments={post.numFaves}
                        data-testid="postItemElement"
                        />;
            })}
            
        </div>
     
    );
}

export default Posts;