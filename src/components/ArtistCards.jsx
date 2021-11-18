import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ArtistCardsStyle from "../styles/ArtistCards.module.css";
import ArtistCardItem from "./ArtistCardItem";
import image1 from "../images/artist/artist1.jpg";

function ArtistCards() {
  const [artists, setArtists] = useState([]);
  const artistRef = collection(db, "artists");

  useEffect(() => {
    const getArtists = async () => {
      const data = await getDocs(artistRef);
      setArtists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getArtists();
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
    <div className={ArtistCardsStyle.cards}>
      <h1 className={ArtistCardsStyle.showProducts}>
        Mira a los creadores de magia
      </h1>
      <div className={ArtistCardsStyle.cards__container}>
        <div className={ArtistCardsStyle.cards__wrapper}>
          <ul className={ArtistCardsStyle.cards__items}>
            {artists.map((artist) => (
              <ArtistCardItem
                image={artist.image}
                name={artist.name}
                gender={artist.gender}
                nationality={artist.nationality}
                birth={artist.birth}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistCards;
