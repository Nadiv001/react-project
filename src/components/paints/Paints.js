import React from "react";
import './paint.css'
import information from './data';

function Paints () {
    return(
        <div className="paint">
           { information.map(product =>{
                return(
                    <div key={product.id} className="preview">
                        <img src={product.image} alt= {`${product.title}`} className="styleImage"/>
                        <h3>{product.title}</h3>
                         <p>{product.artist}</p>
                         <h5>{product.price}</h5>
                         <p>
                             <button>Agregar al carrito</button>
                         </p>
                         <div></div>
                    </div>
                )
            })}
        </div>
    )

}
export default Paints;
