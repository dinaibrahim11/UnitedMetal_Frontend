import React, { useState, useEffect } from 'react';
import classes from './YouAlbums.module.css'
import Button from '@material-ui/core/Button';
import YouAlbums_bg from './YouAlbums_bg.png';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { Redirect } from "react-router-dom";
import API from '../../fakeAPI';
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import GridList from '@material-ui/core/GridList';
import DeleteModal from '../../components/AlbumItem/DeleteModal/DeleteModal'


const YouAlbums = ({setCameraRoll, setCollectionsTrue, currentTab}) => {

    const [isCameraRollEmpty, setIsCameraRollEmpty] = useState();
    const [redirect, setRedirect] = useState(null);
    const [albums, setAlbums] = useState([]);

    let YouAlbumsContent;

    let albumName;
    let albumDescription;
    let photoCount;
    let primaryPhoto;
    let photos;


    const checkCameraRoll = () => {
        API.get('photos' )
        .then(response => {
          if(response.data.length === 0) {
            setIsCameraRollEmpty('true');
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
      API.get('albums' )
      .then(response => {
        console.log(response.data);
        setAlbums(response.data);
    })
    }

    useEffect(() => {
      getAlbumsData();
      checkCameraRoll();
    }, [currentTab])

    //checkCameraRoll();

    if(isCameraRollEmpty === 'true'){
        YouAlbumsContent = <div>
                           <div className={classes.page_YouAlbums_center}>
                           <h4 className={classes.page_YouAlbums_Header}>Let's make an album</h4>
                           </div>
                           <div>
                           <p className={classes.page_YouAlbums_p}> Easily organize all your photos into beautiful albums to share with friends, family or even other Flickr members.</p>
                           <div className={classes.page_YouAlbums_Button}><Button variant="contained" color="primary" onClick={buttonClickHandler}> Go to camera roll </Button></div>
                           <div> <img src={YouAlbums_bg} className={classes.YouAlbums_bg}/></div>
                           </div>
                           </div>
    }

    if(isCameraRollEmpty === 'false' ){
        YouAlbumsContent = <div>
                           <div className={classes.page_YouAlbums_options}>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal'}} onClick={newalbum_handler}> <AddToPhotosIcon />New album</Button> <h4 style={{fontWeight:'lighter'}}> | </h4>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal'}}> <AddToPhotosIcon /> New collection</Button>
                           <Button style={{ fontSize: '11', color: 'grey', fontWeight: 'normal' }} onClick={viewcollection_handler}> View my collections</Button> 
                           </div>
                           {/* <div><AlbumItem /></div> */}
                           <GridList >
                             {albums.map((album) => (

                              albumName = album.albumName, 
                              albumDescription=album.description,
                              photoCount = album.photocount,
                               primaryPhoto = album.primaryphoto,
                               photos = album.photos,

                              <AlbumItem 
                               key={album.id}
                               albumID = {album.id}
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