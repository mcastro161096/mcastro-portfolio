import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { Padding } from '@mui/icons-material';
import  AppBarCollapse from "./AppBarCollapse.js";



export default function ButtonAppBar() {
  return (
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', alignItems:"end", marginTop: 0}}>
        {/* <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Toolbar>
          {/* <Link to="/" style={{color:"#ccd6f6", textDecoration: "none"}}  >Home</Link>
          <Link to="/cursos"style={{color:"#ccd6f6", textDecoration: "none", marginLeft:30}} >Cursos</Link>
          <Link to="/cursos"style={{color:"#ccd6f6", textDecoration: "none", marginLeft:30}} >Tecnologia</Link>
          <Link to="/cursos"style={{color:"#ccd6f6", textDecoration: "none", marginLeft:30}} >Projetos</Link>
          <Link to="/cursos"style={{color:"#ccd6f6", textDecoration: "none", marginLeft:30}} >Contato</Link> */}
          <AppBarCollapse/>
         </Toolbar>
      </AppBar>
  );
}
