import React from "react";
import LogoDark from "../img/logo.png";

export default function Header() {
    return (
        <header>
            <nav className="header__nav row">
                <img className="logo" alt="Logo Dark" src={LogoDark} />
                <div className="header__nav-links">
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
            <main className="header__hero">
                <div className="header__hero-outer row">
                    <div className="header__hero-container">
                        <span className="sports">sports</span>
                        <h1>some sports article</h1>
                        <p>
                            Non cupidatat nostrud pariatur minim duis esse in qui irure. Pariatur cupidatat magna
                            eiusmod occaecat cillum irure irure pariatur consectetur ut pariatur exercitation laborum.
                            Occaecat culpa sunt sunt commodo aute cupidatat officia magna anim sit labore dolor
                            deserunt. Labore adipisicing sit culpa duis et ad do. Et laboris pariatur ex consectetur
                            fugiat ex laborum pariatur adipisicing deserunt aliquip sunt.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                    <div></div>
                </div>
            </main>
        </header>
    );
}
