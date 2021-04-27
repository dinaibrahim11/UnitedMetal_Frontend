import React from 'react';
import './YouCover.css';

const YouCover = (props) => {
    return(
    <div>
        <div class='Cover'>               
            <img class='userPic' width ='65' height ='65' src="https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg" />
            <h2 class='youPageName'>John Silva</h2>
            <h6 class='youPageUserName'>johnsilvamendes</h6>
            <h6 class='youFollowers'>0 Followers .</h6>
            <h6 class='youFollowing'>1 Following</h6>
        </div>
    </div>
    );
};
export default YouCover;