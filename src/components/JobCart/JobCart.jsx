import { Link } from "react-router-dom";
import "./JobCart.css";

// eslint-disable-next-line react/prop-types
const JobCart = ({ job }) => {
    // eslint-disable-next-line react/prop-types
    const { id, img, company, post, category, hours, city, salary, date } = job;

    return (
        <Link to={`jobs/${id}`} className="job-cart">
            <div className="company">
                <div className="image">
                    <img src={img} alt={company} />
                </div>
                <div className="details">
                    <div className="name">{company}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
            <div className="post">{post}</div>
            <div className="box">
                <div className="col">{category}</div>
                <div className="col">{hours}</div>
            </div>
            <div className="bottom">
                <div className="city">
                    <i className="fa-solid fa-location-dot"></i>
                    {city}
                </div>
                <div className="salary">
                    <i className="fa-solid fa-money-bills"></i>$ {salary}
                </div>
            </div>
        </Link>
    );
};

export default JobCart;
