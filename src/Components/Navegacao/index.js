import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Padding } from '@mui/icons-material';
import AppBarCollapse from "./AppBarCollapse.js";



export default function ButtonAppBar() {
  return (
    <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', alignItems: "end", marginTop: 0 }}>
      <Toolbar>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}
