import './Upload.css'
import { useState } from 'react'

const Upload = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [localImgUrl, setLocalImgUrl] = useState(null);
    const fileSelectionHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0]);
            setLocalImgUrl(URL.createObjectURL(event.target.files[0]));
            console.log("local url: ", URL.createObjectURL(event.target.files[0]));
    }

    const uploadHandler = () => {
        setLocalImgUrl(null);
    }

    return (
        <div>
            <div className='backg'>wut</div>
            { !localImgUrl && (
            <div>    
                <button className='colorButton'>Choose photos and videos to upload</button>
                <input className='upload' accept='image/*' multiple type='file' onChange={fileSelectionHandler}/>
            </div>)}
            { localImgUrl && (
            <div>
                <img className='previewImg' width='100' height='100' src={localImgUrl}/>
                <div className='sideBar'></div>
                <div className='aboveBar'>
                    <button className='inUpload'onClick={uploadHandler}>Upload</button>
                </div> 
            </div> )}
        </div>
    )
}

export default Upload;