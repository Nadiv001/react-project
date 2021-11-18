import React, { useState, useEffect } from "react";
import PaintCardsStyle from "../styles/PaintCards.module.css";
import { getPaintUrl } from "./storage";

function Paint(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    getPaintUrl(props.image).then((url) => setUrl(url));
  }, []);

  return (
    <>
      <li className={PaintCardsStyle.cardsItem}>
        <div className={PaintCardsStyle.item}>
          <figure className={PaintCardsStyle.itemPicWrap}>
            <img
              src={url}
              alt="paint_image"
              className={PaintCardsStyle.itemImg}
            />
          </figure>
          <div key={props.id} className={PaintCardsStyle.itemInfo}>
            <p className={PaintCardsStyle.itemArtist}>{props.artist}</p>
            <p className={PaintCardsStyle.itemPrice}>${props.price} USD</p>
            <p className={PaintCardsStyle.itemTitle}>{props.title}</p>
            <p>
              <button>Contactar</button>
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Paint;
