import { render } from "@testing-library/react";
import './menu.css'
import { Link } from "react-router-dom"
import React from "react";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Menu } from "@material-ui/core"

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div
            style={{ marginLeft: "0%", }}>

            <Button
               // aria-controls="simple-menu"
                //aria-haspopup="true"
                onClick={handleClick}><h3>Menu</h3>
            </Button>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}>
            
                <MenuItem onClick={handleClose}><Link to="/Pinturas">Pinturas</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/Dibujos">Dibujos</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/Artistas">Artistas</Link></MenuItem>
            </Menu>
        </div>
    );
};


export default MenuBar;
