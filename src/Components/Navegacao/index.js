import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
         <Button><Link to="/" color="inherit">Home</Link></Button>
          <Button><Link to="/cursos" color="inherit">Cursos que ja fiz</Link></Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} text-align="center" >
            Matheus Castro Oliveira
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
