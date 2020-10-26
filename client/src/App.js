import React from 'react';
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
