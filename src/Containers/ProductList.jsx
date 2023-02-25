import React from 'react'
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.css';

const ProductList = () => {

    const products = useGetProducts();

    return (
        <>
            <Header />
                <section className="main-container">
                    <div className="ProductList">
                        {products.map(product => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </section>
        </>
    )
}

export default ProductList;
