import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Websthal
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Company Profile</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Careers</Button>
        <Button color="inherit">FAQ</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Blog</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
