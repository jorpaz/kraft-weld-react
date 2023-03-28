import React, { useState, useContext, useEffect } from "react";

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
import closeIcon from '../assets/icons/boton-de-cierre.png';

const Header = ({ query, setQuery }) => { 

    const { state } = useContext(AppContext);

    //?Para que se muestre el buscador
    const [isExpanded, setIsExpanded] = useState(false);
    const handleSearchClick = () => {
        setIsExpanded(!isExpanded);
        setToggle(false);
        setToggleOrders(false);
        setToggleMenu(false);
        };

    //? Para que muestre el menu de usuario
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        setIsExpanded(false);
        setToggleOrders(false);
        setToggleMenu(false);
    }

    //?Para mostrar el carrito de compras
    const [toggleOrders, setToggleOrders] = useState(false);
    const handleCart = () =>{
        setToggleOrders(!toggleOrders);
        setIsExpanded(false);
        setToggle(false);
        setToggleMenu(false);
    }

    //?Para deslizar el menu mobile
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleSideMenu = () => {
        setToggleMenu(!toggleMenu);
        setToggleOrders(false);
        setToggle(false);
        setIsExpanded(false);
    }

    //? Para que el fondo no haga scroll mientras está abierto el menu mobile
    useEffect(() => {
        if(toggleMenu){
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'auto'
        }
    }, [toggleMenu])

    return (
        <nav>
            <img src={logoIcon} alt="menu" className='menu' onClick={handleSideMenu}/>
            {/* MENU MOBILE  */}
            <div className={`side-menu ${toggleMenu ? 'active' : ''}`}>
                <div className="closeIcon">
                    <img src={closeIcon} alt="Cerrar" onClick={handleSideMenu}/>
                </div>
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
                    <a href="/nosotros">Nosotros</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                </ul>
                
            </div>

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
                    <a href="/nosotros">Nosotros</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-search" >
                    <img src={searchIcon} 
                    alt="buscador" 
                    onClick={handleSearchClick}
                    
                    />
                    {isExpanded && (
                        <SearchBar query={query} setQuery={setQuery} />
                    )}
                </li>
                <li className="navbar-email" >
                    <img src='./src/assets/icons/usuario.png' alt="LOGO" onClick={handleToggle} />
                </li>
                <li className="navbar-shopping-cart">
                    <img src='src/assets/icons/carrito-de-compras.png' alt="shopping cart" onClick={handleCart} />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
        </nav>
    );
};

export default Header;
