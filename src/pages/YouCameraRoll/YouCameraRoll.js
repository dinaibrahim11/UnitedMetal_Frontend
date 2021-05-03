import React, { useState } from 'react';
import axios from 'axios';
import { Router } from 'react-router';

const YouCameraRoll = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileSelectionHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
        
    }

    const fileUploadHandler = () => {
        const form = new FormData();
        form.append('image',selectedFile,selectedFile.name);
        console.log(form.get('image'));
        axios.post('/file',selectedFile)
        .then(response => {
            console.log(response);
        })
        .catch(response => {
            console.log(response);
        });
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            console.log(response);
        })
    }
    return (
        <div>
            <div className='background'></div>
            <div>
            <input
            className='uploadButton'
            accept='image/*'
            multiple
            type='file'
            onChange={fileSelectionHandler}/>
            <button className='upButton' onClick={fileUploadHandler}>Upload selected image</button>
            <img src={selectedFile}></img>
            </div>
        </div>
    )
}

export default YouCameraRoll;