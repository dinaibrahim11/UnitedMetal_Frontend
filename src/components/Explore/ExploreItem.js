import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './ExploreItem.css';
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
import StarsIcon from '@material-ui/icons/Stars';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const ExploreItem=({I_id,I_url,I_w,I_h,I_CC,I_FC})=>{


    const history = useHistory();// function used to redirect to another oage
    const handlePhotoRoute=(num)=>{history.push("/Photos/"+num);}
    const[hover,SetHover]=useState(false);
  

    const handlemouse=()=>{

SetHover(true);

    }
    const handlemoused=()=>{
        SetHover(false);

    }

return(
    
<Card  style={{width:I_w},{height:I_h}}  onMouseEnter={handlemouse} onMouseLeave={handlemoused} onClick={ ( )=> handlePhotoRoute(I_id)}  >   

<CardMedia >


<img src={I_url} width={'100%'} height={I_h} ></img>


{hover===true?(
    
    
    <div className="bZ">
   
   <StarBorderOutlinedIcon className="star" />
    {I_CC}   
<ChatBubbleOutlineOutlinedIcon/>
{I_FC}
       
     
    </div>

    ):(null)}

</CardMedia>






</Card>



  );

}
export default ExploreItem;