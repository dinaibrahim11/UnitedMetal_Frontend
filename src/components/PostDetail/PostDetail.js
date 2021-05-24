import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './PostDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import { BsDownload } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Divider from '@material-ui/core/Divider';
import API from '../../fakeAPI';
import FollowButton from './FollowButton/FollowButton';
import FollowingButton from './FollowingButton/FollowingButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NewComment from '../PostItem/NewComment/NewComment';
import CameraMetadata from './CameraMetadata/CameraMetadata';
import AddToGalleryModal from './AddToGalleryModal/AddToGalleryModal';
import AddToAlbumModal from './AddToAlbumModal/AddToAlbumModal';
import Zoom from 'react-medium-image-zoom';
import TagItem from './TagItem/TagItem';
import CloseIcon from '@material-ui/icons/Close';
import AlbumItem from './AlbumItem/AlbumItem';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../storev2/users-slice';
import PhotoDescription from './PhotoDescription/PhotoDescription';


const tmpPhoto = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
const tmpPhoto2 = "https://live.staticflickr.com/65535/51183971863_f3c8c7e14d_s.jpg";
const tmpPhoto3 = "https://live.staticflickr.com/1965/30720390577_68227d3fa9_s.jpg";
const DUMMY_TAGS = ["2021","cats","scene","background","1999","ocean","blues","awesome",
                    "hilarious","great","awkward","lame","ohhh"]
const DUMMY_ALBUMS = [{id: "1", photoSrc: tmpPhoto2, itemsCount: 1, title: "Green"}, {id: "2", photoSrc: tmpPhoto3, itemsCount: 3, title: "Cool Cats"}];

/*
"albums": [
    {
      "id": 1,
      "userId": 400,
      "photoSrc": "https://live.staticflickr.com/65535/51183971863_f3c8c7e14d_s.jpg",
      "title": "Green",
      "itemsCount": 1
    },
    {
      "id": 2,
      "userId": 400,
      "photoSrc": "https://live.staticflickr.com/1965/30720390577_68227d3fa9_s.jpg",
      "title": "Awesome Cats",
      "itemsCount": 3
    },
    {
      "id": 3,
      "userId": 200,
      "photoSrc": "https://live.staticflickr.com/65535/51183971863_f3c8c7e14d_s.jpg",
      "title": "Green",
      "itemsCount": 5
    }
  ],

*/

/**
 * Displays the details of a photo (img, comments, faves, metadata, owner)
 * @async
 * @param {number} postId - The id of the photo/post, takes it from the url
 * @example <PostDetail />
 * 
 */
