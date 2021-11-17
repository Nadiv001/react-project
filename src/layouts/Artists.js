import React from "react";
import Artist from "../components/ArtistCard.jsx";
import AppStyle from "../styles/App.module.css";
import ArtistStyle from "../styles/Artist.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/artist.json";

const Artists = () => {
  return (
    <div className={AppStyle.Artists}>
      <Navbar />
      <h2>Artistas</h2>
      <div className={ArtistStyle.page}>
        <h3>Aqui es la categoría de Artistas</h3>
        <div className={ArtistStyle.pageCards}>
          {data.map((artist) => (
            <Artist artist={artist} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
