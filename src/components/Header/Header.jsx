import { useState, useEffect } from "react";

import { HireUp } from "../../assets/images";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    if (width >= 992) {
        return (
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <img src={HireUp} alt="Logo" />
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <Link to="/" className="active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/company">Company</Link>
                            </li>
                            <li>
                                <Link to="/browse">Browse</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Link to="/login" className="post">
                            Post a Job
                        </Link>
                        <Link to="/login" className="btn">
                            Login
                        </Link>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header-mobile">
                <div className="container">
                    <div className="logo">
                        <img src={HireUp} alt="Logo" />
                    </div>
                    <div className={`icon ${active && "active"}`}>
                        <i
                            className="fa-solid fa-bars"
                            onClick={() =>
                                setActive((prevActive) => !prevActive)
                            }
                        ></i>
                    </div>
                    <nav className={`navbar ${active && "active"}`}>
                        <ul>
                            <li>
                                <Link to="/" className="active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/company">Company</Link>
                            </li>
                            <li>
                                <Link to="/browse">Browse</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                        <div className="login">
                            <Link to="/login" className="btn">
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Header;
