import React from "react";
import style from "../styles/ProductCard.module.css";

//Componente ProductCard
function ProductCard(props) {
  var condition = props.product.condition

  if(condition === "new"){condition = "Nuevo"}
  else if(condition === "used"){condition = "Usado"}
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img alt="Imagen Producto" className={style.img} src={props.product.thumbnail}/>
      </div>
      <div className={style.titles}>
        <label className={style.price}>${props.product.price}</label>
        <label className={style.title}>{props.product.title}</label>
        <label className={style.condition}>{condition}</label>
        <label className={style.stock}>Stock: {props.product.sold_quantity}</label>
      </div>
    </div>
  );
}

export default ProductCard;