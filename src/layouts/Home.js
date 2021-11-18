import React from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeBtn from "../components/HomeBtn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={AppStyle.Home}>
        <h2 className={AppStyle.HomeText}>¿Buscas arte independiente?</h2>
        <div>
          <h3 className={AppStyle.HomeSubText}>¡Estas en el lugar correcto!</h3>
        </div>
        <HomeBtn />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
