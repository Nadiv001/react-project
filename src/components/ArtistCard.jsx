import React from "react";
import ArtistStyle from "../styles/Artist.module.css";

function Artist({ artist }) {
  return (
    <div className={ArtistStyle.card}>
      <figure className={ArtistStyle.cardFigure} data-category={artist.label}>
        <img src={artist.src} alt="artista" className={ArtistStyle.cardImg} />
      </figure>
      <div className={ArtistStyle.cardInfo}>
        <p>{artist.name}</p>
        <p>{artist.gender}</p>
        <p>{artist.dayOfBirth}</p>
        <p>{artist.nationality}</p>
        <button
          type="button"
          // onClick={Add method}
          className={ArtistStyle.cardBtn}
        >
          Contactar
        </button>
      </div>
    </div>
  );
}

export default Artist;
