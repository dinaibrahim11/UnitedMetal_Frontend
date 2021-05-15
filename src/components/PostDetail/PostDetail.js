import React, { Fragment, useEffect, useState } from 'react';
import classes from './PostDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import { BsDownload } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import API from '../../fakeAPI';
import FollowButton from './FollowButton/FollowButton';
import FollowingButton from './FollowingButton/FollowingButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

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
    const [followingMenuOpen, setFollowingMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [friendChecked, setFriendChecked] = useState(false);
    const [familyChecked, setFamilyChecked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);


    useEffect(() => {
        API.get(`photos/${postId}`)
            .then(res => {
                setPost(res.data);
                setIsFollowing(res.data.isFollowing);
            })
    }, [postId]);



    const handleOpenFollowing = (event) => {
        setFollowingMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleCloseFollowingPopover = () => {
        setFollowingMenuOpen(false);
        setAnchorEl(null);
    }

    const handleFriendCheckboxChange = (event) => {
        setFriendChecked(event.target.checked);
    }

    const handleFamilyCheckboxChange = (event) => {
        setFamilyChecked(event.target.checked);
    }

    const handleFollowClick = (event) => {
        setIsFollowing(true);
        API.patch(`photos/${postId}`, {
            isFollowing: true
        }).then(res => {

        });
    }

    const handleUnFollow = (event) => {
        setIsFollowing(false);
        API.patch(`photos/${postId}`, {
            isFollowing: false
        }).then(res => {
            
        });
            
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                            {/* <button className={classes.follow__button}>Following</button> */}
                            {isFollowing ? <FollowingButton onClickUnFollow={handleUnFollow} /> : <FollowButton onClickFollow={handleFollowClick} />}
                            
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