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
                    <div className='image-back'>
                        <img src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="imagen" />
                    </div>
                </div>
                <div className='info-containers-right'>
                    <h1>NUEVAS HERRAMIENTAS</h1>
                    <h2>Lo mejor para una soldadura de calidad.</h2>
                    <br />
                    <p><a href="/nosotros">Conoce más acerca de nosotros.</a></p>
                </div>
            </div>
            <div className='container-2'>
                <div className='info-containers-left-2'>
                    <div className='text-promo'>
                        <h1>PRECIO ESPECIAL</h1>
                    </div>
                    <div className='text-promoP'>
                        <p>Compralo ya</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
