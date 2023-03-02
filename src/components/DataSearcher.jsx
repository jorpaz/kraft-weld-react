import React from 'react';
import '../styles/DataSearcher.css';

const DataSearcher = ({ busqueda }) => {
    return (
        <div className='container-main'>
            <div className="container-searcher">
                <div className="info-searcher">
                {busqueda ? <p>"{busqueda}"</p> : null}
                    <h1>QUIERES MÁS?</h1>
                </div>
            </div>
        </div>
    )
}

export default DataSearcher;
