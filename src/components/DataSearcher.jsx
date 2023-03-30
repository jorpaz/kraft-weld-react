import React from 'react';
import ProductInfo from '../Containers/ProductInfo';
import '../styles/DataSearcher.css';

const DataSearcher = ({ busqueda, searchResult }) => {
        
    /* const productsFind = productArray.map((elemento) => elemento.price).join(','); */

    //! Si le dan click, mostrar el producto
    const handleProduct = () =>{
        <ProductInfo />
        console.log(producto.id);
    }

    return (

        <div className='container-main'>
            <div className="container-searcher">
                <h2>{busqueda ? <p>"{busqueda}"</p> : null}</h2>
            </div>
            <div className='dropdown-menu1'>
                <button className='dropdown-item-button'>
                    Descuentos
                </button>
                <button className='dropdown-item-button'>
                    Ofertas
                </button>
            </div>
            <div className="container-searcher-2">
                <a href='/herramientas'>Todos los Productos</a>
            </div>
            <div className="search-match">
                {searchResult && searchResult.slice(0,2).map((producto) => (
                    producto ? <a key={producto.id} onClick={handleProduct}>{producto.title}</a> : <p>tampoco hay</p>
                ))}
</div>
        </div>
    )
}

export default DataSearcher;
