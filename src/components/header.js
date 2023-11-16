import logo from './images/logo-white-black.png'
import React from 'react';
import './style.css'
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="header-box">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="search">
                    <input type="text" placeholder="Wyszukaj film w naszej bazie..." />
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </div>

                {/* Przycisk zaloguj */}
                <div className="login">
                    <button className="login-btn">Zaloguj się</button>
                </div>
            </div>
            {/* Logo */}

        </header>
    );
};

export default Header;
