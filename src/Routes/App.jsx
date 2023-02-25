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
import Home from "./Home";
import Login from "../pages/Login";

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
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App;
