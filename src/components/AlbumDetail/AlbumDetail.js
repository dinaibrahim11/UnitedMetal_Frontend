import React, {useState, useEffect} from 'react' 
import {useLocation, useParams} from "react-router-dom"
import {Link} from 'react-router-dom'
import classes from './AlbumDetail.module.css'
import API from '../../fakeAPI';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { Redirect } from "react-router-dom";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { BsTrash } from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import {Icon} from '@material-ui/core';
import { BurstModeOutlined } from '@material-ui/icons';

const AlbumDetail = (props) => {

    const albumId = props.match.params.id;

    const [album, setAlbum] = useState([]);
    const [albumID, setAlbumID] = useState();
    const [albumName, setalbumName] = useState();
    const [albumDescription, setAlbumDescription] = useState();
    const [photosCount, setPhotosCount] = useState();
    const [photos, setPhotos] = useState([]); 

    const [editTextClicked, setEditTextClicked] = useState(false);
    const [newAlbumName, setNewAlbumName] = useState('');

    const [primaryPhotoURL, setPrimaryPhotoURL] = useState();
    const [primaryPhotoID, setPrimaryPhotoID] = useState();

    const [redirect, setRedirect] = useState(null);

    const handleEdit = () =>{

    }

    const handlePhotoClick = (id) => {
        setRedirect('/photos/' + id);
    }

    const deleteHandler = () =>{

    }

    const downloadHandler = () => {

    }

    const shareHandler = () =>{

    }

    const handleGoBack = () => {
        setRedirect("/albums")
    }

    const handleEditText = () => {
       setEditTextClicked(true);
    }

    const handleDoneClick = () => {
        
        setEditTextClicked(false);
        if(!albumDescription){setAlbumDescription('Click here to enter a description for this album')}
        if(!newAlbumName) {setNewAlbumName(albumName)};
        console.log(albumDescription);
        postNewData();
    }

    const handleTitleChange = (e) => {
       // if(e.target.value !== '') {setalbumName(e.target.value);}
       // else{setNewAlbumName('')}
       setNewAlbumName(e.target.value);
    }
   
    const handleDescriptionChange = (e) => {
           setAlbumDescription(e.target.value);
    }

    const postNewData = () => {
        if(albumName){
            const newAlbumInfo = {
              "albumName": newAlbumName,
              "description": albumDescription
             }
            API.patch('/albums/'+albumID, newAlbumInfo) 
            .then(response => {
             console.log(response)
           })
          }
    }

    const handleFocus = () => {
        if(albumDescription ==='Click here to enter a description for this album') {setAlbumDescription('')}
    }
    
    useEffect(() => {
        API.get(`albums/${albumId}`)
            .then(response => {
                setAlbum(response.data);
                setAlbumID(response.data.id);
                setalbumName(response.data.albumName); setNewAlbumName(response.data.albumName);
                setAlbumDescription(response.data.description);
                setPhotosCount(response.data.photocount);
                setPhotos(response.data.photos);
                if(response.data.id === albumId) {setPrimaryPhotoID(response.data.primaryphoto);}
                if(!response.data.description) {setAlbumDescription('Click here to enter a description for this album');}
            });
    }, [])

    useEffect(() => {
        API.get('photos')
        .then(response => {
            console.log(response.data);
            response.data.map((photo) => {
              if(photo.id === primaryPhotoID) { setPrimaryPhotoURL(photo.url);}})
        });
      }, [primaryPhotoID])

    if(redirect){
      return(
          <Redirect to={redirect} />
      )
    }

return(

<div className={classes.container}>

    <div className={classes.buttons}>
          <button className={classes.button1} onClick={handleGoBack}> <ArrowBackIcon /> Back to album list</button>
          <Link to ="/organize" className={classes.organizer_link}> Edit in organizer </Link>
    </div>

    <div className={classes.album_cover} >

       <img className={classes.cover_photo} src={primaryPhotoURL}/>
       <EditIcon className={classes.edit_icon} onClick={handleEdit}/>

       <div className={classes.text1} onClick={handleEditText}>
       <input type="text" className={classes.cover_title} defaultValue={albumName} value={newAlbumName} onChange={handleTitleChange}/>
       <input type="textarea" className={classes.cover_description} defaultValue={albumDescription} value={albumDescription} onChange={handleDescriptionChange} onFocus={handleFocus}/>
        </div>

       {editTextClicked===false ? (
           <div>
        <div className={classes.text2}>
       <p className={classes.cover_photoCount}> {photosCount + " photos"} </p>
       </div>

       <div className={classes.icons}>
        <RiShareForwardLine onClick={shareHandler} className={classes.shareIcon} /> 
          <Icon onClick={downloadHandler} className={classes.downloadIcon} >
                 <GetAppOutlinedIcon />
         </Icon>
       </div>
          </div>
       ) : (
           <div>
               <button className={classes.done_button} onClick={handleDoneClick}>Done</button>
           </div>
       )}
      

     </div>

    <div className={classes.album_photos}>
    {photos.map((photo) => (
    <img key={photo.id} src={photo.url}  className={classes.album_photo} onClick={()=>handlePhotoClick(photo.id)}/>))}
    </div>

</div>
)
}




export default AlbumDetail