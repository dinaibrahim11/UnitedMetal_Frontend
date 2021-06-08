import React, { useState, useEffect } from 'react';
import classes from './YouAlbums.module.css'
import Button from '@material-ui/core/Button';
import YouAlbums_bg from './YouAlbums_bg.png';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'
import API from '../../fakeAPI';
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import GridList from '@material-ui/core/GridList';

/**
 * Display YouAlbums page content
 * If camera roll is empty it shows a button to direct the user to the camera roll page tp add photos
 * If not, it shows all the albums created by the current user
 * @author Esraa Hamed
 * @param {properties} props 
 * @returns {element} - YouAlbums component
 */
const YouAlbums = ({setCameraRoll, setCollectionsTrue, currentTab, userId}) => {

    const [isCameraRollEmpty, setIsCameraRollEmpty] = useState('false');
    const [redirect, setRedirect] = useState(null);
    const [albums, setAlbums] = useState([]);

    let YouAlbumsContent;

    let albumName;
    let albumDescription;
    let photoCount;
    let primaryPhoto;
    let photos;

    const token = useSelector(state => state.users.currentUser.token);
   /* const checkCameraRoll = () => {
        API.get('photos' )
        .then(response => {
          if(response.data.length === 0) {
            setIsCameraRollEmpty('true');
          }
          else {
            setIsCameraRollEmpty('false');  
          }
        })
      } */

      const checkCameraRoll = () => {
        API.get('user/camera-roll', {
          headers: {
              "Authorization": `Bearer ${token}` 
          }}
          )
           .then(res => {
             console.log("CAMERA ROLL");
             console.log(res.data.data);
             console.log(res.data.data.photos.length);
            if(!res.data.data || res.data.data.photos.length === 0) {
              setIsCameraRollEmpty('true');
              console.log("if condition")
            }
            else {
              setIsCameraRollEmpty('false');  
            }
      })
  }

    const buttonClickHandler = () => {
     setCameraRoll();
     //setRedirect("/cameraroll" );
    } 

    const viewcollection_handler = () => {
        setCollectionsTrue();
        setRedirect("/collections");
    }

    const newalbum_handler = () => {
        setRedirect("/organize")
    }

    const getAlbumsData = () => {
      API.get(`user/${userId}/albums` )
      .then(response => {
        console.log("Fetched albums");
        console.log(response.data.data);
        setAlbums(response.data.data);
      }).catch(err => {
        console.log(err.response);
      })
    }

    useEffect(() => {
      getAlbumsData();
      checkCameraRoll();
    }, [])

    //checkCameraRoll();

    if(isCameraRollEmpty === 'true'){
        YouAlbumsContent = <div>
                           <div className={classes.page_YouAlbums_center}>
                           <h4 className={classes.page_YouAlbums_Header} data-testid="emptyCR-header">Let's make an album</h4>
                           </div>
                           <div>
                           <p className={classes.page_YouAlbums_p}> Easily organize all your photos into beautiful albums to share with friends, family or even other Flickr members.</p>
                           <div className={classes.page_YouAlbums_Button} ><Button variant="contained" color="primary" onClick={buttonClickHandler} data-testid="cameraroll-btn"> Go to camera roll </Button></div>
                           <div> <img src={YouAlbums_bg} className={classes.YouAlbums_bg}/></div>
                           </div>
                           </div>
    }

    if(isCameraRollEmpty === 'false' ){
        YouAlbumsContent = <div>
                           <div className={classes.page_YouAlbums_options}>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal'}} onClick={newalbum_handler} title="New album"> <AddToPhotosIcon />New album</Button> <h4 style={{fontWeight:'lighter'}}> | </h4>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal'}}> <AddToPhotosIcon /> New collection</Button>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal' }} onClick={viewcollection_handler}> View my collections</Button> 
                           </div>
                           {/* <div><AlbumItem /></div> */}
                           <GridList >
                             {albums.length > 0 && albums.map((album) => (

                              albumName = album.album.albumName, 
                              albumDescription = " ",
                              photoCount = album.album.photos.length,
                               primaryPhoto = album.album.primaryPhotoId,
                               photos = album.album.photos,

                              <AlbumItem 
                               key={album.album._id}
                               albumID = {album.album._id}
                               albumName={albumName}
                               albumDescription={albumDescription}
                               photoCount={photoCount}
                              primaryPhoto={primaryPhoto}
                              photos={photos}
                              /> 
                              ))}
                             </GridList>
                           </div>
    }

// ------------------------------------------ RETURN -------------------------------------------------- //

if(redirect==="/organize"){
    return(
        <Redirect to={redirect} />
    )
}

return (

             <div>     

             {YouAlbumsContent} 
             <br /> 
             
              </div> 
    )

}



export default YouAlbums;