import './Upload.css'
import { useState } from 'react'
import axios from 'axios'

const Upload = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [localImgUrl, setLocalImgUrl] = useState(null);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [people, setPeople] = useState("");
    const [albums, setAlbums] = useState("");

    var input = document.getElementById("description");
    
    const fileSelectionHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0]);
            setLocalImgUrl(URL.createObjectURL(event.target.files[0]));
            console.log("local url: ", URL.createObjectURL(event.target.files[0]));
    }

    const uploadHandler = () => {
        console.log(selectedFile);
        const fd = new FormData();
        fd.append("photo",selectedFile);
        fd.append("title","mostafa");
        fd.append("description","mostafaaa");
        for(var pair of fd.entries()) {
             console.log(pair[0]+', '+pair[1]);
           }
         console.log("form data: ", fd)
         let data = { photo: fd, Title:'test1',Description:'this is a test' };
         axios.post('http://localhost:7000/photo', fd, {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGQ1NDUwZWMwMDAwNTQ2ODYwN2ExMSIsImlhdCI6MTYyMjQ5OTg5OSwiZXhwIjoxNjMwMjc1ODk5fQ.00XtWUUUKFDEKUfFd4KJlau9hN928Qq40GMs79EVluE` 
            }}
            )
             .then(res => {
                 console.log(res)
             }) .catch( res => {

                 alert(res)
                 console.log(res.response)
             })

             setLocalImgUrl(null);
        


    }

    return (
        <div>
            <div className='backg'>wut</div>
            { !localImgUrl && (
            <div>    
                <div className='aboveBar'></div>
                <button className='colorButton'>Choose photos and videos to upload</button>
                <input className='upload' accept='image/*' type='file' onChange={fileSelectionHandler}/>
            </div>)}
            { localImgUrl && (
            <div>
                <img className='previewImg' width='100' height='100' src={localImgUrl}/>
                <div className='fileName'>{selectedFile.name}</div>
                <div className='sideBar'></div>
                <div className='aboveBar'>
                    <button className='inUpload'onClick={uploadHandler}>Upload</button>
                </div> 
                <div className='desc'>Add a description
                </div>
                <input className='description'/>
                <div className='tag'>Add tags</div>
            </div> )}
        </div>
    )
}

export default Upload;