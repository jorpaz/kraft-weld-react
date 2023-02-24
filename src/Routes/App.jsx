import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from "../Containers/ProductList";
import Home from "./Home";

//? Styles
import '../styles/index.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/herramientas' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
