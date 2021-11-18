import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "../styles/Navbar.module.css";
import logo from "../images/Barcasta.png";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const isOn = useSelector((state) => state);

  const onClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <nav
        className={NavbarStyle.nav}
        style={{ background: isOn ? "#a69f76" : "#3b361a" }}
      >
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
          <li>
            <label class={NavbarStyle.switch}>
              <input type="checkbox" onChange={onClick} />
              <span class={NavbarStyle.sliderRound}></span>
            </label>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
