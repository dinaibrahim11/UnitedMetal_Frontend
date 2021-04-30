import React from 'react';
import { Avatar, CardHeader, Tooltip, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const PostHeader = (props) => {

    return (
        <CardHeader 
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

export default PostHeader;