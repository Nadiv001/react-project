import React from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={AppStyle.Home}>
      <Navbar />
      <h2>Home</h2>
      <div>
        <h3>Aqui es la categoría de Home</h3>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
