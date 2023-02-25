import React, { useState, useContext } from "react";

//?Context
import AppContext from '../Context/AppContext';

//? Components
import SearchBar from "../components/SearchBar";
import Menu from '../components/Menu';

//? Containers
import MyOrder from "../Containers/MyOrder";

//? Styles
import '../styles/Header.css';
import searchIcon from  '../assets/icons/lupa.png';
import logoIcon from  '../assets/icons/menu.png';

const Header = ({ query, setQuery }) => { 

    const { state } = useContext(AppContext);

    //?Para que se extienda el buscador
    const [isExpanded, setIsExpanded] = useState(false);
    const handleSearchClick = () => {
        setIsExpanded(!isExpanded);
        setToggle(false);
        setToggleOrders(false);
        };

    //? Para que muestre el menu de usuario
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        setIsExpanded(false);
        setToggleOrders(false);
    }

    //?Para mostrar el carrito de compras
    const [toggleOrders, setToggleOrders] = useState(false);
    const handleClose = () =>{
        setToggleOrders(!toggleOrders);
        setToggle(false);
        setIsExpanded(false);
    }
    

    return (
        <nav>
        <img src={logoIcon} alt="menu" className="menu" />
        <div className="navbar-left">
            <img src='https://radiadoreslatorre.com/wp-content/uploads/2020/12/Logo.svg' alt="logo" className="nav-logo" />
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/herramientas">Herramientas</a>
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
            <li className="navbar-email" >
                <img src='./src/assets/icons/usuario.png' alt="LOGO" onClick={handleToggle} />
            </li>
            <li className="navbar-shopping-cart">
                <img src='src/assets/icons/carrito-de-compras.png' alt="shopping cart" onClick={() => setToggleOrders(!toggleOrders)} />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
            </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;
