import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from 'react-router-dom';


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
    background: "transparent"
  }
});

const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem><Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }}  >Home</Link></MenuItem>
      <MenuItem><Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none" }} >Cursos</Link></MenuItem>
      <MenuItem><Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none" }} >Tecnologia</Link></MenuItem>
      <MenuItem><Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none" }} >Projetos</Link></MenuItem>
      <MenuItem><Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none" }} >Contato</Link></MenuItem>
      <MenuItem><Button variant="outlined" component={Link} to="/" style={{ color: "#00b8ff", borderColor: "#00b8ff"}}>Resumo</Button></MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">

      <Link to="/" style={{ color: "#ccd6f6", textDecoration: "none" }}  >Home</Link>
      <Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Cursos</Link>
      <Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Tecnologia</Link>
      <Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Projetos</Link>
      <Link to="/cursos" style={{ color: "#ccd6f6", textDecoration: "none", marginLeft: 30 }} >Contato</Link>
      <Button variant="outlined" component={Link} to="/" style={{ color: "#00b8ff", borderColor: "#00b8ff", marginLeft: 20 }}>Resumo</Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
