import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../Layout/Layout.css';

function Layout() {

    return (
        <div id="container">

            <nav id="top-nav">
            
                <img id="logo" src="https://marketplace.canva.com/EAES74iHibY/2/0/1600w/canva-black-%26-beige-minimalistic-aesthetic-real-estate-logo-xzpstl_x890.jpg" alt="" />
                <div id="top-nav-links-container-div">
                <Link to="/" className="nav-item-top">Home</Link>
                <Link to="/properties" className="nav-item-top">Properties</Link>
                <Link to="/about" className="nav-item-top">About</Link>
                <Link to="/contact" className="nav-item-top">Contact</Link>
                <Link to="/favorite" className="nav-item-top">♡</Link>
                </div>
               
            </nav>

            <Outlet></Outlet>

            <nav id="bot-nav">

                <div id="fast-links">
                    <p>Fast Links</p>
                <Link to="/" className="nav-item-bot">Home</Link>
                <Link to="/about" className="nav-item-bot">About</Link>
                <Link to="/contact" className="nav-item-bot">Contact</Link>
                
            
                
                </div>

                <div id="follow-us">
                <p>Follow us</p>
                <a href="https://he-il.facebook.com/" target="_blank" className="nav-item-bot">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" className="nav-item-bot">Instagram</a>
                <a href="https://twitter.com/" target="_blank" className="nav-item-bot">Twitter</a>
                </div>
            
                
            
            </nav>

            </div>




            
    )

}

export default Layout