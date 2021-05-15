import React, { Fragment, useEffect, useState } from 'react';
import classes from './PostDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import { BsDownload } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

import API from '../../fakeAPI';


/**
 * Displays the details of a photo (img, comments, faves, metadata, owner)
 * @async
 * @param {number} postId - The id of the photo/post, takes it from the url
 * @example <PostDetail />
 * 
 */
const PostDetail = (props) => {

    const postId = props.match.params.id;
    const [post, setPost] = useState({});
    const [userDisplayName, setUserDisplayName] = useState("Abdelrahman Mamdouh");
    const [avatarPhoto, setAvatarPhoto] = useState('');

    useEffect(() => {
        API.get(`posts/${postId}`)
            .then(res => {
                setPost(res.data);
            })
    }, [postId]);

    return (
        <Fragment>

            <div className={classes.image__view}>
                <div className={classes.back}>
                    ← Back to home
                </div>
                <img className={classes.image__view_img} src={post.imageUrl} alt="" />
                <AiOutlineStar className={`${classes.buttons} ${classes.image__view_fav}`} style={{color: 'white'}} />
                <FaRegShareSquare className={`${classes.buttons} ${classes.image__view_share}`} style={{color: 'white'}}/>
                <BsDownload className={`${classes.buttons} ${classes.image__view_download}`} style={{color: 'white'}} />
                {/* <button>Download</button>
                <button>Share</button>
                <button>Fave</button> */}
            </div>

            {/* <div className={classes.main__content}>
            <div className={classes.grid__parent}>
                <div className={classes.left}>Profile Info</div>
                <div className={classes.right}>Meta data</div>
                
            </div>
            </div> */}

            <div className={classes.sub__photo__container}>
                <div className={classes.sub__photo__content__container}>
                    <div className={classes.sub__photo__left__view}>
                        <div className={classes.user__header}>
                            <div style={{marginRight: '20px'}}>
                                <Avatar src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" />
                            </div>
                            <p>{userDisplayName}</p>
                            <button className={classes.follow__button}>Following</button>
                        </div>
                        <div style={{display: 'flex'}}>
                            <button className={classes.pro__button} >PRO</button>
                            <p className={classes.description}>This is a description</p>
                        </div>
                        <div>
                            <p>comments</p>
                        </div>
                    </div>
                    <div className={classes.sub__photo__right__view}>
                        right
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default PostDetail;