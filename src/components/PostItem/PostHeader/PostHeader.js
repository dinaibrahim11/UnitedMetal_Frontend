import React from 'react';
import { Avatar, CardHeader, Tooltip, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PropTypes from 'prop-types';

/**
 * Contains the header of the post/photo
 * @author Abdelrahman Mamdouh
 * @param {*} props 
 * @returns <CardHeader />
 */
const PostHeader = (props) => {

    return (
        <CardHeader 
            data-testid="cardHeader"
            avatar={<Avatar src={props.avatar} alt={props.username} />}
            title={props.username}
            action={(
                <Tooltip title="More">
                    <IconButton onClick={props.onClickMore}>
                        <MoreHorizIcon />
                    </IconButton>
                </Tooltip>
            )}
        />
    );
}

PostHeader.propTypes = {
    /**
     * username of the owner of the post/photo
     */
    username: PropTypes.string.isRequired,
    /**
     * avatar photo of the owner of the post/photo
     */
    avatar: PropTypes.string.isRequired,
    /**
     * callback function that is triggered when you click on the more button 
     * in the top right corner of the post
     */
    onClickMore: PropTypes.func.isRequired
};

export default PostHeader;