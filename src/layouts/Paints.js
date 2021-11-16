import React from "react";
import Paint from "../components/Paint.jsx";
import data from "../data/paints.json";

const Pinturas = () => {
  return (
    <div>
      <h2>Pinturas</h2>
      <div>
        <h3>Aqui es la categoría de Pinturas</h3>
        {data.map((paint) => (
          <Paint paint={paint} />
        ))}
      </div>
    </div>
  );
};
export default Pinturas;
