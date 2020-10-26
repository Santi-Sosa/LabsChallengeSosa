import React, { useState, useEffect } from "react";
import style from "../styles/Catalogue.module.css";
import ProductCard from "./ProductCard.js";
import axios from "axios";

//Componente Catalogo
function Catalogue(props) {
  var location = window.location.href
  //Extraemos del query el string con la búsqueda
  var url = location.substr(38)
  //Variable para una búsqueda sin resultados
  var none;
  
  //Declaración de estados
  const [allProducts, setProducts] = useState([]);
  const [base, setBase] = useState([]);
  const [slide, setSlide] = useState();
  const [pass, setPass] = useState(false);

  useEffect(() => {
    handleSearch(url);
    handleSearchBase(url);
    setTimeout(() => {
      setPass(true);
    }, 5000);
  }, []);
  
  //Request al Backend
  const handleSearch = (value) => {
    axios.get(`http://localhost:3001/api/search?query=${value}`)
    .then((data) => {
      none = [
        <div>
            <h1 className={style.none}>Buscando...</h1>
          </div>
        ]
        if(data.data.data){
          setProducts(data.data.data);
        }else{
          setProducts(data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSearchBase = (value) => {
    axios.get(`http://localhost:3001/api/search?query=${value}`)
    .then((data) => {
      if(data.data.data){
        setBase(data.data.data);
      }else{
        setBase(data.data);
      }
    })
    .catch((err) => console.log(err));
  };

  const orderPrice = (evento) => {
    const selected = evento.target.value;
    if(selected == 1){
      //Menor a mayor
      setProducts(base.sort(function(prev, next){
        return prev.price - next.price
      }))
    }else if(selected == 2){
      //Mayor a menor
      handleSearchBase(url);
      setProducts(base.sort(function(prev, next){
        return next.price - prev.price;
      }))
    }else if(selected == 0){
      handleSearch(url);
    }
  }

  //Funciones de Filtros
  const filterNew = () => {
    setProducts(base.filter(product => product.condition === "new"));
  }

  const filterUsed = () => {
    setProducts(base.filter(product => product.condition === "used"));
  }

  //Función para paginar
  const pages = (evento) => {
    setProducts(base);
    var checkboxes = evento.target.checked;
    if(checkboxes){
      setProducts(allProducts.splice(0,30));
      setSlide([
        <div>
          <button className={style.buttonNext} onClick={nextPage}>Siguiente página</button>
        </div>
      ])
    }else{
      setSlide([]);
      handleSearch(url);
    }
  }
  
  const nextPage = () => {
    setProducts(base.splice(30))
    setSlide([
      <div>
        <button className={style.buttonPrev} onClick={prevPage}>Página anterior</button>
      </div>
    ])
  }

  const prevPage = () => {
    setProducts(base.splice(0,30));
    setSlide([
      <div>
        <button className={style.buttonNext} onClick={nextPage}>Siguiente página</button>
      </div>
    ])
  }

  //Búsqueda sin nada
  if(allProducts.length === 0 && pass){
      none = [
        <div>
          <h1 className={style.none}>No hay resultados que coincidan con tu búsqueda</h1>
        </div>
      ]
  }

  //Sacar filtros
  const outFilter = () => {
    document.location.reload()
  }

  return (
    <div className={style.container}>
      <div className={style.bar}>
        <label className={style.title}>Ordenar Resultados</label>
        <label className={style.subtitle}>Por precio:</label>
        <select className={style.select} id="selectPrice" onChange={orderPrice}>
          <option value="0">Sin ordenar</option>
          <option value="1">De menor a mayor</option>
          <option value="2">De mayor a menor</option>
        </select>
        <label className={style.title}>Filtrar Resultados</label>
        <label className={style.subtitle}>Por condición:</label>
        <form className={style.filter}>
          <div className={style.filterDiv}>
          <label><input type="radio" id="filtN" name="optradio" onChange={filterNew}/>Nuevo</label>
          </div>
          <div className={style.filterDiv}>
          <label><input type="radio" id="filtU" name="optradio" onChange={filterUsed}/>Usado</label>
          </div>
          <input type="reset" id="reset" className={style.buttonReset} value="Sacar filtros" onClick={outFilter}/>
        </form>
        <br/><br/><br/>
        <label className={style.page}><input type="checkbox" id="checkbox" onClick={pages} />Paginar de a 30 productos</label>
      </div>
      <div>
        <div className={style.products}>
        {allProducts.map((product, id) => <ProductCard key={id} product={allProducts[id]}/>)}
        </div>
        <div className={style.none}>{none}</div>
        <div className={style.slide}>{slide}</div>
      </div>
    </div>
  );
}

export default Catalogue;