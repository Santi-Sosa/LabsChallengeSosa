import React, { useState } from "react";
import style from "../styles/SearchBar.module.css";
import icon from "../content/iconBlack.ico";

//Componente Searchbar
function SearchBar() {
  
  //Estados
  const [state,setState] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const location = () => {
    window.location.href="/"
  }

  const handleSubmit = (value) => {
    console.log(value.query)
    if(value.query === undefined){}else{
      window.location.href=`/catalogue?query=${value.query}`;
    }
  }

  return (
    <div className={style.container}>
      <img name="icon" src={icon} alt="Logo HLS" onClick={location}/>
        <input
          id="inputSearch"
          className={style.input}
          placeholder="Realiza tu búsqueda"
          name="query"
          type="text"
          onChange={handleChange}
          />
        <input
          id="buttonSearch"
          className={style.button}
          type="button"
          value="Buscar"
          onClick={() => handleSubmit(state)}
          />
    </div>
  );
}

export default SearchBar;
