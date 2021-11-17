import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={NavbarStyle.nav}>
        <Link to="/" className={NavbarStyle.logo}>
          Barçasta, la Galería Virtual!
        </Link>
        <ul className={NavbarStyle.ul}>
          <li>
            <Link className={NavbarStyle.li} to="/Inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={NavbarStyle.li} to="/Artistas">
              Artistas
            </Link>
          </li>
          <li>
            <Link className={NavbarStyle.li} to="/Pinturas">
              Pinturas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
