import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import AppContext from '../Context/AppContext';

//?Styles
import '../styles/Checkout.css';

const Checkout = () => {

    const { state } = useContext(AppContext);
    const [product, setProduct] = useState(null);

    //? Para recibir propiedades desde MyOrder
    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const productParam = params.get('product');
        const parsedProduct = productParam ? JSON.parse(decodeURIComponent(productParam)) : [];
        setProduct(parsedProduct);
    }, []);

    return (
        <>
			<Header />
			<div className="Checkout">
				<div className="Checkout-container">
					<h1 className="title">My order</h1>
					<div className="Checkout-content">
						<div className="order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>Q560</p>
						</div>
					</div>
					{product && product.map((item, index) => (
                        <OrderItem product={item} key={index} />
                    ))}
				</div>
			</div>
		</>
    )
}

export default Checkout;
