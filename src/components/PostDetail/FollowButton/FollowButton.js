import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import API from '../../../fakeAPI';


/**
 * Follow button
 * @async
 * @param {function} onClickFollow - a function that sets the follow boolean to be true
 * @example <FollowButton />
 * 
 */
const FollowButton = (props) => {

    

    //const [followClicked, setFollowClicked] = useState(false);

    const handleFollowClick = (event) => {
        props.onClickFollow(true);
    }

    return (
            <Button variant="outlined" color="primary" 
                onClick={handleFollowClick}
                startIcon={<AddIcon />}
                style={{height: '30px', width: '100px', 
                        color: 'white', backgroundColor: '#008ddf',
                        marginLeft: '10px'}}>
                Follow
            </Button>
           
    );
}

export default FollowButton;