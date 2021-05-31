import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './passChange.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';
import {Grid} from "@material-ui/core"
import { useSelector } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import YouAbout from '../../pages/YouAbout/YouAbout';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import YouCameraRoll from '../../pages/YouCameraRoll/YouCameraRoll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useMediaQuery} from "@material-ui/core";
import { Divider } from '@material-ui/core';
import {TextField }from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Input} from '@material-ui/core';
import {FilledInput} from '@material-ui/core';
import {OutlinedInput} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {InputAdornment} from '@material-ui/core';
import {FormHelperText} from '@material-ui/core';
import clsx from 'clsx';
import {FormControl} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SettingsApplicationsSharp } from '@material-ui/icons';
import DoneIcon from '@material-ui/icons/Done';

function PassChange(){

   //////////////////////////////////////////////////////////////////////////////////////////////////// 
const history = useHistory();// function used to redirect to another page
/**
 * function that redirect you to certain page
 * called when we click on the button
 * @param {void}
 * @returns {void}
 */
    const handleRoutePass = () =>{ history.push("/AccountSettings");}

    ///////////////////////////////////////////card styling variable///////////////////////////////////////////////
    var cardStyling = {
        variant:'outlined',
            height: '7%',
            width:'30%',
          transitionDuration: '0.1s',
       
          boxShadow: "none" 
           }

///////////////////////////////////////// return function of PassChange function ///////////////////////////
return(
    // contians a card that represents a box of success of changing password
    // Done Icon
    // different text
    // button that when clicked calls function that redirects you back to /AccountSettings Page
    <div className="Backgound2">
        <div className="space"></div>
<Card  className="Forum2"  style={cardStyling}>
    <div className="icon">
<DoneIcon/>
</div>
<text className="pc">
Password changed   
</text>
<div className="space2"></div>
<text className="pc2">
Congratulations! Your password change    
</text>
<div className="space3"></div>
<div className="ws">
was successful!
<div className="butttonspp"></div>
<div className="buttonsp2">
<button className="b2" onClick={handleRoutePass}>
Okay,got it!
</button>
</div>
</div>
</Card>




        </div>









        );



        }
        
        export default PassChange;