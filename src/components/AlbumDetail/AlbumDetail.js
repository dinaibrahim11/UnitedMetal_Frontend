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

const AlbumDetail = (props) => {

    const albumId = props.match.params.id;

    const [album, setAlbum] = useState({});
    const [albumName, setalbumName] = useState();
    const [albumDescription, setAlbumDescription] = useState();
    const [photosCount, setPhotosCount] = useState();
    const [photos, setPhotos] = useState([]); 

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
   
    useEffect(() => {
        API.get(`albums/${albumId}`)
            .then(response => {
                setAlbum(response.data);
                setalbumName(response.data.albumName);
                setAlbumDescription(response.data.description);
                setPhotosCount(response.data.photocount);
                setPhotos(response.data.photos);
                if(response.data.id === albumId) {setPrimaryPhotoID(response.data.primaryphoto);}
                if(!response.data.description) {setAlbumDescription("Click here to enter a description for this album");}
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
          <button className={classes.button1}> <ArrowBackIcon /> Back to album list</button>
          <Link to ="/organize" className={classes.organizer_link}> Edit in organizer </Link>
    </div>

    <div className={classes.album_cover} >

       <img className={classes.cover_photo} src={primaryPhotoURL}/>
       <EditIcon className={classes.edit_icon} onClick={handleEdit}/>

       <div className={classes.text1}>
       <h3 className={classes.cover_title}> {albumName}</h3>
       <h6 className={classes.cover_description}>{albumDescription}</h6>
       </div>

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

    <div className={classes.album_photos}>
    {photos.map((photo) => (
    <img src={photo.url}  className={classes.album_photo} onClick={()=>handlePhotoClick(photo.id)}/>))}
    </div>

</div>
)
}




export default AlbumDetail