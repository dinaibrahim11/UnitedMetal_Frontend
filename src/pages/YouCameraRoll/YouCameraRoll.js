/**
 * @function YouCameraRoll
 */
import React, { useState } from 'react';

/**
 * Responsible for returning the 
 * @param {properties} props 
 * @returns {element} the Camera Roll components
 */
const YouCameraRoll = (props) => {
    var objectsArray = []
    var dateArray = []
    const [selectedFile, setSelectedFile] = useState(null);
    const {selectedImg, setSelectedImg} = useState(null);
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
    for (let item of props.currPics) {
        if (dateArray.indexOf(item.date) == -1) {
            dateArray.push(item.date)
        }
    }

    for (let item1 of dateArray) {
        var sameDateArray = []
        for (let item2 of props.currPics) {
            if (item1 == item2.date) {
                sameDateArray.push(item2)
            }
        }
        objectsArray.push(sameDateArray)
    }

    console.log(dateArray)
    console.log(objectsArray)
    return (
        <div>
            <div className='background'>
            </div>
            { !objectsArray.length &&
            (<div className='uploadImg'>
                <div>Got a lot of photos? We got a lot of space</div>
                <div className='upButton'>
                    <input className='uploadButton' accept='image/*' multiple type='file' onChange={fileSelectionHandler}/>
                    <div className='colorButton'>Select files to upload</div>
                    <img className='preview' width='100' height='100' src={localImgUrl}/>
                    <h5 className='previewTxt'>Preview</h5>
                </div> 
            </div>)}
            <div className='images'>
            {objectsArray.map(imgSrc => (
            <div className='imgBlock'>
                <div className='dateOfPic'>{imgSrc[0].date}</div>
                <div className='imgGroup' >
                {imgSrc.map(imgSr => (
                <div>                            
                    <img className='rollImage' width='100' height='100' key={imgSrc} src={imgSr.link} />
                </div>
                ))}
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default YouCameraRoll;