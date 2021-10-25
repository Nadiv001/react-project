import React from "react";
import "../../styles/paint.css";

function Paint({ paint }) {
  return (
    <div className="paint">
      <div key={paint.id} className="preview">
        <img src={paint.image} alt={`${paint.title}`} className="styleImage" />
        <h3>{paint.title}</h3>
        <p>{paint.artist}</p>
        <h5>{paint.price}</h5>
        <p>
          <button>Agregar al carrito</button>
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Paint;
