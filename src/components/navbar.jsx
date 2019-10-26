import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Material UI
import withStyles from "@material-ui/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
// import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

//Icons
// import PersonIcon from "@material-ui/icons/Person";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import HelpIcon from "@material-ui/icons/Help";

class NavBar extends Component {
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

export default NavBar;
