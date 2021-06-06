import React, { Fragment, useState } from 'react';
import classes from './TagItem.module.css';
import CloseIcon from '@material-ui/icons/Close';
import API from '../../../fakeAPI';
import { useSelector } from 'react-redux';


/**
 * A tag item display holds a tagText with hovering functionality to remove the tag
 * @param {bool} editable   - can edit the tag or not 
 * @param {string} photoId  - id of the photo/post
 * @param {string} tagText  - the text content of the tag
 * @returns {component}
 */
const TagItem = (props) => {

    const [showDeleteTag, setShowDeleteTag] = useState(false);
    const token = useSelector(state => state.users.currentUser.token);


    const handleShowDeleteTag = () => {
        if (props.editable) {
            setShowDeleteTag(true);
        }
    }

    const handleHideDeleteTag = () => {
        setShowDeleteTag(false);
    }

    const handleDeleteTag = () => {
        
        API.delete(`photo/${props.photoId}/tags`, { 
            headers: {
                "Authorization": `Bearer ${token}` 
        }}, {
            tags: props.tagText
        }).then(res => {
            console.log("REMOVE TAG");
            console.log(res);
        }).catch(err => {
            console.log("ERROR removing tag");
            console.log(props.tagText);
            console.log(props.photoId);
            console.log(token)
            console.log(err.response);
        })
    }

    return (
        <Fragment>
            <li onMouseEnter={handleShowDeleteTag} onMouseLeave={handleHideDeleteTag} className={classes.tag} data-testid="tag-text">
                {props.tagName} {" "} {showDeleteTag && <CloseIcon style={{height: '20px'}} onClick={handleDeleteTag} />}
            </li>
        </Fragment>
    )
}

export default TagItem;