
 import React, { useEffect } from 'react';
 import { Switch, Route } from 'react-router-dom';
 import Button from '@material-ui/core/Button'
 import ButtonGroup from '@material-ui/core/ButtonGroup'
 import { useState } from 'react';
 import { useHistory } from "react-router-dom";
 import { makeStyles } from '@material-ui/core/styles';
 import Tab from '@material-ui/core/Tab';
 import AppBar from '@material-ui/core/AppBar';
 import Tabs from '@material-ui/core/Tabs';
 
import SearchPhotos from './SearchPhotos';

 function a11yProps(index) {
     return {
         id: `scrollable-auto-tab-${index}`,
         'aria-controls': `scrollable-auto-tabpanel-${index}`,
 };
 }
       
 const useStyles = makeStyles((theme) => ({
     root: {
     flexGrow: 1,
     width: '100%',
     backgroundColor: theme.palette.background.paper,
     position: 'fixed'
     
 },
 }));
 
 /**
  * Array that contains the current pictures in the camera roll
  * @type {Array<strings>}
  */
 const DUMMY_IMAGES = ['https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg',
     'https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1937429821.jpg',
     'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117413.jpg',
     'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-tree.jpg',
     'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-tree.jpg',
     'https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg' ];
 
 /**
  * Responsible for returning the you page entirely with all its components and routing between them
  * @param {properties} props
  * @returns {element} The you page contents
  */
 const SearchMain = (props) => {
     const [tab, setTab] = useState('photos');
     let history = useHistory();
     const classes = useStyles();
     const [value, setValue] = React.useState(0);
     const handleChange = (event, newValue) => {
     setValue(newValue);
     };
     useEffect(() => {
         setTab(props.currentTab)
     }, [props.currentTab])
    
     return (
         <div>
 
             
             
             <div >
                 <div style={{marginBottom: '100px'}}>
                     <AppBar position="static" color="default" >
                         <Tabs
                         value={value}
                         onChange={handleChange}
                         indicatorColor="primary"
                         textColor="primary"
                         variant="scrollable"
                         scrollButtons="on"
                         aria-label="scrollable auto tabs example"
                         >
                             <Tab label="Photos" {...a11yProps(0)} onClick={() => setTab('photos')}/>
                             <Tab label="People" {...a11yProps(1)} onClick={() => setTab('people')}/>
                             <Tab label="Groups" {...a11yProps(2)} onClick={() => setTab('groups')}/>
                         </Tabs>
                     </AppBar>
         
                 </div>
             </div>
             <main >
                 {tab === 'photos' ? <SearchPhotos />  : tab === 'people' ? <></> : <></> }
             </main>
         </div>
     );
 };
 
 export default SearchMain;