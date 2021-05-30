import React, { Fragment, useState } from 'react';
import classes from './GalleryItem.module.css';
import CloseIcon from '@material-ui/icons/Close';


const GalleryItem = (props) => {

    const handleRemoveFromGallery = () => {
        props.onDeleteGallery();
    }

    return (
        <li className={classes.gallery__item}>
            <img src={props.photoSrc} />
            <span className={classes.gallery__title}>{props.galleryTitle}</span>
            {props.isPhotoMine && <CloseIcon onClick={handleRemoveFromGallery} style={{float: 'right', cursor: 'pointer'}} />}
            <span className={classes.gallery__photos__count}>{props.itemsCount} item</span>
        </li>
    );
}

export default GalleryItem;