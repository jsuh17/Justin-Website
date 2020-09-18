import React from 'react';
import './Contact.css';
import logoPinwheel from './logo_pinwheel.gif';
import pinwheelCircle from './pinwheel_circle.svg';
import NavBar from './../components/navbar.js';

function contact() {
    return (
        <div className="Contact">
            <header className="Contact-background">
                <p className="Contact-dummy"/>
            </header>
            <NavBar/>
            <img src={logoPinwheel} className="Contact-logo"/>
            <img src={pinwheelCircle} className="pinwheel"/>
            <p className="email">
                j.suh17@gmail.com
            </p>
        </div>
    );
}
     
export default contact;