import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import '../styles/ProductInfo.css';
import iconCesta2 from '../assets/icons/anadir-a-la-cesta-2.png';

const ProductInfo = ({ product }) => {

    //? Para agregar un producto al carrito
    const { addToCart } = useContext(AppContext);

    const handelClickCart = item => {
        addToCart(item);
        console.log(addToCart);
    }

    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    return (
        <>
        
        <img
            src={product.images}
            alt={product.title}
            className='product-image'
        />
        <div className="product-info-2">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Q{product.price}</p>
            <button className="primary-button add-to-cart-button" onClick={() => handelClickCart(product)}>
            <img src={iconCesta2} alt="add to cart" />
            Add to cart
            </button>
        </div>
        </>
    );
};

export default ProductInfo;
