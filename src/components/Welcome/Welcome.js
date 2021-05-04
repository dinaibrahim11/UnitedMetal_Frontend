import React from 'react' 
import './Welcome.css'
import video1 from './welcome_video.mp4'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Welcome = (props) => {
    return(

        <section className="showcase">

         
         <h3 className="logo"> Welcome to flickr </h3> 
          
            
         <video src={ video1 } muted loop autoPlay></video> 

        <div className="overlay"></div>

        <div className="text">
            <h1 className="logo"> Join Now </h1>
            <h2 className="logo"> Our flickr community</h2>
            <p className="text">The home to tens of billions of photos and 2 million groups </p> 
            <br />
            <a href='#' className="welcome"><Link to ="/signup">Create Account</Link></a>
        </div>
    
        </section>

    )
}



export default Welcome;