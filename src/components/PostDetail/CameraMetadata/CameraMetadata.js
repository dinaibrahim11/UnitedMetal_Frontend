import React, { Fragment, useState } from 'react';
import classes from './CameraMetadata.module.css';


const CameraMetadata = (props) => {

    const [isExifOpen, setIsExifOpen] = useState(false);

    // useEffect(() => {
    //     // TODO: make API request to get the camera name and model and focal length and camera lens

    //     // TODO: make API request to get EXIF data


    // }, []);


    const handleExifClick = () => {
        setIsExifOpen(prevState => !prevState);
        // TODO: make API request to get EXIF data
    }

    return (
        <div className={classes.camera__metadata}>
            <ul>
                <div className={classes.column__1}>
                    <li>
                        <div className={classes.exif__row}>
                            <div className={classes.exif__item} style={{marginTop: '20px'}}>
                                <span className={classes.camera} title="Nikon D750" ></span>
                            </div>
                            <div className={`${classes.exif__item} ${classes.lens}`}>
                                <div style={{marginBottom: '5px', marginLeft: '20px', color: '#006dac'}}>
                                    {props.cameraName}
                                </div>
                                <div style={{marginLeft: '20px', fontSize: '13px', width: '150px'}}>
                                    {props.lensString}
                                </div>
                                <div style={{marginLeft: '20px', fontSize: '13px', width: '150px'}}>
                                    {props.focalLength}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.exif}>
                        <img  className={classes.exif__icon} />
                        <p onClick={handleExifClick} 
                            className={classes.exif__link}
                        >
                            {!isExifOpen ? "Show EXIF" : "Hide EXIF"}
                        </p>
                    </li>
                    {isExifOpen && (
                        <Fragment>               
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Compression - </span>
                                    <span className="exif-value">JPEG (old-style)</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Make - </span>
                                    <span className="exif-value">Zeiss</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">X-Resolution - </span>
                                    <span className="exif-value">240 dpi</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Y-Resolution - </span>
                                    <span className="exif-value">240 dpi</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Software - </span>
                                    <span className="exif-value">Adobe Photoshop Lightroom classNameic 9.2 (Macintosh)</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Date and Time (Modified) - </span>
                                    <span className="exif-value">2021:05:25 15:17:56</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">YCbCr Positioning - </span>
                                    <span className="exif-value">Centered</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Exif Version - </span>
                                    <span className="exif-value">0231</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Date and Time (Digitized) - </span>
                                    <span className="exif-value">2021:04:27 13:46:46</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Offset Time - </span>
                                    <span className="exif-value">+02:00</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Components Configuration - </span>
                                    <span className="exif-value">Y, Cb, Cr, -</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">User Comment - </span>
                                    <span className="exif-value">-Make=Zeiss
                                        -Model=Ikon ZM
                                        LensTaggerVer:1.9.0</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Flashpix Version - </span>
                                    <span className="exif-value">0100</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Color Space - </span>
                                    <span className="exif-value">sRGB</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">File Source - </span>
                                    <span className="exif-value">Digital Camera</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Scene Type - </span>
                                    <span className="exif-value">Directly photographed</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Coded Character Set - </span>
                                    <span className="exif-value">UTF8</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Envelope Record Version - </span>
                                    <span className="exif-value">4</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Application Record Version - </span>
                                    <span className="exif-value">4</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Keywords - </span>
                                    <span className="exif-value">2021</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Digital Creation Date - </span>
                                    <span className="exif-value">2021:04:27</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Digital Creation Time - </span>
                                    <span className="exif-value">13:46:46-07:00</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">IPTCDigest - </span>
                                    <span className="exif-value">1642ec5ffd06b2a72fba21eb4ff40e7d</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">XMPToolkit - </span>
                                    <span className="exif-value">Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        </span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Format - </span>
                                    <span className="exif-value">image/jpeg</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Subject - </span>
                                    <span className="exif-value">2021</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Creator Tool - </span>
                                    <span className="exif-value">Adobe Photoshop Lightroom classNameic 9.2 (Macintosh)</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Metadata Date - </span>
                                    <span className="exif-value">2021:05:25 15:17:56+02:00</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Derived From Document ID - </span>
                                    <span className="exif-value">DBA19EAC63370E131E7696C177ABFF5D</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Derived From Original Document ID - </span>
                                    <span className="exif-value">DBA19EAC63370E131E7696C177ABFF5D</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Document ID - </span>
                                    <span className="exif-value">xmp.did:72a8c55c-9307-447c-b56f-f90dc5149844</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Instance ID - </span>
                                    <span className="exif-value">xmp.iid:72a8c55c-9307-447c-b56f-f90dc5149844</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Original Document ID - </span>
                                    <span className="exif-value">DBA19EAC63370E131E7696C177ABFF5D</span>
                                </li>
                                <li className="extended-exif-item" >
                                    <span className="exif-name">Preserved File Name - </span>
                                    <span className="exif-value">2021003_8.jpg</span>
                                </li>
                            </Fragment>  
                    
                    )}

                </div>
            </ul>
        </div>

    );
}

export default CameraMetadata;