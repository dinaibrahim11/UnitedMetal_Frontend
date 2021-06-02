import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './ExplorePage.css';
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
import ExploreItem from './ExploreItem';

function ExplorePage(){
    

    
       
  ///// sTATE VARIABLE FOR tAB SELECTION //////////////////////////  
const[Tabb,SetTabb]=useState(1); // state variable to set the tab



const links2 = [
    {idd:1,  url:"https://wallpapercave.com/fwp/wp5981208.jpg" ,w:420 ,h:200  ,commentC:50 , favC:400}    ,
    {idd:2  ,url:"https://wallpapercave.com/fwp/wp5716268.jpg" ,w:10,h:300   , commentC:30 , favC:600   },
    {idd:3 ,url:"https://wallpapercave.com/uwp/uwp978614.jpeg",w:420 ,h:200,commentC:10,favC:200},
    {idd:4  , url:"https://wallpapercave.com/uwp/uwp404136.jpeg",w:190 ,h:150,commentC:500,favC:100},
    {idd:5, url:"https://wallpapercave.com/wp/wp170202.jpg" ,w:150  ,h:300 ,commentC:290,favC:20 },
    {idd:6, url:"https://wallpapercave.com/wp/wp4202055.jpg"  ,w:130 ,h:200,commentC:800,favC:80  },
    {idd:7 , url:"https://wallpapercave.com/wp/FMSk24L.jpg" ,w:300 ,h:200 ,commentC:700,favC:90 },
    {idd:8, url:"https://wallpapercave.com/wp/9T3NTEL.jpg"   ,w:210,h:250,commentC:90, favC:55 },
    {idd:9, url:"https://wallpapercave.com/wp/wp4203600.jpg"  ,w:180,h:200  ,commentC:180,favC:60  },
    {idd:10, url:"https://wallpapercave.com/wp/wp4079759.jpg"  ,w:90 ,h:200 ,commentC:290,favC:600   },
    {idd:11, url:"https://wallpapercave.com/wp/wp2586072.jpg"   ,w:170 ,h:300,commentC:80,favC:40   },
    {idd:12, url:"https://wallpapercave.com/wp/wp2882301.jpg"  ,w:90  ,h:200,commentC:900,favC:600}];




    const[Images2,setImages2]=useState(links2);  
    

      

        




return(
    <div className="EXPPAGE">
    <div  className="TabsCC">
    <div className="buttonspace2"></div>
<button  className={Tabb === 1 ? "selected_tabb1" : "tabb1"} //Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =1)
onClick={() => SetTabb(1)  } //Changing the state of tab to be 1 (for tab1) on click to be selected 
>
Explore
 </button>


<button //Button representing First Tab 

className={Tabb === 2 ? "selected_tabb2" : "tabb2"} //Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =1)
onClick={() => SetTabb(2)  } //Changing the state of tab to be 1 (for tab1) on click to be selected 
>
Trending
 </button>
 </div>






 <div className="tc"></div>

{Tabb===1 ?
(
<div className="textspace">

 
<text    className="exptext">   
    Explore
</text>
</div>):(null)}
<div className="expspace"></div>
<div className="m" style={{paddingLeft:'9%'}}>
<Grid container spacing={2}  >
{Tabb===1 ? 

Images2.map( (Image2)=>

    


    <Grid item xs={12} sm={1} md={4} >
        
<ExploreItem
key={Image2.idd}
I_id={Image2.idd}
I_url={Image2.url}
I_w={Image2.w}
I_h={Image2.h}
I_CC={Image2.commentC}
I_FC={Image2.favC}

/>
</Grid>

):(null)}
</Grid>
</div>
</div>


);

}
export default ExplorePage;
