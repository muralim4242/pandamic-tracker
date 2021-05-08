import React, { Component }  from 'react';
import './Header.css';

function Header(){
    return(
        <header>
            <div className="hamburger">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
            <h2>Your QR Code</h2>
        </header>
    );
}

export default Header;