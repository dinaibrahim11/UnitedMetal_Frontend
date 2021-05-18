import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import classes from './AddToGalleryModal.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddToGalleryModal = (props) => {

    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false); //redundant
    const [isCreateNewGalleryFormOpen, setIsCreateNewGalleryFormOpen] = useState(false);

    const handleCloseGalleryModal = () => {
        setIsGalleryModalOpen(false);
        setIsCreateNewGalleryFormOpen(false);
        props.closeGalleryModal();
    }

    /**
     * Sends you to another model where you type the name of the new gallery
     * and a description about it
     */
    const handleCreateNewGallery = () => {
        setIsCreateNewGalleryFormOpen(true);
    }

    const CreateNewGallery = () => {
        alert("created new gallery")
        // TODO: API request
        setIsGalleryModalOpen(false);
        setIsCreateNewGalleryFormOpen(false);
        props.closeGalleryModal();
    }

    return (
        <Fragment>
            <Modal
            show={props.openGalleryModal || isGalleryModalOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleCloseGalleryModal}
            
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add to Galleries:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={classes.search__bar}>
                <input className={classes.search__input} type="text" placeholder="Search galleries" tabindex="0" />
                </div>
                <div className={classes.galleries__list__container}>
                    <ul className={classes.gallery__selection__list}>
                        <li className={classes.gallery__selection__item}>
                            <div className={classes.gallery__selection__item__content}>
                                <img src="https://live.staticflickr.com/65535/51096645882_69d8588c5e_s.jpg" />
                                <div className={classes.item__labels}>
                                    <div className={classes.item__title}>
                                        Cats Gallery
                                    </div>
                                    <div className={classes.item__stats}>
                                        1 photo
                                    </div>
                                </div>
                            </div>

                            <div className={classes.gallery__selection__item__content}>
                                <img src="https://live.staticflickr.com/3677/13545844805_170ec3746b_s.jpg" />
                                <div className={classes.item__labels}>
                                    <div className={classes.item__title}>
                                        Cats Gallery
                                    </div>
                                    <div className={classes.item__stats}>
                                        1 photo
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={classes.actions__container}>
                    <Button onClick={handleCreateNewGallery} startIcon={<AddIcon />} style={{marginTop: '15px', color: '#006dac'}}>Create new gallery</Button>
                    <Button onClick={handleCloseGalleryModal} variant="contained" color="primary" style={{marginRight: '20px', marginTop: '15px', float: 'right', color: 'white', backgroundColor: '#128fdc'}}>Done</Button>
                </div>
     
            </Modal.Body>
                
            </Modal>

            <Modal
            show={isCreateNewGalleryFormOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleCloseGalleryModal}
            
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create a new gallery
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            <div style={{height: '380px'}}>
                
                <input type="text" placeholder="Gallery name" className={classes.create__gallery__name}/>
                <textarea type="text" placeholder="Description (optional)" className={classes.create__description} ></textarea>

                <div className={classes.create__footer}>
                    <div className={classes.buttons}>
                        <Button onClick={handleCloseGalleryModal} style={{marginRight: '20px', marginTop: '90px', marginBottom: '10px', backgroundColor: '#979ea2', color: 'white'}}>Cancel</Button>
                        <Button onClick={CreateNewGallery} style={{marginRight: '20px', marginTop: '90px', marginBottom: '10px', backgroundColor: '#128fdc', color: 'white'}}>Create</Button>
                    </div>
                </div>
            </div>
                
     
            </Modal.Body>
                
            </Modal>
        </Fragment>
    );
}

export default AddToGalleryModal;
