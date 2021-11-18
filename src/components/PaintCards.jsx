import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import PaintCardsStyle from "../styles/PaintCards.module.css";
import PaintCardItem from "./PaintCardItem";
import { useSelector } from "react-redux";

function PaintCards(props) {
  const [paints, setPaints] = useState([]);
  const [paintsList, setPaintsList] = useState([]);
  const artistRef = collection(db, "paints");

  const isOn = useSelector((state) => state);

  useEffect(() => {
    const getPaints = async () => {
      const data = await getDocs(artistRef);
      setPaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPaintsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPaints();
  }, []);

  useEffect(() => {
    if (props.categoryId != null) {
      setPaintsList(
        paints.filter((item) => item.categoryId == props.categoryId)
      );
    } else {
      setPaintsList([...paints]);
    }
  }, [props.categoryId]);

  return (
    <div
      className={PaintCardsStyle.cards}
      style={{ background: isOn ? "#fff" : "#161306" }}
    >
      <h1
        className={PaintCardsStyle.showProducts}
        style={{ color: isOn ? "#3b361a" : "#fff" }}
      >
        Mira las obras de nuestros Artistas
      </h1>
      <div className={PaintCardsStyle.cardsContainer}>
        <div className={PaintCardsStyle.cardsWrapper}>
          <ul className={PaintCardsStyle.cardsItems}>
            {paintsList.map((paint) => (
              <PaintCardItem
                image={paint.image}
                artist={paint.artist.name}
                price={paint.price}
                title={paint.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaintCards;
