import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import '../styles/Header.css';
import searchIcon from  '../assets/icons/lupa.png';
import menuIcon from  '../assets/icons/menu.png';

const Header = ({ query, setQuery }) => { 

    const [isExpanded, setIsExpanded] = useState(false);

    const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
    };


    return (
        <nav>
        <img src={menuIcon} alt="menu" className="menu" />
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
                <a href="/">Nosotros</a>
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
            <li className="navbar-search" >
                <img src={searchIcon} alt="" onClick={handleSearchClick} />
                {isExpanded && (
        <div className="searchbar-container">
            <SearchBar query={query} setQuery={setQuery} />
        </div>
        )}
            </li>
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
