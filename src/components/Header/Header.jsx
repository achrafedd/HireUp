import { useState, useEffect } from "react";

import { HireUp } from "../../assets/images";

import "./Header.css";

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
                                <a href="" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">Company</a>
                            </li>
                            <li>
                                <a href="">Browse</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <a href="/login" className="post">
                            Post a Job
                        </a>
                        <a href="/login" className="btn">
                            Login
                        </a>
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
                                <a href="" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">Company</a>
                            </li>
                            <li>
                                <a href="">Browse</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                        </ul>
                        <div className="login">
                            <a href="/login" className="btn">
                                Login
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Header;
