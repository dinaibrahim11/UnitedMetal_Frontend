import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, Menu, MenuItem } from '@material-ui/core';
import classes from './PostItem.module.css';
import PostHeader from './PostHeader/PostHeader';
import PostPhoto from './PostPhoto/PostPhoto';
import PostFooter from './PostFooter/PostFooter';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { usersActions } from '../../storev2/users-slice';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../fakeAPI';


const PostItem = (props) => {

    const [isFaved, setIsFaved] = useState(false);
    const [countFaves, setCountFaves] = useState(0);
    const [moreIsShown, setMoreIsShown] = useState(false); //more menu in top right corner of the post
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false); //redundant

    const [comments, setComments] = useState([]);

    const rerender = useSelector(state => state.users.toggle); //when a new comment is added, rerender

    const dispatch = useDispatch();

    useEffect(() => {
        API.get(`posts/${props.postId}/comments`)
            .then(res => {
                setComments(res.data);
            });
            
    }, [props.postId, rerender]);
    
    const handleFav = () => {
        if (isFaved) {
            setCountFaves(prevCount => prevCount - 1);
            dispatch(usersActions.removeFavedPhoto(props.id));
        } else {
            setCountFaves(prevCount => prevCount + 1);
            dispatch(usersActions.addSingleFavedPhoto({
                id: props.id,
                owner: props.username,
                url: props.imageUrl
            }))
        }
    }

    const showMoreHandler = (event) => {
        setAnchorEl(event.currentTarget);
        setMoreIsShown(true);
    }

    const closeMoreHandler = () => {
        setAnchorEl(null);
        setMoreIsShown(false);
    }

    const handleOpenShareModal = (event) => {
        console.log("Share clicked");
        setIsShareModalOpen(true);
        //setAnchorEl(event.currentTarget);

    }

    const handleCloseShareModal = () => {
        setIsShareModalOpen(false);
        setAnchorEl(null);
        setMoreIsShown(false);
    }

    const dummyClick = () => {
        //console.log("clicked menu item");
    }

    return (
        <Card className={classes.post}>
            <PostHeader avatar={props.avatarPhoto} username={props.username} onClickMore={showMoreHandler}/>
            <Menu id="simple-menu" open={moreIsShown} onClose={closeMoreHandler} keepMounted anchorEl={anchorEl}>
                <MenuItem onClick={handleOpenShareModal} >Share</MenuItem>
                <MenuItem onClick={dummyClick}>Go to profile</MenuItem>
                
            </Menu>

            <Modal 
                open={isShareModalOpen}
                onClose={handleCloseShareModal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                BackdropComponent={Backdrop}
                className={classes.modal}
                closeAfterTransition
                BackdropProps={{
                timeout: 500
                }}
            >
                <Fade in={isShareModalOpen} >
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" style={{margin: '30px auto auto 10px'}}>Share the photo</h2>
                        <p id="transition-modal-description">
                        External Share Link
                        </p>
                        <input
                            style={{fontSize: '15px', width: '70%', textAlign: 'center', display: 'block', margin: '70px auto', padding: '0 40px', height: '53px' }} 
                            readonly="" type="text" class="grab-link-text-field" value={props.externalShareLink} id="yui_3_16_0_1_1618999453530_59005"></input>
                    </div>
                </Fade>
            </Modal>

            <PostPhoto postId={props.postId} description={props.caption} imageUrl={props.imageUrl}/>

            <CardActionArea >
                <PostFooter 
                    isFaved={isFaved}
                    setIsFaved={setIsFaved}
                    handleFav={handleFav}
                    countFaves={countFaves+props.numFaves}
                    countComments={props.numComments}
                    postId={props.postId}
                    comments={comments}
                />
            </CardActionArea>

        </Card>
    );
}

export default PostItem;
