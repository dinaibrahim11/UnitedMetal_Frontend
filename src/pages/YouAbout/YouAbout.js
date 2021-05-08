/**
 * Responsible for all what the about page contains
 * @function YouAbout
 */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import API from '../../fakeAPI';

/**
 * 
 * @param {properties} props 
 * @returns {element} About page contents
 */
const YouAbout = (props) => {
    const [showTBox,setShowTBox] = useState(true);
    const [Bio,setBio] = useState('');
    const [joinDate,setJoinDate] = useState('April 2021');
    const [email,setEmail] = useState('JohnSilva@gmail.com');
    const [viewsNo,setViewsNo] = useState(0);
    const [tagsNo,setTagsNo] = useState(0);
    const [favesNo,setFavesNo] = useState(0);
    const [groupsNo,GroupsNo] = useState(0);
    

    // get userId from the url
    const userId = props.userId;    

    useEffect(() => {
        API.get(`users/${userId}`)
            .then(res => {
                setBio(res.data.aboutme);
                setJoinDate(res.data.joindate);
                setEmail(res.data.email);

            })
            
        API.get(`users/${userId}/stats`)
            .then(res => {
                console.log(res.data[0]);
                setViewsNo(res.data[0].views);
                setTagsNo(res.data[0].tags);
                setFavesNo(res.data[0].faves);
                GroupsNo(res.data[0].groups);
            })
            
    }, [userId]);

    


    return (
        <div>
            <div className='background'>
            </div>
            <div className='bio'>
                {!Bio && showTBox && 
                (<div className='write' onClick={() => setShowTBox(false)}>Write something about yourself</div>)}

                {!showTBox && 
                (<textarea className='textBox' maxLength='150' value={Bio} onChange={(event) => setBio(event.target.value)}></textarea>)}

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
                <div className='joinDate'>{joinDate}</div>
                <h5 className='email'>Email</h5>
                <div className='userEmail'>{email}</div>
            </div>
            <div className='stats'>
                <h5 className='views'>views</h5>
                <h5 className='tags'>tags</h5>
                <h5 className='faves'>faves</h5>
                <h5 className='groups'>groups</h5>
                <div className='viewsNo'>{viewsNo}</div>
                <div className='tagsNo'>{tagsNo}</div>
                <div className='favesNo'>{favesNo}</div>
                <div className='groupsNo'>{groupsNo}</div>
            </div>
        </div>
    );
};

export default YouAbout;
