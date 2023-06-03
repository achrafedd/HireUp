import { useState } from "react";

import "./Notification.css";

const Notification = () => {
    const [active, setActive] = useState(true);

    if (!active) return;

    return (
        <div className="notification">
            <div className="container">
                <div className="box">
                    <span>
                        Discover over 1,000+ premium webflow components today!
                    </span>
                    <button className="btn">Unlock More</button>
                </div>
                <span className="icon">
                    <i
                        className="fa-solid fa-xmark"
                        onClick={() => setActive(false)}
                    ></i>
                </span>
            </div>
        </div>
    );
};

export default Notification;
