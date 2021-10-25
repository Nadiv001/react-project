import "../../Styles/menu.css";
import { Link } from "react-router-dom";
import React from "react";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Menu } from "@material-ui/core";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div style={{ marginLeft: "0%" }}>
      <Button onClick={handleClick}>
        <h3>Menu</h3>
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/Home">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Artists">Artists</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Paints">Paints</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuBar;
