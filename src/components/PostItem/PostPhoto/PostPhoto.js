import React from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import classes from './PostPhoto.module.css';
import { Link } from 'react-router-dom';

const PostPhoto = (props) => {

    const handlePhotoClick = () => {
        console.log(props.params)
    }

    return (
        <CardActionArea>
            <Link to={`/photos/${props.postId}`}><CardMedia 
                className={classes.post__image}
                // classes={{ root: classes }}
                image={props.imageUrl}
                title={props.description}
                onClick={handlePhotoClick}
            />
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>

        </CardActionArea>
    );
}

export default PostPhoto;