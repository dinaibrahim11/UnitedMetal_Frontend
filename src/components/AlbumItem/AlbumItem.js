import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { CardActionArea, Menu, MenuItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import classes from './AlbumItem.module.css';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@material-ui/core';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { BsTrash } from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import API from '../../fakeAPI';

const AlbumItem = () => {

    
const [isHovered, setIsHovered] = useState(false);
const [deleteAlbum, setDeleteAlbum] = useState(false);

const downloadHandler = () => {

}

const shareHandler = () => {

}

const deleteHandler = () => {
  setDeleteAlbum(true);
}

const handleMouseEnter = () =>{
setIsHovered(true);
}

const handleMouseLeave = () => {
setIsHovered(false);
}

    return(
        <Card className={classes.album} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <CardActionArea>

        <CardMedia
          component="img"
          height="170"
          width="220" 
          image="https://wallpapercave.com/uwp/uwp978614.jpeg"
          zIndex="0"
          />
         
         {isHovered === false ? ( 
          <div className={classes.typo}>
         <Typography variant='p' className={classes.title}> AlbumName </Typography>
         <br />
         <Typography variant='p' className={classes.photosNumber}> photosNumber </Typography>
          </div>
         ) : ( 
            <div className={classes.typo_hovered}>
         <Typography variant='p' className={classes.title}> AlbumName </Typography>
         <br />
         <Typography variant='p' className={classes.photosNumber}> photosNumber </Typography>

         <div className={classes.albumFooter}>

          <RiShareForwardLine onClick={shareHandler} style={{color:'white', marginRight:'15%', fontSize:'27px',  marginBottom:'-12%', marginLeft:'3%'}}/>
          
         <Icon onClick={downloadHandler} style={{color:'white', marginRight:'15%', fontSize:'35px', marginBottom:'-3%'}}>
                <GetAppOutlinedIcon />
        </Icon>
        <BsTrash onClick={deleteHandler} style={{color:'white', fontSize:'23px',  marginBottom:'-12%', marginRight:'3%'}}/>
        
          </div> 
          </div>
         )}
        

        </CardActionArea>
    </Card>   
)

}


export default AlbumItem