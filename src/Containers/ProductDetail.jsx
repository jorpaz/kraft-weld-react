import React from "react";
import ProductInfo from "./ProductInfo";
import "../styles/ProductDetail.css";
import Header from "../components/Header";

const ProductDetail = ({ product }) => {
    return (
    <>
        <Header />
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo product={product} />
        </aside>
    </>
    );
};

export default ProductDetail;
