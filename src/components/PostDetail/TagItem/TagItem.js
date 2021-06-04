import React, { Fragment, useState } from 'react';
import classes from './TagItem.module.css';
import CloseIcon from '@material-ui/icons/Close';
import API from '../../../fakeAPI';
import { useSelector } from 'react-redux';

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
            <li onMouseEnter={handleShowDeleteTag} onMouseLeave={handleHideDeleteTag} className={classes.tag}>
                {props.tagName} {" "} {showDeleteTag && <CloseIcon style={{height: '20px'}} onClick={handleDeleteTag} />}
            </li>
        </Fragment>
    )
}

export default TagItem;