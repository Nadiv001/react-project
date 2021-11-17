import React, { useState, useEffect } from "react";
import ArtistStyle from "../styles/Artist.module.css";
import ArtistCard from "./ArtistCard";
import img1 from "../images/artist/artist1.jpg";

function Artists() {
  return (
    <div className={ArtistStyle.cardsContainer}>
      <ul className={ArtistStyle.cardsList}>
        {artistList.map((artist) => (
          <ArtistCard
            src={img1}
            name={artist.name}
            gender={artist.gender}
            doyOfBirth={artist.dayOfBirth}
            nationality={artist.nationality}
          />
        ))}
      </ul>
    </div>
  );
}

export default Artists;
