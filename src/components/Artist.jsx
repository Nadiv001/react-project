import React from "react";
import "../styles/artist.css";

function Artist({ artist }) {
  return (
    <div className="artist">
      <div key={artist.id} className="preview">
        <img src={artist.image} alt={`${artist.name}`} className="styleImage" />
        <h3>{artist.name}</h3>
        <p>{artist.gender}</p>
        <p>{artist.day_of_birth}</p>
        <p>{artist.nationality}</p>
        <p>
          <button>Contactar</button>
        </p>
      </div>
    </div>
  );
}

export default Artist;
