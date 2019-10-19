import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icons
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HelpIcon from "@material-ui/icons/Help";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="Nav__Container">
          <Button color="inherit" Component={Link} to="/user">
            User
          </Button>
          <Button color="inherit" Component={Link} to="/measure">
            Measure
          </Button>
          <Button color="inherit" Component={Link} to="/FAQ">
            FAQ
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
