import React, { useState } from "react";
import '../styles/Header.css';

const Header = () => { 
    return (
        <nav>
        <img src='' alt="menu" className="menu" />
        <div className="navbar-left">
            <img src='https://radiadoreslatorre.com/wp-content/uploads/2020/12/Logo.svg' alt="logo" className="nav-logo" />
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">Herramientas</a>
            </li>
            <li>
                <a href="/">Servicios</a>
            </li>
            <li>
                <a href="/">Acerca de Nosotros</a>
            </li>
            <li>
                <a href="/">Contacto</a>
            </li>
            <li>
                <a href="/">Others</a>
            </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
            <li className="navbar-email">
                <img src='./src/assets/icons/usuario.png' alt="LOGO" />
            </li>
            <li
                className="navbar-shopping-cart">
                <img src='src/assets/icons/carrito-de-compras.png' alt="shopping cart" />
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Header;
