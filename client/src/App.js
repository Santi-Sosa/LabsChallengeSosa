import React/* , { useState } */ from 'react';
/* import logo from './logo.svg'; */
/* import style from './styles/App.module.css'; */
import { BrowserRouter, Route} from "react-router-dom";
import Searchbar from "./Components/Searchbar.js";
import Main from "./Components/Main";
import ProductCard from "./Components/ProductCard.js";
import Catalogue from "./Components/Catalogue.js";

function App() {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => <Searchbar/>}
      />
      <Route
        exact
        path="/"
        render={() => <Main/>}
      />
      <Route
        path="/catalogue"
        render={() => <Catalogue/>}
      />
      <Route
        path="/productCard"
        render={() => <ProductCard/>}
      />
    </BrowserRouter>
  );
}

export default App;
