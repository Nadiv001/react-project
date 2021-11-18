import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";
import ArtistCardItem from "./ArtistCardItem";
import { useSelector } from "react-redux";

function ArtistCards(props) {
  const [artists, setArtists] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const artistRef = collection(db, "artists");

  const isOn = useSelector((state) => state);

  useEffect(() => {
    const getArtists = async () => {
      const data = await getDocs(artistRef);
      setArtists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setArtistsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getArtists();
  }, []);

  useEffect(() => {
    if (props.categoryId != null) {
      setArtistsList(
        artists.filter((item) => item.categoryId == props.categoryId)
      );
    } else {
      setArtistsList([...artists]);
    }
  }, [props.categoryId]);

  return (
    <div
      className={ArtistCardsStyle.cards}
      style={{ background: isOn ? "#fff" : "#161306" }}
    >
      <h1
        className={ArtistCardsStyle.showArtists}
        style={{ color: isOn ? "#3b361a" : "#fff" }}
      >
        Mira a los creadores de magia
      </h1>
      <div className={ArtistCardsStyle.cardsContainer}>
        <div className={ArtistCardsStyle.cardsWrapper}>
          <ul className={ArtistCardsStyle.cardsItems}>
            {artistsList.map((artist) => (
              <ArtistCardItem
                image={artist.image}
                name={artist.name}
                gender={artist.gender}
                nationality={artist.nationality}
                birth={artist.birth}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistCards;
