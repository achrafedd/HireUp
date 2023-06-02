import { HireUp } from "../../assets/images";

import "./Header.css";

const Header = () => {
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
};

export default Header;
