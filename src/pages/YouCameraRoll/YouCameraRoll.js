/**
 * @function YouCameraRoll
 */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ShareModal from '../../components/UI/ShareModal/ShareModal'
import API from '../../fakeAPI';

/**
 * Responsible for returning the 
 * @param {properties} props 
 * @returns {element} the Camera Roll components
 */
const YouCameraRoll = (props) => {
    var objectsArray = []
    var dateArray = []
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [localImgUrl, setLocalImgUrl] = useState(null);
    const [privacyChoice, setPrivacyChoice] = useState(false);
    const [imgState, setImgState] = useState(null);
    const [isShareModalOpen,setIsShareModalOpen] = useState(false);
    const [pics,setPics] = useState([])
    
    let history = useHistory();
    let clickShare = '';
    const userId = props.userId;
    var picArray = [];
    var array =[{}];
    var dateTaken = "";
    var url = "";


    const download = e => {
        fetch(selectedImg.link, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
          });
      };

    useEffect (()=> {
        API.get('user/camera-roll', {
            headers: {
                "Authorization": `Bearer ${props.token}` 
            }}
            )
             .then(res => {
                array=res.data.data.photos.photos
                
    for (let item of array)
    {
        API.get(`photo/${item._id}`, {
            headers: {
                "Authorization": `Bearer ${props.token}` 
            }}
            )
             .then(res => {
                 dateTaken=res.data.data.dateUploaded.slice(0,10)
                 url = res.data.data.sizes.size.largeSquare.url
                 picArray.push({date:dateTaken, link:url, id:item._id})
                 setPics(picArray)
                 
             }) .catch( res => {
                alert(res.response);
                console.log(res.response);
             })
    }
             }) .catch( res => {

             })

             
    },[])
    const handleCloseShareModal = () => {
        setIsShareModalOpen(false);
    }

    const fileSelectionHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setLocalImgUrl(URL.createObjectURL(event.target.files[0]));
    }

    const selectImgHandler = (img) => {
        if (selectedImg == img)
        {
            setSelectedImg(null)
        }
        else 
        {
            setSelectedImg(img)
        }
    }
    const deleteObject = () => {
        API.delete(`photo/${selectedImg.id}`, {
            headers: {
                "Authorization": `Bearer ${props.token}` 
            }}
            )
            .then(res => {
            }) .catch( res => {

            })

    }

    const goToUpl = () => {
        history.push(`/upload`);
    }

    const uncheckOthersAndSet = (id) => {
        var boxes = document.getElementsByName('checkBox');
        setImgState(id);
        for (let item of boxes) {
            if (item.id != id) {
                item.checked=false;
            }
        }
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

    for (let item of pics) {
        if (dateArray.indexOf(item.date) == -1) {
            dateArray.push(item.date)
        }
    }

    for (let item1 of dateArray) {
        var sameDateArray = []
        for (let item2 of pics) {
            if (item1 == item2.date) {
                sameDateArray.push(item2)
            }
        }
        objectsArray.push(sameDateArray)
    }

    return (
        <div>
            <div className='background'>
            </div>
            {selectedImg && (<div className='choiceBar'>
                <div className='choiceBarBody'>
                </div>
                <img className='chosenImg' width='50' height='50' src={selectedImg.link}/>
                <div className='privacy'>
                    Privacy
                    <button className='privacyButton' onClick={()=>setPrivacyChoice(!privacyChoice)}></button>
                    { privacyChoice && (
                        
                        <div className='privacyMenu'>
                            <div className='popUpPrivacy'></div>
                            <div className='popUpPrivacyBg'>
                            <div className='privacyInputs'>
                                <div className='changePrivacy'>Change privacy?</div>
                                <input type="checkbox" id="public" name="checkBox" value="public" onClick={()=>uncheckOthersAndSet('public')}/>
                                <label for="public"> Public</label><br></br>
                                <input type="checkbox" id="private" name="checkBox" value="private" onClick={()=>uncheckOthersAndSet('private')}/>
                                <label for="private"> Private</label><br></br>
                                <input type="checkbox" id="friends" name="checkBox" value="friends" onClick={()=>uncheckOthersAndSet('friends')}/>
                                <label for="friends"> Friends</label><br></br>
                                <input type="checkbox" id="family" name="checkBox" value="family" onClick={()=>uncheckOthersAndSet('family')}/>
                                <label for="family"> Family</label><br></br>
                                <input type="checkbox" id="familyAndFriends" name="checkBox" value="familyAndFriends" onClick={()=>uncheckOthersAndSet('familyAndFriends')}/>
                                <label for="familyAndFriends"> Family and Friends</label><br></br>
                            </div>
                            </div>
                            
                            <button className='savePrivacyButton' onClick={()=>setPrivacyChoice(false)}>Change</button>
                            <button className='closePrivacyButton' onClick={()=>setPrivacyChoice(false)}>Cancel</button>
                        </div>
                    )}
                    <div className='download'>
                        Download
                        <a href={selectedImg.link} download onClick={e=>download(e)}>
                            <button className='downloadButton'></button>
                        </a>
                    </div> 
                    <div className='delete'>
                        Delete
                        <button className='deleteButton' onClick={deleteObject}></button>
                    </div>
                    <div className='addToAlbum'>
                        Add to Album
                        <button className='albumButton' ></button>
                    </div>
                    <div className='share'>
                        Share
                        <button className='shareButton' ref={button => {clickShare=button}} onClick={()=>setIsShareModalOpen(true)}></button>
                        <ShareModal isShareModalOpen={isShareModalOpen}
                                    handleCloseShareModal={handleCloseShareModal}
                                    modalTitle="Share the photo"
                                    externalShareLink={selectedImg.link}/>
                    </div>
                    
                </div>
                
            </div>
            )}
            
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
                    <img className='rollImage' onClick={()=>selectImgHandler(imgSr)} width='100' height='100' key={imgSrc} src={imgSr.link} />
                </div>
                ))}
                </div>
            </div>
            ))}
            </div>
            <button className='uploadButto' onClick={goToUpl}>Upload</button>
        </div>
    )
}

export default YouCameraRoll;