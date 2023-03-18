import React from 'react';
import '../styles/DataSearcher.css';

const DataSearcher = ({ busqueda, searchResult }) => {
        
    /* const productsFind = productArray.map((elemento) => elemento.price).join(','); */

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
                <p>Todos los Productos</p>
            </div>
            <div className="search-match">
                {searchResult && searchResult.slice(0,2).map((producto) => (
                    producto ? <p key={producto.id}>{producto.title}</p> : <p>tampoco hay</p>
                ))}
</div>
        </div>
    )
}

export default DataSearcher;
