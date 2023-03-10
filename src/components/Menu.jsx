import React from 'react';

//?Styles
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li>
                <a href="/" className="title">My orders</a>
                </li>
                <li>
                <a href="/login">My account</a>
                </li>
                <li>
                <a href="/">Sign out</a>
                </li>
            </ul>
    </div>
    )
}

export default Menu;
