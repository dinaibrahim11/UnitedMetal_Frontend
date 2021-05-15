import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Popover from '@material-ui/core/Popover';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import { PinDropSharp } from '@material-ui/icons';

/**
 * Following Button
 * @async
 * @param {function} onClickFollowing 
 * @example <FollowingButton />
 * 
 */
const FollowingButton = (props) => {


    const [followingMenuOpen, setFollowingMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [friendChecked, setFriendChecked] = useState(false);
    const [familyChecked, setFamilyChecked] = useState(false);



    const handleOpenFollowing = (event) => {
        setFollowingMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleCloseFollowingPopover = () => {
        setFollowingMenuOpen(false);
        setAnchorEl(null);
    }

    const handleFriendCheckboxChange = (event) => {
        setFriendChecked(event.target.checked);
    }

    const handleFamilyCheckboxChange = (event) => {
        setFamilyChecked(event.target.checked);
    }

    const handleFollowClick = (event) => {

    }

    const handleUnFollow = (event) => {
        props.onClickUnFollow();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>

            <Button variant="outlined" color="primary" 
                onClick={handleOpenFollowing}
                startIcon={<CheckIcon />}
                style={{height: '30px', width: '130px', 
                        color: '#128fdc', backgroundColor: '#f3f5f6',
                        marginLeft: '10px'}}>
                Following
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseFollowingPopover}
                style={{width: '400px'}}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <FormGroup col>
                    <FormControlLabel 
                        control={<Checkbox
                            checked={friendChecked}
                            onChange={handleFriendCheckboxChange}
                            color="primary"
                            style={{marginLeft: '5px'}}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />}
                        label="Friend"
                    />
                    <FormControlLabel 
                        control={<Checkbox
                            checked={familyChecked}
                            onChange={handleFamilyCheckboxChange}
                            color="primary"
                            style={{marginLeft: '5px'}}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />}
                        label="Family"
                    />
                    <Divider />
                    <Button startIcon={<CloseIcon />} onClick={handleUnFollow} >UnFollow</Button>
                    </FormGroup>
            </Popover>
                       

        </Fragment>
    );
}

export default FollowingButton;