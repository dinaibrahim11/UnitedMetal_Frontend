import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import YouCover from '../YouCover/YouCover';
import Header from '../Header/Header';
import './YouMain.css';
import Tabs from'@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
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
            <div>
            <div className='bar'>
                <Paper>
                <Tabs>
                    <Tab label='About' onClick={() => setTab('About')} />
                    <Tab label='Photostream' />
                    <Tab label='Albums' />
                    <Tab label='Faves' />
                    <Tab label='Galleries' />
                    <Tab label='Groups' />
                    <Tab label='Camera Roll' onClick={() => setTab('CameraRoll')} />
                </Tabs>
                </Paper>
            </div>
            </div>
        </div>
    );
};

export default YouMain;