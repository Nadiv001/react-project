import React from "react";
import "../styles/PaintCards.module.css";

function Paint(props) {
  return (
    <div className="paint">
      <div key={props.id} className="preview">
        <img src={props.image} alt={`${props.title}`} className="styleImage" />
        <h3>{props.title}</h3>
        <p>{props.artist}</p>
        <h5>{props.price}</h5>
        <p>
          <button>Agregar al carrito</button>
        </p>
      </div>
    </div>
  );
}

export default Paint;
