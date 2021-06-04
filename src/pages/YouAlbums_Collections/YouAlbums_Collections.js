import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import classes from './YouAlbums_Collections.module.css'

const YouAlbums_Collections = () => {

   const [collectionsCount, setCollectionsCount] = useState(0);

let collectionsContent;

if(collectionsCount === 0) {
    collectionsContent = <div className={classes.page_collections}>
                         <h5 style={{fontWeight:'normal'}}> You don't have any collections </h5>
                         <p style={{fontWeight:'normal'}}>Why don't you <Link to ="/organizer" style={{color:'blue'}}> go to the organizer </Link> and make some?</p>
                         </div>
}

return (
    <div>
       {collectionsContent}
    </div>
)
}


export default YouAlbums_Collections;