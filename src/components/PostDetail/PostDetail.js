import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './PostDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import { BsDownload } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
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
import Comments from './Comments/Comments';
import GalleryItem from './GalleryItem/GalleryItem';
import ShareModal from '../UI/ShareModal/ShareModal';
import axios from 'axios';
import { useHistory } from "react-router-dom";

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
    const history = useHistory();


    const postId = props.match.params.id;
    const [post, setPost] = useState({});
    const [userDisplayName, setUserDisplayName] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatarPhoto, setAvatarPhoto] = useState('');
    const [followingMenuOpen, setFollowingMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [friendChecked, setFriendChecked] = useState(false);
    const [familyChecked, setFamilyChecked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isOpenGalleryModal, setIsOpenGalleryModal] = useState(false);
    const [isOpenAlbumModal, setIsOpenAlbumModal] = useState(false);
    const [canAddTag, setCanAddTag] = useState(false);
    const [tags, setTags] = useState([]);
    const [showAddTag, setShowAddTag] = useState(false);
    const [addTagValue, setAddTagValue] = useState(null);
    const [isPhotoMine, setIsPhotoMine] = useState(false); //check if this is the current user's photo
    const [showAlbumCloseThumbnail, setShowAlbumCloseThumbnail] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [isFaved, setIsFaved] = useState();
    const [favedPhotos, setFavedPhotos] = useState([]);
    const [imgSrc, setImgSrc] = useState('');
    const [isShareModalOpen, setIsShareModalOpen] = useState(false); //redundant
    const [photo, setPhoto] = useState(null);
    const [dateUploaded, setDateUploaded] = useState(null);

    const rerender = useSelector(state => state.users.toggle); //when a new comment is added, rerender
    const loggedInUserFaves = useSelector(state => state.users.currentUser.favedPhotos);

    const tmpToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjY1ODg0MWQ1OTNjNjVjOGMxYTc5OCIsImlhdCI6MTYyMjU3NjgyMywiZXhwIjoxNjMwMzUyODIzfQ.8mCry7WtW7Z7OkhKTF13UWO_H_SDt2VAF49ucCwyDpk";

    //const tmpPhotoId = "60b57a56eb47f20b64271884";
    const tmpPhotoId = "60b6614e1d593c65c8c1a79e";
    const tmpUserId = "60b658841d593c65c8c1a798";
    let ownerId = null;


    useEffect(() => {
        // API.get(`photos/${postId}`)
        //     .then(res => {
        //         setPost(res.data);
        //         setIsFollowing(res.data.isFollowing);
        //     });

        axios.get(`http://localhost:7000/photo/${postId}`)
            .then(res => {
                
                setPhoto(res.data.data);
                setTags(res.data.data.tags);
                
            })

        axios.get(`http://localhost:7000/photo/${tmpPhotoId}`)
            .then(res => {
                console.log("Photo details")
                console.log(res);
                //console.log(res.data.data.userId);
                setImgSrc(res.data.data.sizes.size.large.source);
            }).catch(err => {
                console.log("[PostDetail]::ERROR");
                console.log(err.response);
            })
            
        axios.get(`http://localhost:7000/user/${tmpUserId}/real-name`)
            .then(res => {
                setFirstName(res.data.data.firstName);
                setLastName(res.data.data.lastName);
            }).catch(err => {
                console.log("[PostDetail]::RealName")
            });

        axios.get(`http://localhost:7000/user/${tmpUserId}/faves`)
            .then(res => {
                console.log("FAVED");
                if (res.data.status === 'success') {
                    dispatch(usersActions.setFavedPhotos(res.data.data.favourites));
                    setFavedPhotos(res.data.data.favourites);
                }
                console.log(res)
                
            }).catch(err => {
                console.log(err.response);
            });

        for (let i = 0; i < favedPhotos.length; i++) {
            if (favedPhotos[i].userId._id === tmpUserId) {
                setIsFaved(true);
                dispatch(usersActions.toggleComments());
                //window.location.reload(true);
                break;
            }
        }

    }, [postId, rerender]);

    useEffect(() => {
        //TODO: should be changed to ${currentUserId}
        API.get(`users/400/albums`)
            .then(res => {
                setAlbums(res.data);
                
            }).catch(err => {
                console.log(err);
            });

        API.get(`users/400/galleries`)
        .then(res => {
            setGalleries(res.data);
            console.log(res.data);
            
        }).catch(err => {
            console.log(err);
        });
        
        axios.get(`http://localhost:7000/user/${tmpUserId}/faves`)
            .then(res => {
                console.log("FAVED");
                if (res.data.status === 'success') {
                    dispatch(usersActions.setFavedPhotos(res.data.data.favourites));
                    setFavedPhotos(res.data.data.favourites);
                }
                console.log(res)
                
            }).catch(err => {
                console.log(err.response);
            });

        for (let i = 0; i < favedPhotos.length; i++) {
            if (favedPhotos[i].userId._id === tmpUserId) {
                setIsFaved(true);
                dispatch(usersActions.toggleComments());
                //window.location.reload(true);
                break;
            }
        }

    }, [currentUserId, rerenderAlbums])


    const handleFav = () => {
        
        if (isFaved) {
            axios.delete(`http://localhost:7000/user/faves/${postId}`, { 
                headers: {
                    "Authorization": `Bearer ${tmpToken}` 
                }})
                .then(res => {
                    console.log("REMOVING A FAVE");
                    console.log(res);
                    
                }).catch(err => {

                });
                setIsFaved(false);
        } else {
            axios.post(`http://localhost:7000/user/faves/${postId}`,{},{ 
                headers: {
                "Authorization": `Bearer ${tmpToken}` 
                }})
                .then(res => {
                    console.log("ADDING A FAV");
                    console.log(res);
                    setIsFaved(true);
                }).catch(err => {
                    console.log(err.response);
                });
                setIsFaved(true);
        }

        //setIsFaved(prevFav => !prevFav);
        //window.location.reload(true);
    }

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
            axios.post(`http://localhost:7000/photo/${postId}/tags`, {
                tags: addTagValue
            },
            { 
                headers: {
                "Authorization": `Bearer ${tmpToken}` 
            }}).then(res => {
                console.log("TAGS");
                console.log(res);
            }).catch(err => {

            });

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

    const handleDeleteFromGallery = (galleryId) => {
        //alert("deleting albumId: "+albumId);
        API.delete(`/galleries/${+galleryId}`)
            .then(res => {
                dispatch(usersActions.deleteFromAlbumToggle());
            }).catch(err => {
                console.log(err)
            })
    }

    const handleDownloadPhoto = (event) => {
        // TODO: make API request
    }

    
    // ********** Share Modal *************

    const handleOpenShareModal = (event) => {
        console.log("Share clicked");
        setIsShareModalOpen(true);
    }

    const handleCloseShareModal = () => {
        setIsShareModalOpen(false);
    }

    const handleGoToHome = () => {
        history.push("/home");
    }

    const handleGoToProfile = () => {
        history.push(`/user/${tmpUserId}`);
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <div className={classes.image__view}>
                <div className={classes.back} onClick={handleGoToHome}>
                    ← Back to home
                </div>
                <Zoom
                    image={{
                    //src: `${post.imageUrl}`,
                    src: `${imgSrc}`,
                    alt: 'photo detail',
                    className: `${classes.image__view_img}`,
          
                    }}
                    zoomImage={{
                    src: `${imgSrc}`,
                    alt: 'photo detail large'
                    }}
                />
                {/* <img className={classes.image__view_img} src={post.imageUrl} alt="" /> */}
                {isFaved ? <AiFillStar id="photo-like-filled-btn" onClick={handleFav} className={`${classes.buttons} ${classes.image__view_fav}`} style={{color: 'white'}}/> : <AiOutlineStar id="photo-like-unfilled-btn" onClick={handleFav} className={`${classes.buttons} ${classes.image__view_fav}`} style={{color: 'white'}} />}
                <FaRegShareSquare onClick={() => setIsShareModalOpen(true)} className={`${classes.buttons} ${classes.image__view_share}`} style={{color: 'white'}}/>
                <BsDownload onClick={handleDownloadPhoto} className={`${classes.buttons} ${classes.image__view_download}`} style={{color: 'white'}} />
                <ShareModal 
                    isShareModalOpen={isShareModalOpen} 
                    handleCloseShareModal={handleCloseShareModal}
                    modalTitle="Share the photo"
                    externalShareLink={imgSrc}
                />
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
                                <Avatar src="" />
                            </div>
                            <p onClick={handleGoToProfile} className={classes.real__name} >{firstName}{" "}{lastName}</p>
                            {/* <button className={classes.follow__button}>Following</button> */}
                            {isPhotoMine ? null : isFollowing ? <FollowingButton onClickUnFollow={handleUnFollow} /> : <FollowButton onClickFollow={handleFollowClick} />}
                            
                        </div>
                        <div style={{display: 'flex'}}>
                            <button className={classes.pro__button} >PRO</button>
                            <PhotoDescription postId={postId} isEditable={!isPhotoMine} title="Title" description="This is a description" />
                        </div>
                        <Comments isPhotoMine={isPhotoMine} userId={photo && photo.userId} photoId={postId}/>

                        <div>
                            
                        </div>
                    </div>
                    <div className={classes.sub__photo__right__view}>
                        {/* right */}
                        <div className={classes.sub__photo__right__row1}>
                            <div className={classes.sub__photo__right__stats__view}>
                                <div className={classes.right__stats_details__container}>
                                    <div className={classes.stat__item}>
                                        <span>{photo && photo.views}</span>
                                        <span className={classes.stats__label}>views</span>
                                    </div>
                                    <div className={classes.stat__item}>
                                        <span>{photo && photo.favourites}</span>
                                        <span className={classes.stats__label}>faves</span>
                                    </div>
                                    <div className={classes.stat__item}>
                                        <span>{photo && photo.comments.length}</span>
                                        <span className={classes.stats__label}>comments</span>
                                    </div>
                                </div>
                                <div className={classes.date__taken}>
                                    {photo && <span>Taken on {photo.dateUploaded.slice(0, 10)}</span> }
                                </div>
                            </div>
                        </div>
                        <div className={classes.sub__photo__right__row2}>
                            <CameraMetadata photoId={postId} cameraName="Nikon" lensString="16.0-35.0 mm" focalLength="f/4.0"/>
                        </div>
            
                        <div className={classes.sub__photo__right__row3}>
                            <div className={classes.galleries}>
                                <h5 className={classes.galleries__count}>
                                    This photo is in {galleries.length} galleries
                                </h5>
                                <p className={classes.add__to__gallery}
                                onClick={handleOpenGalleryModal}
                                >Add to gallery</p>
                                <AddToGalleryModal openGalleryModal={isOpenGalleryModal}
                                closeGalleryModal={handleCloseGalleryModal}/>

                                <ul className={classes.albums__list}>
                                    {galleries.map(gallery => (
                                        <GalleryItem onDeleteGallery={() => handleDeleteFromGallery(gallery.id)} 
                                            key={gallery.id} galleryId={gallery.id} 
                                            photoSrc={gallery.photoSrc} 
                                            galleryTitle={gallery.title} 
                                            itemsCount={gallery.itemsCount} 
                                            isPhotoMine={isPhotoMine}
                                        />
                                    ))}
                                </ul>

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
                                    {tags.map(tag => <TagItem tagText={tag} token={tmpToken} photoId={postId} tagName={tag} editable={true}/>)}
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