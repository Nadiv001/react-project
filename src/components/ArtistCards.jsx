import React, { useState, useEffect } from "react";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";
import ArtistCardItem from "./ArtistCardItem";
import image1 from "../images/artist/artist1.jpg";

function ArtistCards(props) {
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
    <div className={ArtistCardsStyle.cards}>
      <h1 className={ArtistCardsStyle.showProducts}>
        Mira a los creadores de magia
      </h1>
      <div className={ArtistCardsStyle.cards__container}>
        <div className={ArtistCardsStyle.cards__wrapper}>
          <ul className={ArtistCardsStyle.cards__items}>
            {productList.map((product) => (
              <ArtistCardItem
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

export default ArtistCards;
