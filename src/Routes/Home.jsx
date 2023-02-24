import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {


    return (
        <>
        <Header />
            <div className='container'>
                <div className='info-containers-left'>
                    <h1>SERVICIOS</h1>
                    <button>SERVICIOS</button>
                </div>
                <div className='info-containers-right'>
                    <h1>PRUEBA2</h1>
                </div>
            </div>
            <div className='container-2'>
                <div className='info-containers-left-2'>

                </div>
            </div>
        </>
    );
};

export default Home;
