import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem/PostItem';
import { useDispatch } from 'react-redux';
import ActivityView from './ActivityView';
import API from '../../fakeAPI';

const Posts = () => {

    const dispatch = useDispatch();

    const [postsFeed, setPostsFeed] = useState([]);

    useEffect(() => {
        API.get("posts")
            .then(res => {
                setPostsFeed(res.data);
            })
    }, [dispatch]);

    return (
        <div style={{margin: 'auto 10px', maxWidth: '600px'}}>
            
            <ActivityView />
            
            {postsFeed.map((post) => {
                return <PostItem key={post.id} id={post.id} username={post.username} 
                        imageUrl={post.imageUrl} caption={post.caption}
                        avatarPhoto={post.avatarPhoto} 
                        externalShareLink={post.externalShareLink}
                        postId={post.id}
                        comments={post.comments}
                        numFaves={post.numFaves}
                        numComments={post.numFaves}
                        />;
            })}
            
        </div>
     
    );
}

export default Posts;