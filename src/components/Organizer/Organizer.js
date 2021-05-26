import React, {useState} from 'react'; 
import classes from './Organizer.module.css'
import { Redirect } from "react-router-dom";
import API from '../../fakeAPI';
import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';

const Organizer = () => {

  //const DUMMY_IMAGES = [{url: "https://images.template.net/wp-content/uploads/2016/05/19130256/Beach-Resort-Sunset-HD-Wallpaper-Background.jpg"},
  //{url: "https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1937429821.jpg" }];

    const [cameraRollPhotos, setCameraRollPhotos] = useState([]);

    const [albumsCount, setAlbumsCount] = useState(0);
    const [redirect, setRedirect] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleCancel = (e) => {
      e.preventDefault();
      setRedirect("/albums");
    }

    const searchClickHandler = () => {

    }

    const handleDrag = (e) => {
     e.preventDefault();
     e.preventPropagation();
    }

    const handleDragStart = (e) => {
       setDragging(true);
    }

    const dragOverHandler = (e) => {
      e.preventDefault();
    }

    const getCameraRollPhotos = () => {
      API.get('photos' )
      .then(response => {
        console.log(response.data);
        setCameraRollPhotos(response.data);
    })
  }

    if(redirect==="/albums"){
      return(
          <Redirect to={redirect} />
      )
    }

    getCameraRollPhotos();

    return (
      <div>
          <div className={classes.Organizer_maindiv}>
           <form className={classes.Organizer_form}>
            <p className={classes.Organizer_square}>The photo or video you drag here will represent the set</p>
            <p className={classes.Organizer_square_p}>{albumsCount} items in the album</p>
            <input type="text" className={classes.Organizer_textbox1} value="new album"></input>
            <br />
            <input type="textarea" className={classes.Organizer_textbox2} ></input>
            <div className={classes.Buttons_div}>
            <button className={classes.save_button} disabled >SAVE</button> 
            <button className={classes.cancel_button} onClick={handleCancel}>CANCEL</button>
            </div>
           </form>

           <div className={classes.Organizer_rightdiv} onDragOver={dragOverHandler}>
           <br /> <br />
             <h4 className={classes.Organizer_rightdiv_h4} style={{fontWeight:'normal', fontSize:'33px'}}>
             Drag stuff here to add it to the album
             </h4>
             <h6 style={{fontWeight:'normal' , fontSize:'25px'}}>You can drag them around to re-order them.</h6>
           </div>
           </div>

          
        <div className={classes.Organizer_bottomdiv}>
              <div className={classes.Organizer_search}>
              <input type="text" className={classes.search_inputfield}></input>
              <button className={classes.search_button}>SEARCH</button>
              </div>
              <div className={classes.middle_block}>
              
                   {cameraRollPhotos.map((photo) => (
                    <img src={photo.url} className={classes.Organizer_photo} draggable ondragstart={handleDragStart} id="img1"  />
                   ))}

               { /*<img className={classes.Organizer_photo} draggable ondragstart={handleDragStart} id="img1" src="https://images.template.net/wp-content/uploads/2016/05/19130256/Beach-Resort-Sunset-HD-Wallpaper-Background.jpg"></img>
                <img className={classes.Organizer_photo} src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"></img> */}
               

              </div>
          </div>

    </div>
    )

}



export default Organizer;