import React, { useState } from 'react';
import YouImage from '../../components/YouImage/YouImage'



const YouCameraRoll = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [localImgUrl, setLocalImgUrl] = useState(null);
    const fileSelectionHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
        setLocalImgUrl(URL.createObjectURL(event.target.files[0]));
        console.log("local url: ", URL.createObjectURL(event.target.files[0]));
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append(selectedFile);
        // for(var pair of fd.entries()) {
        //     console.log(pair[0]+', '+pair[1]);
        //   }
        // console.log("form data: ", fd)
        // let options = { content: fd };
        // API.post('cameraRoll', options)
        //     .then(res => {
        //         console.log(res)
        //     })
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
                    <img className='preview' width='100' height='100' src={localImgUrl}/>
                    <h5 className='previewTxt'>Preview</h5>
                </div>
            </div>
        </div>
    )
}

export default YouCameraRoll;