import React from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className={AppStyle.NotFound}>
        <h2>404</h2>
        <div>
          <h3>Página no encontrada</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
