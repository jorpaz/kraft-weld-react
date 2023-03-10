import React, { useContext, useState, useEffect } from "react";
import ProductDetail from "../Containers/ProductDetail";
import AppContext from "../Context/AppContext";
import '../styles/ProductItem.css';
import iconCesta from '../assets/icons/anadir-a-la-cesta.png';

const ProductItem = ({ product }) => {

    //? Para agregar un producto al carrito
    const { addToCart } = useContext(AppContext);

    const handelClick = item => {
        addToCart(item);
        console.log(addToCart);
    }

    //? Para abrir el detalle del producto
    const [toggleDetail, setToggleDetail] = useState(false);
    const handleToggleDetail = () => {
        setToggleDetail(!toggleDetail);
    }

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
        
        <div className="ProductItem">
            <img src={product.images} alt={product.title} onClick={() => setToggleDetail(!toggleDetail)} />
            <div className="product-info">
                <div>
                <p>Q{product.price}</p>
                <p>{product.title}</p>
                </div>
                <figure onClick={() => handelClick(product)}>
                    <img src={iconCesta} alt="cesta" />
                </figure>
            </div>
        </div>
        {toggleDetail && <ProductDetail
        product={product}
        key={product.id} 
        toggleDetail={toggleDetail} 
        setToggleDetail={setToggleDetail} 
        onClose={() => setToggleDetail(false)} />}
        </>
    );
};

export default ProductItem;
