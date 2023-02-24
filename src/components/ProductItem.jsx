import React from "react";
import '../styles/ProductItem.css';

const ProductItem = () => {

    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    return (
        <div className="ProductItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
            <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
            </div>
            <figure onClick={() => handelClick(product)}>
            <img src={addToCartImage} alt="" />
            </figure>
        </div>
        </div>
    );
};

export default ProductItem;
