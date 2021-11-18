import React, { useState, useEffect } from "react";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";
import { getArtistUrl } from "./storage";

function CardItem(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    getArtistUrl(props.image).then((url) => setUrl(url));
  }, []);
  useEffect(() => {
    getArtistUrl(props.image).then((url) => setUrl(url));
  }, [props.image]);

  return (
    <>
      <li className={ArtistCardsStyle.cardsItem}>
        <div className={ArtistCardsStyle.cardsItemCard}>
          <figure className={ArtistCardsStyle.cardsItemPicWrap}>
            <img
              src={url}
              alt="artist_image"
              className={ArtistCardsStyle.cardsItemImg}
            />
          </figure>
          <div className={ArtistCardsStyle.cardsItemInfo}>
            <p className={ArtistCardsStyle.cardsItemName}>{props.name}</p>
            <p className={ArtistCardsStyle.cardsItemGender}>{props.gender}</p>
            <p className={ArtistCardsStyle.cardsItemNationality}>
              {props.nationality}
            </p>
            <p className={ArtistCardsStyle.cardsItemBirth}>{props.birth}</p>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
