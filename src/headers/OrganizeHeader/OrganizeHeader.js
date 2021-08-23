import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const OrganizeHeader = () => {
    
    return (
     <div>
          
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            United Metal
          </Typography>
        </Toolbar>
       </AppBar>

     </div>
    )
}
export default OrganizeHeader


