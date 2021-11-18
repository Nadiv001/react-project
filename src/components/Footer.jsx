import React, { useState, useEffect } from "react";
import FooterStyle from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={FooterStyle.footer}>
        <div className={FooterStyle.info}>
          <p className={FooterStyle.text}> ¿Necesitas ayuda? </p>
          <p className={FooterStyle.phone}> +57 321 447 2738 </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
