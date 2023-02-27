import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.css';

const ProductList = () => {

    const products = useGetProducts();

    //? Para que muestre el detalle del producto
    const [toggleDetail, setToggleDetail] = useState(false);
    const handleToggleDetail = () => {
        setToggleDetail(!toggleDetail);
        console.log(toggleDetail);
    }

    return (
        <>
            <Header />
                <section className="main-container">
                    <div className="ProductList">
                        {products.map(product => (
                            <ProductItem 
                            product={product} 
                            key={product.id} 
                            toggleDetail={toggleDetail} 
                            setToggleDetail={setToggleDetail} />
                        ))}
                    </div>
                </section>
        </>
    )
}

export default ProductList;
