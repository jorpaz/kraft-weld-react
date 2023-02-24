import React, { useState } from 'react';
import '../styles/SearchBar.css'
import searchIcon from '../assets/icons/lupa.png';


const SearchBar = ({ query, setQuery }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (event) => {
    setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer la búsqueda
    };

    return (
        <form onSubmit={handleSubmit} className='navbar-search'>
            <div className='input-group'>
                <input
                type='text'
                className='form-control'
                placeholder='Buscar'
                value={query}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                />
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <button className='dropdown-item' type='button'>
                    Acción 1
                </button>
                <button className='dropdown-item' type='button'>
                    Acción 2
                </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
