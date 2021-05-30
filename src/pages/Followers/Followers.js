import React, { useState } from 'react';
import './Followers.css'

const followers = (props) => {
    return (
        <div>
            <div className='show'>
                Show:
            </div>
            <select className='options'>
                <option disabled selected value>----</option>
                <option value='all of your followers'>all of your followers</option>
                <option value='followers you follow'>followers you follow</option>
                <option value="followers you don't follow">followers you don't follow</option>
            </select>
        </div>
    )
}

export default followers;