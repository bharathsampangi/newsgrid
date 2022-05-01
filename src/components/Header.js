import React from "react";
import LogoDark from "../img/logo.png";

export default function Header() {
    return (
        <header>
            <nav className="header__nav row">
                <img className="logo" alt="Logo Dark" src={LogoDark} />
                <div>
                    <a className="header__nav-link" href="http://facebook.com" target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a className="header__nav-link" href="http://twitter.com" target="_blank" rel="noreferrer">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a className="header__nav-link" href="http://instagram.com" target="_blank" rel="noreferrer">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a className="header__nav-link" href="http://youtube.com" target="_blank" rel="noreferrer">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                </div>
                <ul className="header__nav-list">
                    <li className="header__nav-item">Home</li>
                    <li className="header__nav-item">About</li>
                </ul>
            </nav>
            <main className="header__hero"></main>
        </header>
    );
}
