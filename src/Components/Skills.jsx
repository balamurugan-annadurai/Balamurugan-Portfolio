import React, { useEffect } from 'react';
import nextLogo from "../assets/next-js.svg"

const Skills = () => {
    useEffect(() => {
        const nodeList = document.querySelectorAll(".col-xl-6");

        const handleShowEffect = (event) => {
            const clickedSkillSet = event.currentTarget.querySelector(".skills-set-container");
            const arrowIcon = event.currentTarget.querySelector('.bx-chevron-down');
            const innerContainer = event.currentTarget.querySelector('.inner-container');

            // If clickedSkillSet exists, toggle it
            if (clickedSkillSet) {
                // Check if the clicked dropdown is already open
                const isAlreadyVisible = clickedSkillSet.classList.contains("show");

                // Close all other dropdowns and reset arrow rotations
                const skillsNodeList = document.querySelectorAll(".skills-set-container");
                const arrowNodeList = document.querySelectorAll(".bx-chevron-down");
                const containerNodeList = document.querySelectorAll(".inner-container");

                skillsNodeList.forEach((node) => node.classList.remove("show"));
                arrowNodeList.forEach((icon) => icon.classList.remove("active"));
                containerNodeList.forEach((container) => container.classList.remove("active"));

                // Toggle the current dropdown (close if already open, otherwise open)
                if (!isAlreadyVisible) {
                    clickedSkillSet.classList.add("show");
                    innerContainer.classList.add("active"); // Adds the class to rotate the arrow
                } else {
                    clickedSkillSet.classList.remove("show");
                    innerContainer.classList.remove("active"); // Removes the class to reset the arrow
                }
            }
        };

        // Add click event to each `.col-xl-6`
        nodeList.forEach(node => {
            node.addEventListener("click", handleShowEffect);
        });

        // Cleanup event listeners on component unmount
        return () => {
            nodeList.forEach(node => {
                node.removeEventListener("click", handleShowEffect);
            });
        };
    }, []);

    return (
        <div className='skills container' id='skills'>
            <p className='text-center m-0'>Explore My</p>
            <h2 className='text-center skills-title'>Skills</h2>
            <div className="skills-main-container">
                <div className="row g-0">
                    <div className="col-xl-6 col-md-6 h-100">
                        <div className="drop-down">
                            <div className="inner-container">
                                <i className='bx bx-code-curly skill-icon'></i>
                                <h5>Frontend Technologies</h5>
                                <i className='bx bx-chevron-down'></i>
                            </div>
                        </div>
                        <div className="skills-set-container mb-2">
                            <div className="list">
                                <i className='bx bxl-html5'></i>
                                <h5>HTML</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-css3'></i>
                                <h5>CSS</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-javascript'></i>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-bootstrap'></i>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-react'></i>
                                <h5>React.js</h5>
                            </div>
                            {/* <div className="list" style={{display:"flex"}}>
                                <img src={nextLogo} alt="" />
                                <h5>Next.js</h5>
                            </div> */}
                            <div className="list">
                                <i className='bx bxl-redux'></i>
                                <h5>Redux</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6 h-100">
                        <div className="drop-down">
                            <div className="inner-container">
                                <i className='bx bx-server skill-icon'></i>
                                <h5>Backend Technologies</h5>
                                <i className='bx bx-chevron-down'></i>
                            </div>
                        </div>
                        <div className="skills-set-container mb-2">
                            <div className="list">
                                <i className='bx bxl-nodejs'></i>
                                <h5>Node.js</h5>
                            </div>
                            <div className="list">
                                <i className='bx bx-expand-alt'></i>
                                <h5>Express.js</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-mongodb'></i>
                                <h5>MongoDB</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0">
                    <div className="col-xl-6 col-md-6 h-100">
                        <div className="drop-down">
                            <div className="inner-container">
                                <i className='bx bx-code-alt skill-icon'></i>
                                <h5>Version Control Tools</h5>
                                <i className='bx bx-chevron-down'></i>
                            </div>
                        </div>
                        <div className="skills-set-container mb-2">
                            <div className="list">
                                <i className='bx bxl-git'></i>
                                <h5>Git</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-github'></i>
                                <h5>GitHub</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-visual-studio'></i>
                                <h5>Visual Studio Code</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6 h-100">
                        <div className="drop-down">
                            <div className="inner-container">
                                <i className='bx bx-code skill-icon'></i>
                                <h5>Programming Languages</h5>
                                <i className='bx bx-chevron-down'></i>
                            </div>
                        </div>
                        <div className="skills-set-container mb-2">
                            <div className="list">
                                <i className='bx bxl-javascript'></i>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="list">
                                <i class='bx bxl-typescript'></i>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="list">
                                <i class='bx bxl-c-plus-plus' ></i>
                                <h5>C++</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
