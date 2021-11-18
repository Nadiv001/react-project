import React, { useState, useEffect } from "react";
import PaintCardsStyle from "../styles/PaintCards.module.css";
import PaintCardItem from "./PaintCardItem";
import image1 from "../images/paint/arte1.jpg";

function PaintCards(props) {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

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
      <div className={PaintCardsStyle.cards__container}>
        <div className={PaintCardsStyle.cards__wrapper}>
          <ul className={PaintCardsStyle.cards__items}>
            {productList.map((product) => (
              <PaintCardItem
                src={image1}
                NombreProducto={product.NombreProducto}
                PrecioVenta={product.PrecioVenta}
                list={props.list}
                setCartProductList={props.setCartProductList}
                producto={product}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaintCards;
