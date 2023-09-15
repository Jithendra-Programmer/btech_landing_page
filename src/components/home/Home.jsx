import React, { useRef } from "react";
import Nav from "../nav/Nav";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring } from "react-spring";
import { animated, useInView } from "@react-spring/web";

import "./Home.scss";

import { MdArrowDownward } from "react-icons/md";
import video from "../../assets/herovideo.mp4";

function Home() {
    window.addEventListener("scroll", function (e) {
        // This will show our scroll position in the console
        console.log(window.scrollY);
    });
    return (
        <>
            <Nav />
            <main>
                <Parallax pages={5}>
                    <ParallaxLayer className="section-1" offset={0} speed={1}>
                        <animated.div
                            className="container"
                            style={useSpring({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: "900" },
                            })}
                        >
                            <h1 className="title">
                                Welcome to{" "}
                                <span
                                    style={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                    }}
                                >
                                    India's Best <br /> B.Tech CSE
                                </span>
                                <span> Program</span>
                            </h1>
                        </animated.div>
                        <div className="down-arrow">
                            <MdArrowDownward />
                        </div>
                        <video
                            className="video"
                            width="100%"
                            height="100%"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                    </ParallaxLayer>

                    <ParallaxLayer
                        className="placements-section"
                        factor={1}
                        offset={1}
                        speed={0}
                    >
                        <div className="title-container">
                            <h1 className="title">
                                Assured Job Program: 100% Placement with{" "}
                                <span
                                    style={{
                                        background: "#000",
                                        color: "#fff",
                                        width: "100%",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    8 LPA
                                </span>{" "}
                                Minimum
                            </h1>
                        </div>

                        <div className="container">
                            <animated.div className="placements-points">
                                <ul>
                                    <li>
                                        Secure a prosperous software engineering
                                        career with 100% job guarantee and
                                        starting packages of ₹8 LPA.
                                    </li>
                                    <li>
                                        Experienced in Developing Highly
                                        Scalable Applications
                                    </li>
                                    <li>
                                        Build 50+ Practical Products Simulating
                                        real Engineering Challenges
                                    </li>
                                    <li>
                                        Unparalleled Placements: 700+ Premier
                                        Tech Recruiters at ITM Group
                                    </li>
                                    <li>
                                        Dual 6-Month Internships: Personalized
                                        Mentorship, Top-tier Placements
                                    </li>
                                </ul>
                            </animated.div>

                            <animated.div className="data">
                                <img
                                    className="data-img"
                                    src="https://isu.ac.in/B-Tech-CSE/images/graph---2.png"
                                    alt="data"
                                />
                            </animated.div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        className="comparison-section"
                        factor={1}
                        offset={2}
                    >
                        <div className="title">
                            <div className="vs">
                                <h1>Traditional B.Tech CSE 👨‍🏫</h1>
                            </div>
                            <h1
                                style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "20px",
                                    alignSelf: "end",
                                    margin: "0px 10px",
                                }}
                            >
                                VS
                            </h1>
                            <div className="vs">
                                <h1>ISU x LetsUpgrade 👨‍💻🚀</h1>
                            </div>
                        </div>

                        <div className="comparison">
                            <div className="titles">
                                <ul>
                                    <li>Curriculum</li>
                                    <li>Instructor</li>
                                    <li>Internship</li>
                                    <li>Assignments</li>
                                    <li>Mentorship</li>
                                    <li>Job Role</li>
                                    <li>Soft skills</li>
                                    <li>Business skills</li>
                                    <li>Entrepreneurship</li>
                                    <li>Placement</li>
                                </ul>
                            </div>

                            <div className="tranditional">
                                <ul>
                                    <li>Outdated</li>
                                    <li>No Industry Experience</li>
                                    <li>Internships aren't supported</li>
                                    <li>Theoretical written papers</li>
                                    <li>No dedicated guidence</li>
                                    <li>Junior SDE</li>
                                    <li>1 outdated Subject</li>
                                    <li>Nothing to talk about</li>
                                    <li>Maybe 1-2 seminars</li>
                                    <li>No dedicated Track</li>
                                </ul>
                            </div>

                            <div className="isuxlu">
                                <ul>
                                    <li style={{ marginTop: "0px" }}>
                                        Get ready for 2027 & beyond with a
                                        real-world curriculum
                                    </li>
                                    <li>
                                        Working for top tech companies including
                                        MAANG
                                    </li>
                                    <li>Multiple paid internship must</li>
                                    <li style={{ marginBottom: "30px" }}>
                                        Building 40+ apps and products
                                    </li>
                                    <li>
                                        Monthly 1-1 sessions with Industry
                                        Professionals
                                    </li>
                                    <li>Senior SDE</li>
                                    <li>
                                        Every Semester 100 Hours for softskills
                                        program
                                    </li>
                                    <li>
                                        Learn everything of business from Sales
                                        to HR as this is a must for Future
                                        leader
                                    </li>
                                    <li>
                                        A 60-hour credit with a pitch to VCs as
                                        the final step
                                    </li>
                                    <li>
                                        350+ Hours of dedicated Revision, and
                                        Interview Preparation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={3}
                        factor={1}
                        speed={0}
                        className="curriculum-section"
                    >
                        <div className="title">
                            <h1>Curriculum</h1>
                        </div>

                        <div className="container">
                            <div className="years years-1">
                                <div className="sem sem1">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem1
                                        </span>{" "}
                                        Start with 0
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-1.webp"
                                            alt="sem1"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem3
                                        </span>{" "}
                                        Become a backend developer
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-3.webp"
                                            alt="sem3"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem5
                                        </span>{" "}
                                        Earn your first paycheck
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-5.webp"
                                            alt="sem5"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem7
                                        </span>{" "}
                                        Master emerging technologies
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-6.webp"
                                            alt="sem7"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>
                            </div>
                            <div className="years years-2">
                                <div className="sem sem2">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem2
                                        </span>{" "}
                                        Become a frontend developer
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-2.webp"
                                            alt="sem2"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem4
                                        </span>{" "}
                                        DevOps and Cloud computing
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-4.webp"
                                            alt="sem4"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem6
                                        </span>{" "}
                                        Develop mobile applications
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-5%20(1).webp"
                                            alt="sem6"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>

                                <div className="sem ">
                                    <div className="sem-title">
                                        <span
                                            style={{
                                                borderRadius: "5px",
                                                padding: "0px 5px",
                                                fontWeight: "600",
                                                background: "#000",
                                                color: "#fff",
                                            }}
                                        >
                                            sem8
                                        </span>{" "}
                                        Second Paid Internship
                                    </div>
                                    <div className="image">
                                        <img
                                            src="https://isu.ac.in/B-Tech-CSE/images/tech%20partners/year-8%20(1).webp"
                                            alt="sem8"
                                        />
                                    </div>
                                    <div className="details"></div>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        className="our-campus-footer-container"
                        offset={4}
                    >
                        <div className="our-campus-section">
                            <div className="title">
                                <h1>Our Campus Experience</h1>
                            </div>
                            <div className="container">
                                <div className="card">
                                    <div className="title">
                                        <h1>Campus</h1>
                                    </div>
                                    <div className="details">
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Officiis temporibus ex dolor autem
                                            nostrum eos quod aperiam neque, quos
                                            ipsum excepturi animi nesciunt nemo,
                                            minima illo itaque minus eum iusto.
                                        </p>
                                    </div>
                                </div>
                                <div className="card card-2">
                                    <div className="title">
                                        <h1>Industry Trinners</h1>
                                    </div>
                                    <div className="details">
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Officiis temporibus ex dolor autem
                                            nostrum eos quod aperiam neque, quos
                                            ipsum excepturi animi nesciunt nemo,
                                            minima illo itaque minus eum iusto.
                                        </p>
                                    </div>
                                </div>

                                <div className="card card-3">
                                    <div className="title">
                                        <h1>Events & Meet ups</h1>
                                    </div>
                                    <div className="details">
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Officiis temporibus ex dolor autem
                                            nostrum eos quod aperiam neque, quos
                                            ipsum excepturi animi nesciunt nemo,
                                            minima illo itaque minus eum iusto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
                            ITM Skill University © 2023
                        </footer>
                    </ParallaxLayer>
                </Parallax>
            </main>
        </>
    );
}

export default Home;
