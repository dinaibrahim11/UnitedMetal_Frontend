import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import { CardActionArea, Menu, MenuItem } from '@material-ui/core';
import classes from './AlbumItem.module.css';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@material-ui/core';
import { Tooltip, IconButton } from '@material-ui/core';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { BsTrash } from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import { Redirect } from "react-router-dom";
import API from '../../fakeAPI';
import DeleteModal from '../AlbumItem/DeleteModal/DeleteModal'


/**
 * A single album item that contains name and photo count of the album,
 * and the primary photo of the album
 * @author Esraa Hamed
 * @param {number} albumID - ID of the album
 * @param {string} albumName - name of the album  
 * @param {number} photoCount - number of photos inisde the album
 * @param {number} primaryPhoto - ID of the primary photo of the album 
 * @example <AlbumItem />
 * @returns {element} The Album Item contents
 */
const AlbumItem = ({ albumID, albumName, albumDescription, photoCount, primaryPhoto, photos }) => {

    
const [isHovered, setIsHovered] = useState(false);

const [deleteAlbum, setDeleteAlbum] = useState(false);
const [albumClicked, setAlbumClicked] = useState(false);
const [redirect, setRedirect] = useState(null);

const [cameraRollPhotos, setCameraRollPhotos] = useState([]);
const [primaryPhotoURL, setPrimaryPhotoURL] = useState();

const downloadHandler = () => {

}

const shareHandler = () => {

}

const deleteHandler = () => {
  setRedirect(null);
  setDeleteAlbum(true);
  console.log("delete pressed")
}

const handleCloseDeleteModal = () => {
  setDeleteAlbum(false);
}

const deleteAlbumHandler = () => {
API.delete('albums/${+albumID}')
.then(res=>{
  console.log(res.data);
})
}

const handleMouseEnter = () =>{
setIsHovered(true);
}

const handleMouseLeave = () => {
setIsHovered(false);
}

const handleAlbumClick = () => {
  setAlbumClicked(true);
  setRedirect("/albums/" + albumID);
}

/**
 * Gets camera roll photos and search for the photo with ID similar to the primaryPhoto ID sent as a prop
 * to set it as the primary photo of the album
 */
useEffect(() => {
  API.get('photos')
  .then(response => {
      setCameraRollPhotos(response.data);
      console.log(response.data);
      response.data.map((photo) => {
        if(photo.id === primaryPhoto) { setPrimaryPhotoURL(photo.url); console.log("primary photo")
      }})
  });
}, [])

if(redirect) {
  return(
    <Redirect to={redirect} />
  )
}

    return(

      <div>
        <Card className={classes.album} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleAlbumClick}> 
        <CardActionArea>

        <CardMedia
          component="img"
          height="170"
          width="220" 
          image={primaryPhoto.sizes.size.medium.source}
          zIndex="0"
          />
         
         {isHovered === false ? ( 
          <div className={classes.typo}>
         <Typography variant='p' className={classes.title}> {albumName}  </Typography>
         <br />
         <Typography variant='p' className={classes.photosNumber}> {photoCount + " photos"} </Typography>
          </div>
         ) : ( 
            <div className={classes.typo_hovered}>
         <Typography variant='p' className={classes.title} data-testid="albumTitle"> {albumName} </Typography>
         <br />
         <Typography variant='p' className={classes.photosNumber}> {photoCount + " photos"} </Typography>

         <div className={classes.albumFooter}>

          <Tooltip title="Share this album">
          <Icon onClick={shareHandler} style={{color:'black', marginRight:'15%', fontSize:'27px',  marginBottom:'-5%', marginLeft:'7%'}}>
          <RiShareForwardLine />
          </Icon>
          </Tooltip>

          <Tooltip title="Download">
         <Icon onClick={downloadHandler} style={{color:'black', marginRight:'4%', fontSize:'35px', marginBottom:'-3%'}}>
                <GetAppOutlinedIcon />
        </Icon>
        </Tooltip>

        <Tooltip title="Delete this album" >
        <IconButton onClick={deleteHandler} style={{color:'black', fontSize:'20px',  marginBottom:'-9%', marginRight:'3%'}}>
        <BsTrash   />
        </IconButton>
        </Tooltip>
        
          </div> 
          </div>
         )}
      
        </CardActionArea>    
    </Card>   

          
    {deleteAlbum === true ? (
           <DeleteModal deleteAlbum={deleteAlbum}
                        deleteAlbumHandler={deleteAlbumHandler}
                        modalTitle="Confirmation"
                        handleCloseDeleteModal={handleCloseDeleteModal}
           />
        ) : (
          <div></div>
        )}


</div>

)
}


export default AlbumItem