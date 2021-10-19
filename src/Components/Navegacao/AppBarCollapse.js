import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from 'react-router-dom';
import { color } from "@mui/system";


const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "0px",
    paddingLeft: "16px",
    right: 0,
    position: "fixed",
    width: "45%",
    background: "transparent",
  },
  a: {
    '&:hover': {
       color: "#00b8ff !important",
    },
  },
});

function AppBarCollapse(props) {
 return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem><Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }}  >Home</Link></MenuItem>
        <MenuItem><Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none" }} >Cursos</Link></MenuItem>
        <MenuItem><Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }} >Tecnologia</Link></MenuItem>
        <MenuItem><Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }} >Projetos</Link></MenuItem>
        <MenuItem><Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }} >Contato</Link></MenuItem>
        <MenuItem><Button variant="outlined" component={Link} to="/" style={{ color: "#00b8ff", borderColor: "#00b8ff" }}>Resumo</Button></MenuItem>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">

        <Link to="/" className={props.classes.a} style={{ color: "#ccd6f6", textDecoration: "none" }}  >Home</Link>
        <Link to="/cursos" className={props.classes.a} style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Cursos</Link>
        <Link to="/" className={props.classes.a} style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Tecnologia</Link>
        <Link to="/" className={props.classes.a} style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Projetos</Link>
        <Link to="/" className={props.classes.a} style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Contato</Link>
        <Button variant="outlined" target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRQsIRvp706B3LzBE_IJb34dpcAA5xo3OXsTEKbaabpro0qZTLNcvHVVZEI3PoHh6m2gBZB2GEAMU4e/pub"
         style={{ color: "#00b8ff", borderColor: "#00b8ff", marginLeft: 20 }}>Resumo
        </Button>
      </div>
    </div>
  );
}
export default withStyles(styles)(AppBarCollapse);
