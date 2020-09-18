import React from 'react';
import './Home.css';
import justin from './justin_name_design_0-5_clear_loop.gif';
import NavBar from './../components/navbar.js';

function home() {
    return (
        <div className="Home">
        <NavBar/>
        <div className="Home-background">
            <img src={justin} className="Home-justin"/>
        </div>
        </div>
    );
}
 
export default home;