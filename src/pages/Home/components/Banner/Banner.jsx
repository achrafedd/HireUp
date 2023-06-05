import { Adam, Partner } from "../../../../assets/images";

import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="left">
                    <p className="small-text">
                        <span>NEW</span> Stay connected to get upcoming jobs
                    </p>
                    <h1>
                        Find the most <br /> exciting startup jobs
                    </h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris rhoncus pharetra cursus. Suspendisse sodales
                        porta leo, ac placerat ex pretium quis.
                    </p>
                    <form className="form">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search..." />
                        <button className="btn">Search</button>
                    </form>
                </div>
                <div className="right">
                    <img src={Adam} alt="" />
                    <div className="partner">
                        <img src={Partner} alt="" />
                        <p className="partner-text">
                            Partnership with <span>Glassdoor</span> and{" "}
                            <span>LinkedIn</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
