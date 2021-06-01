import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import classes from './PhotoDescription.module.css'
import axios from 'axios';

const PhotoDescription = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [isEditable, setIsEditable] = useState(false);
    const [titleOrDescriptionChanged, setTitleOrDescriptionChanged] = useState(false);

    const tmpToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjY1ODg0MWQ1OTNjNjVjOGMxYTc5OCIsImlhdCI6MTYyMjU3NjgyMywiZXhwIjoxNjMwMzUyODIzfQ.8mCry7WtW7Z7OkhKTF13UWO_H_SDt2VAF49ucCwyDpk";


    useEffect(() => {
        axios.get(`http://localhost:7000/photo/${props.postId}`)
            .then(res => {
                setTitle(res.data.data.title);
                setDescription(res.data.data.description);
            }).catch(err => {
                
            })
    }, [titleOrDescriptionChanged]);


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
            axios.patch(`http://localhost:7000/photo/${props.postId}`, {
            title: title,
            description: description
            }, { 
                headers: {
                "Authorization": `Bearer ${tmpToken}` 
            }}).then(res => {
                console.log("EDITING title and description");
                console.log(res);
            }).catch(err => {
                console.log(err.response);
                console.log(props.postId);
            })

        }
    }

    const handleCloseInfoChange = () => {
        setIsEditable(false);
        axios.patch(`http://localhost:7000/photo/${props.postId}`, {
            title: title,
            description: description
        }, { 
            headers: {
            "Authorization": `Bearer ${tmpToken}` 
        }}).then(res => {
            console.log("EDITING title and description");
            console.log(res);
        }).catch(err => {
            console.log(err.response);
            console.log(props.postId);
        })
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
            <button onClick={handleCloseInfoChange} id="photo-detail-done-btn" className={classes.add__comment__button}  >Done</button>

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
            {(props.isEditable && isEditable) ? <>
                {editableContent}

                </> : staticContent}
        

        </Fragment>
    );
}

export default PhotoDescription;