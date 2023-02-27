import React, { useContext, useState } from "react";
import ProductDetail from "../Containers/ProductDetail";
import AppContext from "../Context/AppContext";
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {

    const { addToCart } = useContext(AppContext);

    //? Para agregar un producto al carrito
    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    //? Para abrir el detalle del producto
    const [toggleDetail, setToggleDetail] = useState(false);
    const handleToggleDetail = () => {
        setToggleDetail(!toggleDetail);
    }

    return (
        <>
        
        <div className="ProductItem">
            <img src={product.images} alt={product.title} onClick={() => setToggleDetail(!toggleDetail)} />
            <div className="product-info">
                <div>
                <p>Q{product.price}</p>
                <p>{product.title}</p>
                </div>
                <figure onClick={() => handelClick(product)}>
                <img src='src\assets\icons\anadir-a-la-cesta.png' alt="agregar al carrito" />
                </figure>
            </div>
        </div>
        {toggleDetail && <ProducwtDetail product={product} key={product.id} toggleDetail={toggleDetail} setToggleDetail={setToggleDetail} />}
        </>
    );
};

export default ProductItem;
