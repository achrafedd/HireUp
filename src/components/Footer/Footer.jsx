import { Link } from "react-router-dom";
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
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/company">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/jobs">Jobs</Link>
                                        </li>
                                        <li>
                                            <Link to="/post-a-joLink">
                                                Post a Job
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="box">
                                <h2 className="links-title">account</h2>
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <Link to="/login">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Sign Up</Link>
                                        </li>
                                        <li>
                                            <Link to="/reset-password">
                                                Reset Password
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/account">
                                                User Account
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="box">
                                <h2 className="links-title">template</h2>
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <Link to="/">Style Guide</Link>
                                        </li>
                                        <li>
                                            <Link to="/">License</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Changelog</Link>
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
