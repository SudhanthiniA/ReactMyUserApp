import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Container, styled } from '@mui/material';

const StyledLink = styled(NavLink) (
  {
    textDecoration: 'none',
    color: '#ffffff'
  }
)
const Navbar = () => {
  return (
  
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Container>
      <Toolbar>
      
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User App
        </Typography>
        <Box sx={{display:'flex', alignItems: 'center', gap:'50px'}}>
        <StyledLink to='/'>Dashboard</StyledLink>
        <StyledLink to='/userlist'>User List</StyledLink>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  </Box>
  )
}

export default Navbar