import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function CardItem(props) {
  const addCartProductList = () => {
    props.setCartProductList([...props.list, props.producto]);
    alert("Producto añadido con éxito");
  };
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__card">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="product" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <p className="cards__item__name">{props.NombreProducto}</p>
            <div className="cards__item_payment">
              <p className="cards__item__price">${props.PrecioVenta}</p>
              <button
                type="button"
                onClick={addCartProductList}
                className="cards__item__cart"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
