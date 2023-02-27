import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import '../styles/ProductInfo.css';

const ProductInfo = ({ product }) => {

    const { addToCart } = useContext(AppContext);

    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    return (
        <>
        <img
            src={product.images}
            alt={product.title}
        />
        <div className="product-info">
            <p>Q{product.price}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <button className="primary-button add-to-cart-button">
            <img src="src/assets/icons/anadir-a-la-cesta.png" alt="add to cart" />
            Add to cart
            </button>
        </div>
        </>
    );
};

export default ProductInfo;
