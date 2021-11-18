import React, { useState, useEffect } from "react";
import FooterStyle from "../styles/Footer.module.css";
import { useSelector } from "react-redux";

function Footer() {
  const isOn = useSelector((state) => state);

  return (
    <>
      <footer
        className={FooterStyle.footer}
        style={{ background: isOn ? "#a69f76" : "#3b361a" }}
      >
        <div className={FooterStyle.info}>
          <p className={FooterStyle.text}> ¿Necesitas ayuda? </p>
          <p className={FooterStyle.phone}> +57 321 447 2738 </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
