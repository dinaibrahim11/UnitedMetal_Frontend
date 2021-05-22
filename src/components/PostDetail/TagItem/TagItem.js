import React, { Fragment, useState } from 'react';
import classes from './TagItem.module.css';
import CloseIcon from '@material-ui/icons/Close';

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
    }

    return (
        <Fragment>
            <li onMouseEnter={handleShowDeleteTag} onMouseLeave={handleHideDeleteTag} className={classes.tag}>
                {props.tagName} {" "} {showDeleteTag && <CloseIcon style={{height: '20px'}} onClick={() => alert("hi")} />}
            </li>
        </Fragment>
    )
}

export default TagItem;