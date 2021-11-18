import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import PaintCardsStyle from "../styles/PaintCards.module.css";
import PaintCardItem from "./PaintCardItem";

function PaintCards() {
  const [paints, setPaints] = useState([]);
  const artistRef = collection(db, "paints");

  useEffect(() => {
    const getPaints = async () => {
      const data = await getDocs(artistRef);
      setPaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPaints();
  }, []);

  // const [productList, setProductList] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);

  // const fetchAllProducts = async () => {
  //   const response = await getAllProducts();
  //   const data = response.data;
  //   setProductList(data);
  // };
  // const fetchAllCategories = async () => {
  //   const response = await getAllCategories();
  //   const data = response.data;
  //   setCategoryList(data);
  // };

  // useEffect(() => {
  //   if (props.categoryId != null) {
  //     fetchAllCategories();
  //     const filteredProducts = [];
  //     for (const current in categoryList) {
  //       if (parseInt(categoryList[current].IdCategoria) == props.categoryId) {
  //         filteredProducts.push(parseInt(categoryList[current].IdProducto));
  //       }
  //     }
  //     const filteredResult = productList.filter((product) =>
  //       filteredProducts.includes(parseInt(product.IdProducto))
  //     );
  //     setProductList(filteredResult);
  //   } else {
  //     fetchAllProducts();
  //   }
  // }, [props.categoryId]);
  // useEffect(() => {
  //   fetchAllProducts();
  //   fetchAllCategories();
  // }, []);
  // useEffect(() => {
  //   console.log(categoryList);
  // }, [categoryList]);

  return (
    <div className={PaintCardsStyle.cards}>
      <h1 className={PaintCardsStyle.showProducts}>
        Mira las obras de nuestros Artistas
      </h1>
      <div className={PaintCardsStyle.cardsContainer}>
        <div className={PaintCardsStyle.cardsWrapper}>
          <ul className={PaintCardsStyle.cardsItems}>
            {paints.map((paint) => (
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
