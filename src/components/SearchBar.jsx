import React, { useState, useEffect, useRef } from 'react';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/SearchBar.css'


const SearchBar = ({ query, setQuery }) => {

    //? Para Busqueda dinamica
    const [productArray, setProductArray] = useState([]); //?DATOS DE FORMA DINAMICA trae los productos del array
    const [productSearch, setProductSearch] = useState([]); //?DATOS DE FORMA ESTATICA
    const [busqueda, setBusqueda] = useState(''); //?PARA CONTROLAR LO QUE SE DIGITA EN LA BUSQUEDA

    const inputRef = useRef(null); //?Referencia para el input

    const handleInputChange = event => {
        const escrito = event.target.value;
        setBusqueda(escrito);
        filtrar(escrito);
        console.log(escrito);
    };

    const filtrar =(terminoBusqueda) => {
        var resultadosBusqueda = productSearch.filter((elemento) => {
            if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setProductArray(resultadosBusqueda);
        console.log(resultadosBusqueda);
    }   

    useEffect(()=>{
        const products = useGetProducts();//? Llamando productos del array del Hook
        setProductArray(products);
        setProductSearch(products);
        inputRef.current.focus(); //?Enfoca el input
    }),[];

    //? Para opciones desplegables
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();
    
    };

    return (
        <form onSubmit={handleSubmit} className='navbar-search'>
            <div className='input-group'>
                <input
                type='text'
                className='form-control'
                placeholder='¿Qué Buscas?'
                value={query}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                ref={inputRef} //?Agrega la referencia
                />
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <button className='dropdown-item' type='button'>
                    <p>'{busqueda}'</p>
                </button>
                <p>
                    Descubre Nuestros Lanzamientos.
                </p>
                <button className='dropdown-item' type='button'>
                    Acción 2
                </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
