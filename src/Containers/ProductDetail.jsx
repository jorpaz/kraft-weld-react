import React, { useEffect } from "react";
import ProductInfo from "./ProductInfo";
import "../styles/ProductDetail.css";
import Header from "../components/Header";

const ProductDetail = ({ product, toggleDetail, setToggleDetail, onClose }) => {

    //? Para pasar informacion a ProductList y anular el scroll
    useEffect(() => {
        if(toggleDetail){
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflow = 'auto'
        }
    }, [toggleDetail])

    return (
    <>
        <Header />
        <div className="grid-Padre">
            <aside className="ProductDetail">
                <div className="ProductDetail-close">
                    {<img src="src\assets\icons\boton-de-cierre.png" alt="close" onClick={onClose} />}
                </div>
                <ProductInfo product={product} />
            </aside>
        </div>
    </>
    );
};

export default ProductDetail;
