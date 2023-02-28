import React from "react";
import Header from "../components/Header";

const Nosotros = () => {
    return (
    <>
        <Header />
            <main>
            <section class="banner">
                <h1>Acerca de Nosotros</h1>
            </section>
            <section class="contenido">
                <h2>¿Quiénes somos?</h2>
                <p>Somos una empresa especializada en la venta de herramientas y equipos de soldadura para la industria. Contamos con un equipo de expertos en el área de la soldadura, lo que nos permite ofrecer productos de alta calidad y un servicio de atención al cliente excepcional.</p>
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
            </main>
            <footer>
                <p>Soldaduras y Herramientas &copy; 2023. Todos los derechos reservados.</p>
            </footer>
    </>
    );
};

export default Nosotros;
