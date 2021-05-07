import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, Menu, MenuItem } from '@material-ui/core';
import classes from './PostItem.module.css';
import PostHeader from './PostHeader/PostHeader';
import PostPhoto from './PostPhoto/PostPhoto';
import PostFooter from './PostFooter/PostFooter';
import { usersActions } from '../../storev2/users-slice';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../fakeAPI';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

/**
 * A single post item which contains the name+photo of the owner,
 * and the actual photo that the owner posted.
 * @author Abdelrahman Mamdouh
 * @param {number} postId - Id of the photo/post
 * @param {number} id - Id of the photo/post
 * @param {string} username - Username of the owner of the photo/post
 * @param {string} imageUrl - Link of the photo/post
 * @param {string} avatarPhoto - Link of the avatar photo of the owner
 * @param {number} numFaves - Number of favorites on the photo/post
 * @param {number} numComments - Number of comments on the photo/post
 * @param {string} caption - Description or caption that is below the photo/post
 * @returns (
 *      <PostHeader />
 *      <PostPhoto />
 *      <PostFooter />
 * )
 */
const PostItem = (props) => {

    const [isFaved, setIsFaved] = useState(false);
    const [countFaves, setCountFaves] = useState(0);
    const [moreIsShown, setMoreIsShown] = useState(false); //more menu in top right corner of the post
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false); //redundant
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const [comments, setComments] = useState([]);

    const rerender = useSelector(state => state.users.toggle); //when a new comment is added, rerender

    const dispatch = useDispatch();

    /**
     * Get all the comments for this specific post/photo
     */
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
        setMoreIsShown(false);
    }

    const handleCloseShareModal = () => {
        setIsShareModalOpen(false);
        setAnchorEl(null);
        setMoreIsShown(false);
    }

    const dummyClick = () => {
        //console.log("clicked menu item");
        setMoreIsShown(false);
    }

    const handleCopyToClipboard = () => {
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 1000);
    }


    return (
        <Card className={classes.post} >
            <PostHeader data-testid="postHeader" avatar={props.avatarPhoto} username={props.username} onClickMore={showMoreHandler}/>
            <Menu id="simple-menu" open={moreIsShown} onClose={closeMoreHandler} keepMounted anchorEl={anchorEl}>
                <MenuItem onClick={handleOpenShareModal} data-testid="shareButton">Share</MenuItem>
                <MenuItem onClick={dummyClick}>Go to profile</MenuItem>
            </Menu>

    <Modal
     show={isShareModalOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleCloseShareModal}
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share the photo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          External Share Link
        </h6>
        <CopyToClipboard style={{float: 'right', marginTop: '60px', marginRight: '20px'}} text={props.externalShareLink} onCopy={handleCopyToClipboard}>
            <span>{isLinkCopied ? "Copied!" : <FileCopyOutlinedIcon />}</span>
          </CopyToClipboard>
        <input
            style={{fontSize: '15px', width: '70%', textAlign: 'center', display: 'block', margin: '70px auto', padding: '0 40px', height: '53px' }} 
            readonly="" type="text" class="grab-link-text-field" value={props.externalShareLink} id="yui_3_16_0_1_1618999453530_59005"></input>
      </Modal.Body>

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

PostItem.propTypes = {
    /**
     * id of the post
     */
    id: PropTypes.number.isRequired,
    /**
     * id of the post
     */
    postId: PropTypes.number.isRequired,
    /**
     * name of the owner of the post/photo
     */
    username: PropTypes.string.isRequired,
    /**
     * avatar photo of the owner of the post/photo
     */
    avatarPhoto: PropTypes.string.isRequired,
    /**
     * link of the photo
     */
    imageUrl: PropTypes.string.isRequired,
    /**
     * description or caption that is below the image
     */
    caption: PropTypes.string.isRequired,
    /**
     * count of people who favorited the post/photo 
     */
    numFaves: PropTypes.number.isRequired,
    /**
     * number of people commented (optional)
     */
    numComments: PropTypes.number
}

export default PostItem;
