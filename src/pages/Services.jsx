import React from 'react';
import Header from '../components/Header';

//? Styles
import '../styles/Services.css';

const Services = () => {
    return (
        <>
            {<Header />}
            <main className="container-body">
                <section className='card-1'>
                    <h1>PRUEBA 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, explicabo possimus corrupti id necessitatibus nesciunt voluptatem magni inventore sequi ad reprehenderit quasi ratione odio nobis a sint nam, quas cumque.</p>
                </section>
            </main>

            <main className="container-body-2">
                <h2>PRUEBA 2</h2>
            </main>
        </>
    )
}

export default Services;
