import React, { Component }  from 'react';
import './Header.css';

function Header(){
    return(
        <header>
            <h2>Your QR Code</h2>
            <div className="hamburger">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
        </header>
    );
}

export default Header;