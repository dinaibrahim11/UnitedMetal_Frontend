import React from 'react';
import PostItem from '../PostItem/PostItem';

import { useSelector } from 'react-redux';

import ActivityView from './ActivityView';

const Posts = () => {

    const postsFeed = useSelector(state => state.posts.feed);
    
    return (
        <div style={{margin: 'auto 10px', maxWidth: '600px'}}>
            
            <ActivityView />
            
            {postsFeed.map((post) => {
                return <PostItem key={post.postId} id={post.postId} username={post.username} 
                        imageUrl={post.imageUrl} caption={post.caption}
                        avatarPhoto={post.avatarPhoto} 
                        externalShareLink={post.externalShareLink}
                        postId={post.postId}
                        comments={post.comments}
                        numFaves={post.numFaves}
                        numComments={post.numFaves}
                        />;
            })}
            
        </div>
     
    );
}

export default Posts;