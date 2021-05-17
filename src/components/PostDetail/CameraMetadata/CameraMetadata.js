import React, { useState } from 'react';
import classes from './CameraMetadata.module.css';


const CameraMetadata = (props) => {


    return (
        <div className={classes.camera__metadata}>
            <ul>
                <div className={classes.column__1}>
                    <li>
                        <div className={classes.exif__row}>
                            <div className={classes.exif__item}>
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
                    

                </div>
            </ul>
        </div>

    );
}

export default CameraMetadata;