import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import YouCover from '../YouCover/YouCover';
import Header from '../Header/Header';
import './YouMain.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom';
import YouAbout from '../../pages/YouAbout/YouAbout';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import YouCameraRoll from '../../pages/YouCameraRoll/YouCameraRoll';

const YouMain = (props) => {
    const [tab, setTab] = useState('About');
    let history = useHistory();
    useEffect(() => {
        console.log(`You chose ${tab}`);
        history.push(`${tab}`)
    }
    )
    return (
        <div>
            <div>
                <YouCover />
            </div>
            <main>
            <Switch>
                <Route exact path="/About" component={YouAbout} />
                <Route exact path="/CameraRoll" component={YouCameraRoll} />
            </Switch>
            </main>
                <ButtonGroup className='navBar'>
                    <Button className='About' onClick={() => setTab('About')} >About</Button>
                    <Button className='Photostream'>Photostream</Button>
                    <Button className='Albums'>Albums</Button>
                    <Button className='Faves'>Faves</Button>
                    <Button className='Galleries'>Galleries</Button>
                    <Button className='Groups'>Groups</Button>
                    <Button className='Camera Roll' onClick={() => setTab('CameraRoll')}>Camera Roll</Button>
                </ButtonGroup>
        </div>
    );
};

export default YouMain;