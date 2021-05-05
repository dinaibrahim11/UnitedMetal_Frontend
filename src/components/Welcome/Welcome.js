import React from 'react' 
import classes from './Welcome.module.css'
import video1 from './welcome_video.mp4'
import {Link} from 'react-router-dom'

const Welcome = (props) => {
    return(

        <section className={classes.section__showcase}>

         
         <h3 className={classes.logo}> Welcome to flickr </h3> 
          
            
         <video src={ video1 } muted loop autoPlay></video> 

        <div className={classes.div__overlay}></div>

        <div className={classes.div__text}>
            <h1 className={classes.h1__logo}> Join Now </h1>
            <h2 className={classes.h2__logo}> Our flickr community</h2>
            <p className={classes.p__text}>The home to tens of billions of photos and 2 million groups </p> 
            <br />
            <a href='#' className={classes.a__welcome}><Link to ="/signup">Create Account</Link></a>
        </div>
    
        </section>

    )
}



export default Welcome;