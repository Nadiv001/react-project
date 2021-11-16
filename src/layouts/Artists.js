import React from "react";
import Artist from "../components/Artist.jsx";
import data from "../data/artist.json";

const Artists = () => {
  return (
    <div>
      <h2>Artistas</h2>
      <div>
        <h3>Aqui es la categoría de Artistas</h3>
        {data.map((artist) => (
          <Artist artist={artist} />
        ))}
      </div>
    </div>
  );
};
export default Artists;