const PostDetail = (props) => {

    const currentUserId = useSelector(state => state.users.currentUser.userId);
    const rerenderAlbums = useSelector(state => state.users.albumsToggle);
    const dispatch = useDispatch();

    const postId = props.match.params.id;
    const [post, setPost] = useState({});
    const [userDisplayName, setUserDisplayName] = useState("Abdelrahman Mamdouh");
    const [avatarPhoto, setAvatarPhoto] = useState('');
    const [followingMenuOpen, setFollowingMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [friendChecked, setFriendChecked] = useState(false);
    const [familyChecked, setFamilyChecked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isOpenGalleryModal, setIsOpenGalleryModal] = useState(false);
    const [isOpenAlbumModal, setIsOpenAlbumModal] = useState(false);
    const [canAddTag, setCanAddTag] = useState(false);
    const [tags, setTags] = useState(DUMMY_TAGS);
    const [showAddTag, setShowAddTag] = useState(false);
    const [addTagValue, setAddTagValue] = useState(null);
    const [isPhotoMine, _] = useState(true); //check if this is the current user's photo
    const [showAlbumCloseThumbnail, setShowAlbumCloseThumbnail] = useState(false);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        API.get(`photos/${postId}`)
            .then(res => {
                setPost(res.data);
                setIsFollowing(res.data.isFollowing);
            })
    }, [postId]);

    useEffect(() => {
        //TODO: should be changed to ${currentUserId}
        API.get(`users/400/albums`)
            .then(res => {
                setAlbums(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [currentUserId, rerenderAlbums])


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

    const handleOpenGalleryModal = () => {
        setIsOpenGalleryModal(true);
    }

    const handleCloseGalleryModal = () => {
        setIsOpenGalleryModal(false);
    }

    const handleOpenAlbumModal = () => {
        setIsOpenAlbumModal(true);
    }

    const handleCloseAlbumModal = () => {
        setIsOpenAlbumModal(false);
    }

    const handleShowAddTag = () => {
        setShowAddTag(true);
    }

    const handleAddTagChange = (event) => {
        setAddTagValue(event.target.value);
    }

    const handleAddTagKeyDown = (event) => {
        if (event.key === 'Enter') {
            setTags(prevTags => [...prevTags, addTagValue]);
            //setShowAddTag(false);
            setAddTagValue('');
        }
    }

    const handleDeleteFromAlbum = (albumId) => {
        //alert("deleting albumId: "+albumId);
        API.delete(`/albums/${+albumId}`)
            .then(res => {
                dispatch(usersActions.deleteFromAlbumToggle());
            }).catch(err => {
                console.log(err)
            })
    }

    

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>

            <div className={classes.image__view}>
                <div className={classes.back}>
                    ← Back to home
                </div>
                <Zoom
                    image={{
                    src: `${post.imageUrl}`,
                    alt: 'photo detail',
                    className: `${classes.image__view_img}`,
          
                    }}
                    zoomImage={{
                    src: `${post.imageUrl}`,
                    alt: 'photo detail large'
                    }}
                />
                {/* <img className={classes.image__view_img} src={post.imageUrl} alt="" /> */}
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
            <div className={classes.main__content}>
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
                            <PhotoDescription isEditable={isPhotoMine} title="Title" description="This is a description" />
                        </div>
                        <div className={classes.sub__photo__comments__view}>
                            {/* <p>comments</p> */}
                            <Divider style={{marginBottom: '20px'}}/>
                            <ul className={classes.comments}>
                                <li className={classes.comment}>
                                    <div className={classes.comment__icon}>
                                        <Avatar src="data:image/jpeg;base64,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" alt="userPhoto"/>
                                    </div>
                                    <p className={classes.comment__author}><Link className={classes.comment__author__link}>Bruce Wayne</Link>
                                    <span className={classes.comment__date}>7h</span>
                                    </p>
                                    <div className={classes.comment__content}>
                                        comment1
                                    </div>
                                </li>
                                <li className={classes.comment}>
                                    <div className={classes.comment__icon}>
                                        <Avatar src="data:image/jpeg;base64,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" alt="userPhoto"/>
                                    </div>
                                    <p className={classes.comment__author}><Link className={classes.comment__author__link}>Peter Parker</Link>
                                    <button className={classes.pro__button} >PRO</button>
                                    <span className={classes.comment__date}>7h</span>
                                    </p>
                                    <div className={classes.comment__content}>
                                        comment1
                                    </div>
                                </li>
                                <li className={classes.comment}>
                                    <div className={classes.comment__icon}>
                                        <Avatar src="data:image/jpeg;base64,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" alt="userPhoto"/>
                                    </div>
                                    <p className={classes.comment__author}><Link className={classes.comment__author__link}>Bruce Wayne</Link>
                                    <span className={classes.comment__date}>7h</span>
                                    </p>
                                    <div className={classes.comment__content}>
                                        comment1
                                    </div>
                                </li>
                            </ul>

                            {/* <NewComment /> */}
                            <div className={classes.comments__form}>
                                <div className={classes.comment__icon}>
                                    <Avatar src={tmpPhoto} />
                                </div>
                                <div className={classes.comment__form__field}>
                                    <textarea className={classes.new__comment}
                                        placeholder="Add a comment"
                                    ></textarea>
                                    <div className={classes.comment__arrow}></div>
                                </div>
                                <button className={classes.add__comment__button}>Comment</button>
                            </div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className={classes.sub__photo__right__view}>
                        {/* right */}
                        <div className={classes.sub__photo__right__row1}>
                            <div className={classes.sub__photo__right__stats__view}>
                                <div className={classes.right__stats_details__container}>
                                    <div className={classes.stat__item}>
                                        <span>1000</span>
                                        <span className={classes.stats__label}>views</span>
                                    </div>
                                    <div className={classes.stat__item}>
                                        <span>94</span>
                                        <span className={classes.stats__label}>faves</span>
                                    </div>
                                    <div className={classes.stat__item}>
                                        <span>371</span>
                                        <span className={classes.stats__label}>comments</span>
                                    </div>
                                </div>
                                <div className={classes.date__taken}>
                                    <span>Taken on December 14, 2020</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sub__photo__right__row2}>
                            <CameraMetadata cameraName="Nikon" lensString="16.0-35.0 mm" focalLength="f/4.0"/>
                        </div>
            
                        <div className={classes.sub__photo__right__row3}>
                            <div className={classes.galleries}>
                                <h5 className={classes.galleries__count}>
                                    This photo is in 5 galleries
                                </h5>
                                <p className={classes.add__to__gallery}
                                onClick={handleOpenGalleryModal}
                                >Add to gallery</p>
                                <AddToGalleryModal openGalleryModal={isOpenGalleryModal}
                                closeGalleryModal={handleCloseGalleryModal}/>
                            </div>
                        </div> 

                        {isPhotoMine && (
                        <div className={classes.sub__photo__right__row5}>
                            <div className={classes.galleries}>
                                <h5 className={classes.galleries__count}>
                                    This photo is in {albums.length} albums
                                </h5>
                                <p className={classes.add__to__gallery}
                                onClick={handleOpenAlbumModal}
                                >Add to album</p>
                                <AddToAlbumModal openGalleryModal={isOpenAlbumModal}
                                closeGalleryModal={handleCloseAlbumModal}/>

                                <ul className={classes.albums__list}>
                                    {albums.map(album => (
                                        <AlbumItem onDeleteAlbum={() => handleDeleteFromAlbum(album.id)} key={album.id} albumId={album.id} photoSrc={album.photoSrc} albumTitle={album.title} itemsCount={album.itemsCount} />
                                    ))}
                                </ul>
                            </div>
                        </div>              
                        )}
                        <div className={classes.sub__photo__right__row4}>
                            <div className={classes.tags__view}>
                                <h5 className={classes.tags__title}>Tags</h5>
                                <p onClick={handleShowAddTag} className={classes.add__tag}>Add tags</p>
                                {showAddTag && <input onKeyDown={handleAddTagKeyDown} onChange={handleAddTagChange} value={addTagValue} type="text" placeholder="Add a tag" className={classes.add__tag__input} />}
                                <ul className={classes.tags__list}>
                                    {tags.map(tag => <TagItem tagName={tag} editable={true}/>)}
                                </ul>
                            </div>
                        </div>   


                    </div>
                   
                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default PostDetail;