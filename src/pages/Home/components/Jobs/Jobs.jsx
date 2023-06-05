import JobCart from "../../../../components/JobCart/JobCart";

import { JobList } from "../../../../constants";

import "./Jobs.css";

const Jobs = () => {
    return (
        <section className="jobs">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="title">Browse our latest jobs.</h2>
                        <p className="summry">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris rhoncus pharetra cursus. Suspendisse
                            sodales porta leo, ac placerat ex pretium quis.
                        </p>
                    </div>
                    <div className="right">
                        <button className="btn"> Post a New Job</button>
                    </div>
                </div>
                <div className="jobs-container">
                    {JobList.map((job, id) => (
                        <JobCart job={job} key={id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Jobs;
