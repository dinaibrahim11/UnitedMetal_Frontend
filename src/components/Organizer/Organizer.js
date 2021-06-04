import React, {useState, useEffect, useReducer} from 'react'; 
import classes from './Organizer.module.css'
import { Redirect } from "react-router-dom";
import API from '../../fakeAPI';
import { usersActions } from '../../storev2/users-slice';
import {useSelector, useDispatch} from 'react-redux'

const Organizer = (props) => {

    const [cameraRollPhotos, setCameraRollPhotos] = useState([]);
    const [droppedOver, setIsDroppedOver] = useState(false);
    const [enableSaveButton, setEnableSaveButton] = useState(false);
    const [redirect, setRedirect] = useState(null);
    const [titleError, setTitleError] = useState('');
    const [primaryPhoto, setPrimaryPhoto] = useState();
    var [photoAlreadyExists, setPhotoAlreadyExists] = useState(false);

             // ***** UPPER DRAG ***** //
    const [draggedPhotoID, setDraggedPhotoID] = useState();
    const [draggedPhotoURL, setDraggedPhotoURL] = useState();

            // ***** LOWER DRAG ***** //
    const [removedPhotoID, setRemovedPhotoID] = useState();
    const [removedPhotoURL, setRemovedPhotoURL] = useState();
    const [removedPhotoIndex, setRemovedPhotoIndex] = useState();
 

    // ------------------------------------------ ALBUM -------------------------------------------------//
    const [albumID, setAlbumID] = useState(0);
    const [albumTitle, setAlbumTitle] = useState('new album');
    var [albumsCount, setAlbumsCount] = useState(0);
    const [albumDescription, setAlbumDescription] = useState();
    const [primaryPhotoID, setPrimaryPhotoID] = useState();
    const [droppedPhotos, setDroppedPhotos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const userId = useSelector(state => state.users.currentUser.userId);
    const token = useSelector(state => state.users.currentUser.token);

    useEffect(() => {
      getCameraRollPhotos();
    }, [])

    useEffect(() => {
      setPhotoAlreadyExists(false);
      {droppedPhotos.map((item)=>{
        if(item.id === draggedPhotoID) { setPhotoAlreadyExists(true);}  
       })}  
    }, [droppedPhotos, draggedPhotoID])
    
    const handleTitleInput = (e) => {
      setAlbumTitle(e.target.value);
    }

    const handleDescriptionInput = (e) => {
      setAlbumDescription(e.target.value);
    }

    const handleCancel = (e) => {
      e.preventDefault();
      setRedirect("/albums");
    }

    const handleSearchInput = (e) => {
      setSearchTerm(e.target.value);
    }

    const handleSaveClick = (e) => {
      e.preventDefault();
      if(!albumTitle){
        setTitleError('Cannot create an album without a title');
    } else{
    setAlbumID(albumID+1);
    postDataHandler();
    console.log(primaryPhotoID);
    setRedirect("/albums"); }
    }

    const searchClickHandler = () => {
    }

    const handleDragStart = (ev,id, url) => {
      console.log("on drag start:", id);
      setDraggedPhotoID(id);
      setDraggedPhotoURL(url);
     // setPhotoToBeRemovedIndex(cameraRollPhotos.indexOf(ev.target));  
    }

    const handleLowerDragStart = (ev,id, url) => {
      console.log("on drag start:", id);
      setRemovedPhotoID(id);
      setRemovedPhotoURL(url);
      setRemovedPhotoIndex(cameraRollPhotos.indexOf(ev.target));  
      console.log(removedPhotoIndex);
    }

    const handleDragEnter = (ev, id) => {
      ev.preventDefault();
      
    }

    const handleDragOver = (ev) => {
      ev.preventDefault();
     // setIsDroppedOver(true);
    }
      
    const handleTextAreaDrop = (ev) => {
      ev.preventDefault();
    } 

    const handleUpperDrop = (ev) => {     
      ev.preventDefault();
      if(photoAlreadyExists===false){
      setEnableSaveButton(true);
      setIsDroppedOver(true);
      setAlbumsCount(albumsCount+1);
      let addedPhoto;
      addedPhoto = {
        "id": draggedPhotoID,
        "url": draggedPhotoURL
      }
      setDroppedPhotos([...droppedPhotos, addedPhoto]);
      if(albumsCount === 0) {setPrimaryPhoto(addedPhoto); setPrimaryPhotoID(addedPhoto.id)}
      }
 }

const handleLowerDrop = (ev) => {

   ev.preventDefault();
   const array = droppedPhotos.filter((item) => item.id !== removedPhotoID)
   setDroppedPhotos(array);

   if(albumsCount === 1) {setEnableSaveButton(false); setIsDroppedOver(false); setPrimaryPhoto(); setAlbumsCount(albumsCount-1)}
   else if(albumsCount > 1) {
   setAlbumsCount(albumsCount-1);
  }
}

    /*const getCameraRollPhotos = () => {
      API.get('photos' )
      .then(response => {
        setCameraRollPhotos(response.data);
    })
  }*/

  const getCameraRollPhotos = () => {
    API.get(`user/${userId}/stream`, { 
      headers: {
          "Authorization": `Bearer ${token}` 
      }}).then(res => {
      console.log("PHOTOSTREAM");
      console.log(res);
     // setPhotos(res.data.data.photos.photos);
      setCameraRollPhotos(res.data.data.photos.photos);
  }).catch(err => {
      console.log(err.response);
  });

  }

const postDataHandler = () => {
  if(titleError===''){
    const albumInfo = {
      "id": albumID,
      "albumName": albumTitle,
      "description": albumDescription,
      "photocount": albumsCount,
      "primaryphoto": primaryPhotoID,
      "photos" : droppedPhotos
     }
    API.post('albums', albumInfo)      //json server
    .then(response => {
     console.log(response)
   })
  }
  }

  // ------------------------------------------------ RETURN --------------------------------------------------//

    if(redirect==="/albums"){
      return(
          <Redirect to={redirect} />
      )
    }

    return (
      <div className={classes.container}>
   
          <div className={classes.Organizer_maindiv}>
           <form className={classes.Organizer_form}>

             {primaryPhoto ? ( <div className={classes.Organizer_square}>
               <img src={primaryPhoto.url} key={primaryPhoto.id} className={classes.Organizer_squarePhoto}/>
               </div> ) : (
              <p className={classes.Organizer_square}>The photo or video you drag here will represent the set</p>
             )}
          
            <p className={classes.Organizer_square_p}>{albumsCount} items in the album</p>
            <input type="text" className={classes.Organizer_textbox1}  defaultValue="new album" onChange={handleTitleInput}/>
            <br />
            <input type="textarea" className={classes.Organizer_textbox2} onDrop={(e)=>handleTextAreaDrop(e)} onChange={handleDescriptionInput}></input>
            <div className={classes.Buttons_div}>

             {enableSaveButton===false ? (<button className={classes.save_button_disabled} disabled onClick={handleSaveClick}>SAVE</button>) : (<button className={classes.save_button_enabled} onClick={handleSaveClick}>SAVE</button>)}

             
            <button className={classes.cancel_button} onClick={handleCancel}>CANCEL</button>
            </div>
            <p className={classes.p__error}>{titleError}</p>
           </form>
           
           { droppedOver ? (
            <div className={classes.Organizer_dnd} onDrop={(e)=>handleUpperDrop(e)} onDragOver={(e)=>handleDragOver(e)} > 
               {droppedPhotos.map((droppedPhoto)=>(
              <img key={droppedPhoto.id} src={droppedPhoto.url} draggable onDragStart={(e)=>handleLowerDragStart(e,droppedPhoto.id, droppedPhoto.url)} 
                   className={classes.Organizer_dropped_photo} style={{marginLeft:'2px'}}
              />
         ))}
         </div>
           ) :   
           <div className={classes.Organizer_rightdiv} onDrop={(e)=>handleUpperDrop(e)} onDragOver={(e)=>handleDragOver(e)} >
           <br /> <br />
             <h4 className={classes.Organizer_rightdiv_h4} style={{fontWeight:'normal', fontSize:'33px'}}>
             Drag stuff here to add it to the album
             </h4>
             <h6 style={{fontWeight:'normal' , fontSize:'25px'}}>You can drag them around to re-order them.</h6>
           </div>}
         
           </div>

          
        <div className={classes.Organizer_bottomdiv}>
              <div className={classes.Organizer_search}>
              <input type="text" className={classes.search_inputfield} onChange={handleSearchInput}></input>
              <button className={classes.search_button}>SEARCH</button>
              </div>
              <div className={classes.middle_block} onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleLowerDrop(e)}>
              
                   {cameraRollPhotos.map((photo) => (
                    <img src={photo.url} className={classes.Organizer_photo} key={photo.id} draggable onDragStart={(e)=>handleDragStart(e,photo.id, photo.url)} onDragEnter={(e)=>handleDragEnter(e,photo.id)}/>
                   ))}

              </div>

              
          </div>

    </div>
    )
}

export default Organizer;