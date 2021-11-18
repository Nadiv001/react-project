import React from "react";
import PaintCardsStyle from "../styles/PaintCards.module.css";

function Paint(props) {
  return (
    <>
      <li className={PaintCardsStyle.cardsItem}>
        <div className={PaintCardsStyle.item}>
          <figure className={PaintCardsStyle.itemPicWrap}>
            <img
              src={props.image}
              alt="artist_image"
              className={PaintCardsStyle.itemImg}
            />
          </figure>
          <div key={props.id} className={PaintCardsStyle.itemInfo}>
            <p className={PaintCardsStyle.itemArtist}>{props.artist}</p>
            <p className={PaintCardsStyle.itemPrice}>{props.price}</p>
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
