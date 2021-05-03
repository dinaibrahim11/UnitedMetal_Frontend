import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const YouAbout = (props) => {
    const [showTBox,setShowTBox] = useState(true);
    const [Bio,setBio] = useState('false');
    useEffect(() => {
        console.log(`Show is now ${showTBox}`);
        console.log(`Bio is now ${Bio}`);
    }
    )
    return (
        <div>
            <div className='background'>
            </div>
            <div className='bio'>
                
                {!showTBox && 
                (<textarea className='textBox' value={Bio} onChange={(event) => setBio(event.target.value)}></textarea>)}
                {!showTBox && 
                (<button className='submitButton' onClick={()=> setShowTBox(!showTBox)}>Save</button>)}
                {showTBox&& (
                <div className='editButton' onClick={() => setShowTBox(!showTBox)}> 
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Pencil_edit_icon.jpg' alt='Edit bio' width='15' height='15'/> 
                </div>)}
                {showTBox && (<p>{Bio}</p>) }
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
                <h5 className='views'>views</h5>
                <h5 className='tags'>tags</h5>
                <h5 className='faves'>faves</h5>
                <h5 className='groups'>groups</h5>
            </div>
        </div>
    );
};

export default YouAbout;
