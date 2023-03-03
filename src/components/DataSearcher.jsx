import React from 'react';
import '../styles/DataSearcher.css';

const DataSearcher = ({ busqueda, productArray }) => {
        
    const productsFind = productArray.map((elemento) => elemento.price).join(',');

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
                <h2>SEGUNDA PRUEBA</h2>
            </div>
            <div className="search-match">
                <p>{productsFind}</p>
                {/* {console.log(productsFind)} */}
            </div>
        </div>
    )
}

export default DataSearcher;
