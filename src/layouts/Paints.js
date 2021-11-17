import React from "react";
import AppStyle from "../styles/App.module.css";
import Paint from "../components/Paint.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/paints.json";

const Paints = () => {
  return (
    <div className={AppStyle.Paints}>
      <Navbar />
      <h2>Pinturas</h2>
      <div>
        <h3>Aqui es la categoría de Pinturas</h3>
        {data.map((paint) => (
          <Paint paint={paint} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Paints;
