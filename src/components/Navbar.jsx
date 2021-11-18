import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "../styles/Navbar.module.css";
import logo from "../images/Barcasta.png";

function Navbar() {
  return (
    <>
      <nav className={NavbarStyle.nav}>
        <Link to="/" className={NavbarStyle.logo}>
          <img src={logo} alt="Barcasta" />
        </Link>
        <ul className={NavbarStyle.ul}>
          <li>
            <Link className={NavbarStyle.li} to="/Inicio">
              <p className={NavbarStyle.text}>Inicio</p>
            </Link>
          </li>
          <li>
            <Link className={NavbarStyle.li} to="/Artistas">
              <p className={NavbarStyle.text}>Artistas</p>
            </Link>
          </li>
          <li>
            <Link className={NavbarStyle.li} to="/Pinturas">
              <p className={NavbarStyle.text}>Pinturas</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;