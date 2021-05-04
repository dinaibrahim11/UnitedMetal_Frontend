import React from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import classes from './PostPhoto.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * Renders the image and description under the image
 * @author Abdelrahman Mamdouh
 * @param {*} props 
 * @returns (
 *      <CardMedia />
 *      <Typography />
 * )
 */
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
                <Typography data-testid="description" variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>

        </CardActionArea>
    );
}

PostPhoto.propTypes = {
    /**
     * id of the current photo
     */
    postId: PropTypes.number.isRequired,
    /**
     * params
     */
    params: PropTypes.any,
    /**
     * link of the photo
     */
    imageUrl: PropTypes.string.isRequired,
    /**
     * description of the photo
     */
    description: PropTypes.string.isRequired
};

export default PostPhoto;