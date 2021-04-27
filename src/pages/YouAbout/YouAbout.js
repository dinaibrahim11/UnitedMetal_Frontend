import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const YouAbout = (props) => {
    const [showBox,setShowBox] = useState('false');
    useEffect(() => {
        console.log(`Show is now ${showBox}`);
    }
    )
    return (
        <div>
            <div className='background'>
            </div>
            <div className='bio'>
                <div className='editButton'onClick={() => setShowBox(!showBox)}> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Pencil_edit_icon.jpg" alt="Edit bio" width="15" height="15"/> 
                </div>
            {!showBox && (<textarea className='textBox'></textarea>)}
            </div>
            <div className='showcase'>
            </div>
            <div className='info'>
                <h5 className='joined'>Joined</h5>
                <div className='joinDate'>April 2021</div>
                <h5 className='email'>Email</h5>
                <div className='userEmail'>JohnSilva@gmail.com</div>
            </div>
            <div className='stats'>
            </div>
        </div>
    );
};

export default YouAbout;
