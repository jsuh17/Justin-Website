import React, { Component } from "react";
import logo from './logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

function changeBackground(e) {
    e.target.style.background = 'red';
  }

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/accolades" className="NavBar-accolades"> 
                    <span className="accolades">
                    accolades 
                    </span>
                </Link>
                <Link to="/about" className="NavBar-about">
                    <span className="about">
                    about
                    </span>  
                </Link>
                <Link to="/">
                    <img src={logo} className="NavBar-logo"/>
                </Link>
                <Link to="/projects" className="NavBar-projects">
                    <span className="projects">
                    projects 
                    </span> 
                </Link>
                <Link to="/contact" className="NavBar-contact">
                    <span className="contact">
                    contact 
                    </span>
                </Link>
            </div>
        )
    }
}

export default NavBar