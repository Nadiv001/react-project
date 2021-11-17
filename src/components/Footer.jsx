import React, { useState, useEffect } from "react";
import FooterStyle from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={FooterStyle.footer}>
        <div className={FooterStyle.logo}>Barçasta</div>
        <div className={FooterStyle.info}>
          <div className={FooterStyle.phone}>
            <p> +57 316 506 2308 </p>
          </div>
          <div className={FooterStyle.copy}>
            <p> Copyright 2021 </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
