import React, { useState, useEffect } from "react";
import PaintCardsStyle from "../styles/PaintCards.module.css";
import { getPaintUrl } from "./storage";
import { useSelector } from "react-redux";

function Paint(props) {
  const [url, setUrl] = useState("");
  const isOn = useSelector((state) => state);

  useEffect(() => {
    getPaintUrl(props.image).then((url) => setUrl(url));
  }, []);
  useEffect(() => {
    getPaintUrl(props.image).then((url) => setUrl(url));
  }, [props.image]);

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
          <div
            key={props.id}
            className={PaintCardsStyle.itemInfo}
            style={{ background: isOn ? "#fff" : "#161306" }}
            style={{ color: isOn ? "#3b361a" : "#fff" }}
          >
            <p
              className={PaintCardsStyle.itemTitle}
              style={{ background: isOn ? "#fff" : "#161306" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.title}
            </p>
            <p
              className={PaintCardsStyle.itemArtist}
              style={{ background: isOn ? "#fff" : "#161306" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              {props.artist}
            </p>
            <p
              className={PaintCardsStyle.itemPrice}
              style={{ background: isOn ? "#fff" : "#161306" }}
              style={{ color: isOn ? "#3b361a" : "#fff" }}
            >
              ${props.price} USD
            </p>
            <div className={PaintCardsStyle.itemContact}>
              <a
                href="https://wa.me/573214477274?text=I%20love%20your%20paint!"
                target="_blank"
              >
                <button
                  type="button"
                  className={PaintCardsStyle.itemContactBtn}
                >
                  Contactar
                </button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Paint;
