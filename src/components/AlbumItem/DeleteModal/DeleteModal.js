import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import API from '../../../fakeAPI'


const DeleteModal = (props) => {

    const handleOkClick = () => {
             props.deleteAlbumHandler();
             props.handleCloseDeleteModal();
    }

    const handleCancelClick = () => {
            props.handleCloseDeleteModal();
    }

    return (
        <Modal
        show={props.deleteAlbum}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.handleCloseDeleteModal}  
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.modalTitle}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <p> Do you really want to delete this album? (Don't worry, none of the contents will be deleted.) </p>
            <br />

           <div style={{display:'flex'}}>

           <button onClick={handleCancelClick}>
              Cancel
           </button>

           <button onClick={handleOkClick}>
               OK
           </button>

           </div>  
           
            </Modal.Body>
 
        </Modal>
    );


}


export default DeleteModal