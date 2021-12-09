import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navbar = () => {

  const {user, logOut} = useAuth()

  return (
    
  <AppBar position="static" style={{ background: '#2E3B55', height:'80px' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Inacare Health Service
        </Typography>
        <Link style={{color:'white', textDecoration:'none'}} to="/home"><Button color="inherit">Home</Button></Link>
        <Link style={{color:'white', textDecoration:'none'}} to="/appointment"><Button color="inherit">Appointment</Button></Link>


    {
      user?.email ? 
      <Button onClick={logOut} style={{color:'white', textDecoration:'none'}} color="inherit">Logout</Button>
      :
      <Link style={{color:'white', textDecoration:'none'}} to="/login"><Button color="inherit">Login</Button></Link>

    }


       
      </Toolbar>
    </AppBar>

  );
};

export default Navbar;