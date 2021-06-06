import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import API from '../../fakeAPI';
import { useHistory } from "react-router-dom";

/**
 * Responsible for returning the 
 * @param {properties} props 
 * @returns {element} the Photostream components
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '250px'
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

/**
 * @function YouPhotostream
 * @author Dina Mohsen
 * using flickr library for styling
 */
export default function PhotoStream(props) {
  const classes = useStyles();
    const history = useHistory();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        API.get(`user/${props.userId}/stream`, { 
            headers: {
                "authorization": `Bearer ${props.token}` 
            }}).then(res => {
            console.log("PHOTOSTREAM");
            console.log(props.userId);
            console.log(res);
            setPhotos(res.data.data.photos.photos);
        }).catch(err => {
            console.log(err.response);
        });

    }, []);

    const goToImage = (photoId) => {
        history.push(`/photos/${photoId}`);
    }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4} >
        {photos.map((tile) => (
          <GridListTile key={tile._id} cols={tile.cols || 1} onClick={() => goToImage(tile._id)}>
            <img src={tile.sizes.size.original.source} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}