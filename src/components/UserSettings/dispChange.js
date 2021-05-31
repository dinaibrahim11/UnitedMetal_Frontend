import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './dispChange.css';
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

function DispChange(){
///////////////////////////////State variables/////////////////////////////////////////////////////////////

const [displayname,setDN]=useState('alaaH');//setting display name
const [Input2,SetInput2]=useState(null);// setting input variable
/**
 * @returns {void}
 * the function sets Input2 with the value of the input 
 * @param {*} e -The event of onChanging the input
 */
const CheckINPUT=(e)=>{SetInput2(e.target.value);  }

/**
 * @returns {void}
 * the function is called on click of the button to set the displayname with the value of input if its not null
 * @param {void}
 */

const setDISPNAME=()=> {
    
    if(Input2){
     
     setDN(Input2)   ;
       
    }
    
   }
   ////////////////////////////////////// return of DispChange function ///////////////////////////////////////////////////////////////
return(
    //the return consists of different text and link to the AccountSettings page 
    // input  to change the display name it contains pace holder of your display name
    //button that when clicked changes the display name
<div className="WPC">


<Link className="YA" color="blue" to="/AccountSettings"   style={{ textDecoration: 'none' }}> Your account </Link>

<text className="SN">
/ Your screen name   
</text>
<div className="space1" >
<text className="TEXT1">
Your screen name is the   
</text>
<div className="sp3"></div>
<text className="TEXT2">
name that identifies you on  
</text>
<text className="CS">
Change your screen name to
</text>




<div className="sp4"></div>

<text className="TEXT3">
Flickr, along with your buddy
</text>
<div className="space4" ></div>
<text className="TEXT4">
icon.
</text>
<div  className="ip">
<input className="ip2"  placeholder={displayname}    onChange={CheckINPUT} ></input>
</div>



<div className="b5"></div>
<div className="b6">
<button
className="b3" onClick={setDISPNAME} >
Save
</button>
</div>



<div className="space5"></div>
<text className="TEXT5">
You can change your screen
</text>

<div className="space6"></div>
<text className="TEXT6">
name whenever you like.
</text>



</div>


<text className="ca" >
Or, cancel this and return to your  
</text>
<Link className="YA2" color="blue" to="/AccountSettings"   style={{ textDecoration: 'none' }}> account </Link>
<text className="pa">
page.    
</text>
<div className="sp7"></div>
<Divider className="div1"    />
<text className="NO"> 
Note: When you change your screen name, the old one becomes available for another member to use. We   
</text>
<div className="sp8"></div>
<text className="NO2"> 
recommend your screen name be no more than about 20 character
</text>
<div className="sp9"></div>
<text className="NO3"> 
We keep record of your last 5 name changes, so we know you've called yourself
</text>
<div className="sp10"></div>
<text className="NO4" >
{displayname}    
</text>

<text className="NO5"> 
in the past
</text>
</div>










    );



}

export default DispChange;