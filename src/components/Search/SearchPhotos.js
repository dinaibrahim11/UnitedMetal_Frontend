import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    width: 900,
    height: 450,
  },
}));
const tileData = [
        
    {title:"title" ,img:"https://wallpapercave.com/uwp/uwp978614.jpeg" , cols: 1},
    {title:"title"  ,img:"https://wallpapercave.com/fwp/wp5716268.jpg" , cols: 3},
    {title:"title",  img:"https://wallpapercave.com/fwp/wp5981208.jpg"  , cols: 5},
    {title:"title"  , img:"https://wallpapercave.com/uwp/uwp404136.jpeg" , cols: 1},
    {title:"title", img:"https://wallpapercave.com/wp/wp170202.jpg"     , cols: 1},
    {title:"title", img:"https://wallpapercave.com/wp/wp4202055.jpg"     , cols: 1},
    {title:"title" , img:"https://wallpapercave.com/wp/FMSk24L.jpg"    , cols: 1},
    {title:"title", img:"https://wallpapercave.com/wp/9T3NTEL.jpg"    , cols: 1},
    {title:"title", img:"https://wallpapercave.com/wp/wp4203600.jpg"   , cols: 1   },
    {title:"title", img:"https://wallpapercave.com/wp/wp4079759.jpg"  , cols: 1    },
    {title:"title", img:"https://wallpapercave.com/wp/wp2586072.jpg"   , cols: 1   },
    {title:"title", img:"https://wallpapercave.com/wp/wp2882301.jpg"    , cols: 4   }];
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const SearchPhotos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default SearchPhotos;