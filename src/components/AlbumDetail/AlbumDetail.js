import React, {useState, useEffect} from 'react' 
import {useLocation, useParams} from "react-router-dom"
import {Link} from 'react-router-dom'
import classes from './AlbumDetail.module.css'
import API from '../../fakeAPI';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { Redirect } from "react-router-dom";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import {RiShareForwardLine} from "react-icons/ri";
import {Icon} from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import EditModal from '../AlbumDetail/EditModal/EditModal'
import { useSelector } from 'react-redux';

const AlbumDetail = (props) => {

    const albumId = props.match.params.id;

    const [album, setAlbum] = useState([]);
    const [albumID, setAlbumID] = useState();
    const [albumName, setalbumName] = useState();
    const [albumDescription, setAlbumDescription] = useState();
    const [photosCount, setPhotosCount] = useState();
    const [photos, setPhotos] = useState([]); 

    const [editTextClicked, setEditTextClicked] = useState(false);
    const [openEditor, setOpenEditor] = useState(false);
    const [newAlbumName, setNewAlbumName] = useState('');

    const [primaryPhotoURL, setPrimaryPhotoURL] = useState();
    const [primaryPhotoID, setPrimaryPhotoID] = useState();

    const [redirect, setRedirect] = useState(null);
    const token = useSelector(state => state.users.currentUser.token);

    const handleEdit = () =>{
          setOpenEditor(true);
    }

    const handleCloseEditModal = () => {
        setOpenEditor(false);
    }

    const handlePhotoClick = (id) => {
        setRedirect('/photos/' + id);
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

    const changeCoverPhoto = (id) => {
        setPrimaryPhotoID(id);
    }

    const handleDoneClick = () => {
        
        setEditTextClicked(false);
        if(!albumDescription){setAlbumDescription('Click here to enter a description for this album')}
        if(newAlbumName) {setalbumName(newAlbumName);}
        if(!newAlbumName) {setNewAlbumName(albumName)};
        console.log(albumDescription);
        postNewData();
    }

    const handleTitleChange = (e) => {
       setNewAlbumName(e.target.value);
    }
   
    const handleDescriptionChange = (e) => {
           setAlbumDescription(e.target.value);
    }


    const postNewData = () => {
        if(newAlbumName){
            const newAlbumInfo = {
              "albumName": newAlbumName,
              "description": albumDescription
             }
            API.patch(`photoset/${albumID}/meta`, newAlbumInfo, 
            {
                headers: {
                  "Authorization": `Bearer ${token}` 
                }
              }) 
            .then(response => {
             console.log(response)
           })
          }
    }

    const handleFocus = () => {
        if(albumDescription ==='Click here to enter a description for this album') {setAlbumDescription('')}
    }
    
    useEffect(() => {
        API.get(`photoset/${albumId}`)
            .then(response => {
                console.log("[AlbumDetail]");
                console.log(response);
                setAlbum(response.data.data);
                setAlbumID(response.data.data._id);
                setalbumName(response.data.data.albumName); setNewAlbumName(response.data.data.albumName);
                setAlbumDescription(response.data.data.description);
                setPhotosCount(response.data.data.photocount);
                setPhotos(response.data.data.photos);
                setPrimaryPhotoURL(response.data.data.primaryPhotoId.sizes.size.large.source);
                if(response.data.data._id === albumId) {setPrimaryPhotoID(response.data.data.primaryPhotoId._id);}
                if(!response.data.data.description) {
                    setAlbumDescription('Click here to enter a description for this album');
                } else {
                    setAlbumDescription(response.data.data.description);
                }
            });
    }, [])

    // useEffect(() => {
    //     API.get('photos')
    //     .then(response => {
    //         console.log(response.data);
    //         response.data.map((photo) => {
    //           if(photo.id === primaryPhotoID) { setPrimaryPhotoURL(photo.url);}})
    //     });
    //   }, [primaryPhotoID])



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

       <Tooltip title="Edit cover">
       <Icon className={classes.edit_icon} onClick={handleEdit}>
       <EditIcon />
       </Icon>
       </Tooltip>

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

       <Tooltip title="Share this album">
       <Icon  onClick={shareHandler} className={classes.shareIcon} style={{fontSize:'25px'}}>
        <RiShareForwardLine /> 
        </Icon>
        </Tooltip>

        <Tooltip title="Download">
          <Icon onClick={downloadHandler} className={classes.downloadIcon} style={{fontSize: '45px'}}>
                 <GetAppOutlinedIcon />
         </Icon>
         </Tooltip>

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
    <img key={photo._id} src={photo.sizes.size.medium.source}  className={classes.album_photo} onClick={()=>handlePhotoClick(photo._id)}/>))}
    </div>

    {openEditor === true ? (
     <EditModal openEditor={openEditor}
                photos={photos}
                albumName={albumName}
                modalTitle="Select a photo"
                handleCloseEditModal={handleCloseEditModal}
                albumID={albumID}
                changeCoverPhoto={(id)=>changeCoverPhoto(id)}
                
     />
     ) : (
      <div></div>)}
      
</div>
)
}




export default AlbumDetail