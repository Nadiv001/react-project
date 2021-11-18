import React from "react";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";

function CardItem(props) {
  return (
    <>
      <li className={ArtistCardsStyle.cardsItem}>
        <div className={ArtistCardsStyle.cardsItemCard}>
          <figure className={ArtistCardsStyle.cardsItemPicWrap}>
            <img
              src={props.image}
              alt="artist_image"
              className={ArtistCardsStyle.cards__item__img}
            />
          </figure>
          <div className={ArtistCardsStyle.cardsItemInfo}>
            <p className={ArtistCardsStyle.cardsItemName}>{props.name}</p>
            <p className={ArtistCardsStyle.cardsItemGender}>{props.gender}</p>
            <p className={ArtistCardsStyle.cardsItemNationality}>
              {props.nationality}
            </p>
            <p className={ArtistCardsStyle.cardsItemBirth}>{props.birth}</p>
            {/* <div className="cards__item_payment">
              <button
                type="button"
                onClick={addCartProductList}
                className="cards__item__cart"
              >
              </button>
            </div> */}
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
