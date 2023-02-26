import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {


    return (
        <>
        <Header />
            <div className='container'>
                <div className='info-containers-left'>
                    <h1><a href="/">KRAFT & WELD</a></h1>
                </div>
                <div className='info-containers-right'>
                    <h1>NUEVA MARCA<br/>NUEVAS HERRAMIENTAS</h1>
                    <h3>Lo mejor para una soldadura de calidad.</h3>
                    <p><a href="/nosotros">Conoce más acerca de nosotros.</a></p>
                </div>
            </div>
            <div className='container-2'>
                <div className='info-containers-left-2'>
                    <div className='text-promo'>
                        <h1>PRECIO ESPECIAL</h1>
                    </div>
                    <div className='text-promo-bajo'>
                        <p>Compralo ya</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
