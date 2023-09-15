import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to="/" className="nav-logo-container">
                    <img
                        src="https://isu.ac.in/B-Tech-CSE/images/logo/ISU-LOGO.webp"
                        alt="logo"
                        className="nav-logo"
                    />
                </Link>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li>
                            <Link
                                to="https://admission.isu.ac.in/bachelor-of-technology-application-form"
                                target="_blanck"
                            >
                                <button className="apply-now-btn">
                                    Apply Now
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="links">
                <ul>
                    <li>
                        <Link
                            to="https://isu.ac.in/B-Tech-CSE/"
                            target="_blanck"
                        >
                            Placements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://isu.ac.in/B-Tech-CSE/"
                            target="_blanck"
                        >
                            OUR's-vs-Traditional
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://isu.ac.in/B-Tech-CSE/"
                            target="_blanck"
                        >
                            curriculum
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://isu.ac.in/B-Tech-CSE/"
                            target="_blanck"
                        >
                            Compus
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://isu.ac.in/B-Tech-CSE/"
                            target="_blanck"
                        >
                            Admission Process
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
