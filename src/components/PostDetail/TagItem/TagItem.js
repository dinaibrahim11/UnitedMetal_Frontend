import React, { Fragment, useState } from 'react';
import classes from './TagItem.module.css';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const TagItem = (props) => {

    const [showDeleteTag, setShowDeleteTag] = useState(false);

    const handleShowDeleteTag = () => {
        if (props.editable) {
            setShowDeleteTag(true);
        }
    }

    const handleHideDeleteTag = () => {
        setShowDeleteTag(false);
    }

    const handleDeleteTag = () => {
        // TODO: send delete request
        axios.delete(`photo/${props.photoId}/tags`,{
            tags: props.tagText
        }, { 
            headers: {
            "authorization": `Bearer ${props.token}` 
        }}).then(res => {
            console.log("REMOVE TAG");
            console.log(res);
        }).catch(err => {
            console.log("ERROR removing tag");
            console.log(err.response);
        })
    }

    return (
        <Fragment>
            <li onMouseEnter={handleShowDeleteTag} onMouseLeave={handleHideDeleteTag} className={classes.tag}>
                {props.tagName} {" "} {showDeleteTag && <CloseIcon style={{height: '20px'}} onClick={handleDeleteTag} />}
            </li>
        </Fragment>
    )
}

export default TagItem;