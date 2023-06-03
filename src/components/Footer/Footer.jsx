import { HireUp } from "../../assets/images";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={HireUp} alt="Logo" />
                    </a>
                </div>
                <div className="content">
                    <div className="top">
                        <div className="links">
                            <div className="box">
                                <h2 className="links-title">pages</h2>
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="#">Post a Job</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="box">
                                <h2 className="links-title">account</h2>
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <a href="#">Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#">Sign Up</a>
                                        </li>
                                        <li>
                                            <a href="#">Reset Password</a>
                                        </li>
                                        <li>
                                            <a href="#">User Account</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="box">
                                <h2 className="links-title">template</h2>
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <a href="#">Style Guide</a>
                                        </li>
                                        <li>
                                            <a href="#">License</a>
                                        </li>
                                        <li>
                                            <a href="#">Changelog</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="newsletter">
                            <h2 className="links-title">
                                SIGN UP TO OUR NEWSLETTER
                            </h2>
                            <input type="text" placeholder="Enter address" />
                            <button className="btn">Get Started</button>
                        </div>
                    </div>
                    <p className="copyright">
                        HireUP. All Rights Reserved, 2022.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
