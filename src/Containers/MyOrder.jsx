import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../Context/AppContext';
import '../styles/MyOrder.css';
import arrow from '../assets/icons/flecha-izquierda.png';

const MyOrder = (arrowClose) => {
	const { state } = useContext(AppContext);

    const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
    }

	return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow" onClick={() => arrowClose.setToggleOrders(!arrowClose.toggleOrders)} />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content seccion-scroll">
            {state.cart.map((product, index) => (
                <OrderItem indexValue={index} product={product} key={index} />
            ))}
            <div className="order-summary-container">
                <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>Q {sumTotal()}</p>
                </div>
                <button className="primary-button">
                PAGAR
                </button>
            </div>
            </div>
        </aside>
	);
}

export default MyOrder;
