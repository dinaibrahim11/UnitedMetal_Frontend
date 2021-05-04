import React, { useState } from 'react';
import YouImage from '../../components/YouImage/YouImage'



const YouCameraRoll = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileSelectionHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const fileUploadHandler = () => {
    }
    return (
        <div>
            <div className='background'>
            </div>
            <div className='images'>
            {props.currPics.map(imgSrc => (<img className='rollImage' key={imgSrc} src={imgSrc}/>))}
            </div>
            <div>
                <div className='upButton'>
                    <input className='uploadButton' accept='image/*' multiple type='file' onChange={fileSelectionHandler}/>
                    <div className='colorButton'>Click to upload new images</div>
                </div>
            </div>
        </div>
    )
}

export default YouCameraRoll;