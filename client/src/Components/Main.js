import React from "react";
import style from "../styles/Main.module.css";

//Componente Main
function Main() {

  return (
    <div className={style.container}>
      <label className={style.title}>Bienvenido a</label>
      <label className={style.titleTwo}>Tienda Henry Labs Sosa</label>
      <label className={style.subtitle}>Comienza buscando el producto que necesites en la barra de búsqueda</label>
    </div>
  );
}
export default Main;