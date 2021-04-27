import React from 'react';
import axios from 'axios';

const YouCameraRoll = (props) => {

    return (
        <div>
            <div className='background'></div>
            <div>
            <input
            className='uploadButton'
            accept='image/*'
            multiple
            type='file'/>
            </div>
        </div>
    )
}

export default YouCameraRoll;