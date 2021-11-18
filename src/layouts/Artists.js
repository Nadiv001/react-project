import React, { useState } from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import ArtistCards from "../components/ArtistCards.jsx";
import Footer from "../components/Footer";

const Artists = (props) => {
  const [categoryId, setCategoryId] = useState(null);

  return (
    <div>
      <Navbar />
      <div className={AppStyle.Artists}>
        <Filter setCategoryId={setCategoryId} />
        <ArtistCards
          list={props.list}
          setCartProductList={props.setCartProductList}
          categoryId={categoryId}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
