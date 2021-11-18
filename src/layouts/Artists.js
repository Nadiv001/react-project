import React, { useState } from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import ArtistCards from "../components/ArtistCards.jsx";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Artists = (props) => {
  const [categoryId, setCategoryId] = useState(null);
  const isOn = useSelector((state) => state);

  return (
    <div>
      <Navbar />
      <div
        className={AppStyle.Artists}
        style={{ background: isOn ? "#f2ebb8" : "#5f5227" }}
      >
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
