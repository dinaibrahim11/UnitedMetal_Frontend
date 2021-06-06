import React from 'react';
import classes from './AlbumItem.module.css';
import CloseIcon from '@material-ui/icons/Close';

/**
 * 
 * @param {function} onDeleteAlbum - delete from the selected album
 * @param {number} itemsCount - number of images inside the album item
 * @param {string} albumTitle - title of the album
 * @param {string} photoSrc - image link
 * @returns 
 */
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