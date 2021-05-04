import React from 'react'
import './YouImage.css'
const YouImage = (props) => {
    return (
        <div className='image'> 
            <img alt='image' src={props.src}></img>
        </div>
    )
}

export default YouImage;