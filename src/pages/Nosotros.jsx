import React from "react";
import Header from "../components/Header";

//?Styles
import '../styles/Nosotros.css';

const Nosotros = () => {
    return (
    <>
        <Header />
            <main className="container-about">
                <section class="banner-1">
                    <h1>Acerca de Nosotros</h1>
                    <h2>¿Quiénes somos?</h2>
                    <p>Somos una empresa especializada en la venta de herramientas y equipos de soldadura para la industria. Contamos con un equipo de expertos en el área de la soldadura, lo que nos permite ofrecer productos de alta calidad y un servicio de atención al cliente excepcional.</p>
                </section>

                <section className="img-container-1">
                    <figure className="img-1">
                        <img src="https://images.unsplash.com/photo-1571841653386-77b2f456dc09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1737&q=80" alt="personal de soldadura" />
                    </figure>
                </section>

                <section class="contenido-about">                
                    <h2>Nuestros valores</h2>
                    <ul>
                        <li>Compromiso con nuestros clientes</li>
                        <li>Calidad en nuestros productos y servicios</li>
                        <li>Innovación constante</li>
                        <li>Respeto por el medio ambiente</li>
                        <li>Integridad y honestidad en todo lo que hacemos</li>
                    </ul>
                    <h2>Nuestro equipo</h2>
                    <p>Nuestro equipo está formado por expertos en soldadura y herramientas, que están comprometidos en ofrecer el mejor servicio a nuestros clientes. Siempre estamos a la vanguardia de las últimas tecnologías y tendencias del mercado, para ofrecer los productos más innovadores y de alta calidad.</p>
                </section>

                <section className="img-container-2">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1571841653386-77b2f456dc09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1737&q=80" alt="personal de soldadura" />
                    </figure>
                </section>
            </main>

            <footer>
                <p>Soldaduras y Herramientas &copy; 2023. Todos los derechos reservados.</p>
            </footer>
    </>
    );
};

export default Nosotros;
