import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import GridList from '@material-ui/core/GridList';
import classes from './EditModal.module.css'
import API from '../../../fakeAPI'

const EditModal = (props) => {

    const [isSelected, setIsSelected] = useState(false);
    const [selectedPhotoURL, setSelectedPhotoURL] = useState('');
    const [enableButton, setEnableButton] = useState(false);
    const [newPhotoID, setNewPhotoID] = useState();

    const handleButtonClick = () => {
        updatePhoto();
        props.handleCloseEditModal();
        props.changeCoverPhoto(newPhotoID);
    }

    const handleSelection = (id, url) => {
        setIsSelected(true);
        setSelectedPhotoURL(url);
        setEnableButton(true);
        setNewPhotoID(id);
    }

    const handledisSelection = () =>{
        setIsSelected(false);
        setSelectedPhotoURL('');
        setEnableButton(false);
    }

    const updatePhoto = () => {
        if(newPhotoID){
            const newAlbumPhoto = {
              "primaryphoto": newPhotoID
             }
            API.patch('/albums/'+ props.albumID, newAlbumPhoto) 
            .then(response => {
             console.log(response)
           })
          }
    }

    return (
        <Modal
        show={props.openEditor}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.handleCloseEditModal}  
        newPhotoID = {newPhotoID}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.modalTitle}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <h6> {props.albumName} </h6>
            <hr />
            <br />
             
             <GridList >
             {props.photos.map((photo) => (

                 (isSelected === true && photo.url===selectedPhotoURL) ? (<img key={photo.id} src={photo.url} className={classes.modal_photos} style={{width:'150px', marginRight:'2px', marginBottom:'11px', border:'3px solid blue'}} onClick={handledisSelection}/>
                 ) : (
                    <img key={photo.id} src={photo.url} className={classes.modal_photos} style={{width:'150px', marginRight:'2px', marginBottom:'11px'}} onClick={()=>handleSelection(photo.id ,photo.url)}/>
                 )
             ))}
             </GridList>

             { enableButton ===false ? (<button classname={classes.modal_button_disabled} disabled style={{border: 'hidden', marginLeft:'90%'}}> Select </button>) : (<button classname={classes.modal_button_enabled} onClick={handleButtonClick} style={{border: 'hidden', marginLeft:'90%', backgroundColor:'#0063dc', color:'white', borderRadius:'15%', paddingLeft:'1%', paddingRight:'1%'}}> Select </button>)}
             
            </Modal.Body>
 
        </Modal>
    );
}

export default EditModal;