import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import classes from './PhotoDescription.module.css'

const PhotoDescription = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [isEditable, setIsEditable] = useState(false);


    const handleEditDescription = () => {
        setIsEditable(true);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleEditDescriptionKeyDown = (event) => {
        if (event.key == 'Enter') {
            setIsEditable(false);
            // TODO: handle async requests
            // API.patch()
            //     .then(res)
            //     .catch(err)

        }
    }

    const editableContent = (
        <div className={classes.editable}>
            <input type="text" value={title} onKeyDown={handleEditDescriptionKeyDown} onChange={handleTitleChange} />
            <textarea 
                value={description} 
                placeholder="Add a description" 
                onKeyDown={handleEditDescriptionKeyDown}
                onChange={handleDescriptionChange}
            />
        </div>
    );

    const staticContent = (
        <div onClick={handleEditDescription} className={classes.description}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );

    return (
        <Fragment>
            {(props.isEditable && isEditable) ? editableContent : staticContent}
        

        </Fragment>
    );
}

export default PhotoDescription;