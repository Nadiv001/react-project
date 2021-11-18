import React, { useState, useEffect } from "react";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";
import { getArtistUrl } from "./storage";
import { useSelector } from "react-redux";

function CardItem(props) {
  const [url, setUrl] = useState("");
  const isOn = useSelector((state) => state);

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
          <div
            className={ArtistCardsStyle.cardsItemInfo}
            style={{ background: isOn ? "#fff" : "#3b361a" }}
            style={{ color: isOn ? "#3b361a" : "#fff" }}
          >
            <p
              className={ArtistCardsStyle.cardsItemName}
              style={{ background: isOn ? "#fff" : "#3b361a" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.name}
            </p>
            <p
              className={ArtistCardsStyle.cardsItemGender}
              style={{ background: isOn ? "#fff" : "#3b361a" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.gender}
            </p>
            <p
              className={ArtistCardsStyle.cardsItemNationality}
              style={{ background: isOn ? "#fff" : "#3b361a" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.nationality}
            </p>
            <p
              className={ArtistCardsStyle.cardsItemBirth}
              style={{ background: isOn ? "#fff" : "#3b361a" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.birth}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
