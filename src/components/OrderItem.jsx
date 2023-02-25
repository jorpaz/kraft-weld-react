import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../styles/OrderItem.css';
import close from '../assets/icons/boton-de-cierre.png'

const OrderItem = (props) => {

	const { product, indexValue } = props;

	const { removeFromCart } = useContext(AppContext); 

	const handleRemove = index => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images} alt={product.title} />
			</figure>
			<p>{ product.title }</p>
			<p>Q{ product.price }</p>
			<img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;
