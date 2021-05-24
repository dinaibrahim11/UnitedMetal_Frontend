import React, { Fragment, useState } from 'react';
import classes from './AlbumItem.module.css';
import CloseIcon from '@material-ui/icons/Close';


const AlbumItem = (props) => {

    const handleRemoveFromAlbum = () => {
        props.onDeleteAlbum();
    }

    return (
        <li className={classes.album__item}>
            <img src={props.photoSrc} />
            <span className={classes.album__title}>{props.albumTitle}</span>
            <CloseIcon onClick={handleRemoveFromAlbum} style={{float: 'right', cursor: 'pointer'}} />
            <span className={classes.album__photos__count}>{props.itemsCount} item</span>
        </li>
    );
}

export default AlbumItem;