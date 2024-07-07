import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';



export default function Nav() {   


const ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
      light: '#1c1e29',
    },
    secondary: {
      main: '#f50057',
    },
  },
};
    
      return (
        // <ThemeProvider theme={darkTheme}>

        <AppBar position="static" 
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ mr: 10, 
                display: { xs: 'none', md: 'flex', 
                backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.1)
            }

             }}
              >
                Unsigned
              </Typography>
      <nav className="navbar navbar-expand-lg">
  
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ mr: 10, display: { xs: 'none', md: 'flex'}}}
                href="/">            
              <Button
                href="/"
                variant="h4"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Home</Button>

        </Typography >
         {/* <a className="nav-link" href="/">Home</a> */}
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="/">Projects</a>
         
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/about">About me</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Bootcamp</a>
      </li>  
    </ul>
</nav>
            </Toolbar>
          </Container>

        </AppBar>
      );
    };
