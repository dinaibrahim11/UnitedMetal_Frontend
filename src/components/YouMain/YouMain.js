/**
 * The You module
 * @module You
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import YouCover from '../YouCover/YouCover';
import './YouMain.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import YouAbout from '../../pages/YouAbout/YouAbout';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import YouCameraRoll from '../../pages/YouCameraRoll/YouCameraRoll';



/**
 * Array that contains the current pictures in the camera roll
 * @type {Array<strings>}
 */
const DUMMY_IMAGES = ['https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg',
    'https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1937429821.jpg',
    'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117413.jpg',
    'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-tree.jpg',
    'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-tree.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg' ];

/**
 * Responsible for returning the you page entirely with all its components and routing between them
 * @param {properties} props
 * @returns {element} The you page contents
 */
const YouMain = (props) => {
    const [tab, setTab] = useState('about');
    let history = useHistory();
   
    useEffect(() => {
        setTab(props.currentTab)
    }, [props.currentTab])
   
    return (
        <div>
            <div>
                <YouCover currPics={DUMMY_IMAGES} />
            </div>
            
            <div className='toolbarBg'></div>
            <ButtonGroup className='navBar'>
                <Button className='About' onClick={() => setTab('about')} >About</Button>
                <Button className='Photostream'>Photostream</Button>
                <Button className='Albums'>Albums</Button>
                <Button className='Faves'>Faves</Button>
                <Button className='Galleries'>Galleries</Button>
                <Button className='Groups'>Groups</Button>
                <Button className='CameraRoll' onClick={() => setTab('cameraroll')}>Camera Roll</Button>
            </ButtonGroup>
            <main>
                {tab === 'about' ? <YouAbout currPics={DUMMY_IMAGES}/> : <YouCameraRoll currPics={DUMMY_IMAGES}/>}
            </main>
        </div>
    );
};

export default YouMain;