import React from "react";
import LogoLight from "../img/logo_light.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container row">
                <div className="footer__main">
                    <div>
                        <img className="logo" src={LogoLight} alt="Logo Light" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a metus auctor, scelerisque felis
                            et, lobortis purus. Praesent suscipit mauris lorem, sed elementum nibh fringilla quis.
                        </p>
                    </div>
                    <div>
                        <h3>email newsletter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <input placeholder="Enter email..."/>
                        <button className="btn btn-primary btn-large">Subscribe</button>
                    </div>
                    <div>
                        <h3>site links</h3>
                        <ul>
                            <li>Help & Support</li>
                            <li>Privacy & Policy</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Join our club</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a metus auctor, scelerisque felis
                            et, lobortis purus.
                        </p>
                        <button className="btn btn-secondary">Join Now</button>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>Copyrights &copy; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
