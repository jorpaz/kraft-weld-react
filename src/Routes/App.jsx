import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//? Containers
import Layout from '../containers/Layout.jsx';

//?Hooks
import useInitialState from '../hooks/useInitialState';

//?Context
import AppContext from "../Context/AppContext";

//?Components
import ProductList from "../Containers/ProductList";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros.jsx";

//? Pages
import Login from "../pages/Login";
import NotFound from '../pages/NotFound';
import Checkout from "../pages/Checkout.jsx";
import Services from "../pages/Services.jsx";

//? Styles
import '../styles/index.css';

function App() {

  const initialState = useInitialState();

  return (
    <>
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/herramientas' element={<ProductList />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App;
