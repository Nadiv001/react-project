import React, { useState } from "react";
import AppStyle from "../styles/App.module.css";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import PaintCards from "../components/PaintCards.jsx";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Paints = (props) => {
  const [categoryId, setCategoryId] = useState(null);
  const isOn = useSelector((state) => state);
  return (
    <div>
      <Navbar />
      <div
        className={AppStyle.Paints}
        style={{ background: isOn ? "#f2ebb8" : "#5f5227" }}
      >
        <Filter setCategoryId={setCategoryId} />
        <PaintCards
          list={props.list}
          setCartProductList={props.setCartProductList}
          categoryId={categoryId}
        />
      </div>
      <Footer />
    </div>
  );
  // {data.map((paint) => (
  //   <Paint paint={paint} />
  // ))}
};

export default Paints;
