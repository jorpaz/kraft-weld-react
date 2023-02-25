import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {

    const { addToCart } = useContext(AppContext);

    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    return (
        <div className="ProductItem">
        <img src={product.images} alt={product.title} />
        <div className="product-info">
            <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
            </div>
            <figure onClick={() => handelClick(product)}>
            <img src='' alt="" />
            </figure>
        </div>
        </div>
    );
};

export default ProductItem;
