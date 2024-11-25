import React, { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        const nodeList = document.querySelectorAll(".col-xl-6");

        const handleShowEffect = (event) => {
            const clickedSkillSet = event.currentTarget.querySelector(".skills-set-container");
            const arrowIcon = event.currentTarget.querySelector('.bx-chevron-down');
            const innerContainer = event.currentTarget.querySelector('.inner-container');

            if (clickedSkillSet) {
                const isAlreadyVisible = clickedSkillSet.classList.contains("show");

                const skillsNodeList = document.querySelectorAll(".skills-set-container");
                const arrowNodeList = document.querySelectorAll(".bx-chevron-down");
                const containerNodeList = document.querySelectorAll(".inner-container");

                skillsNodeList.forEach((node) => node.classList.remove("show"));
                arrowNodeList.forEach((icon) => icon.classList.remove("active"));
                containerNodeList.forEach((container) => container.classList.remove("active"));

                if (!isAlreadyVisible) {
                    clickedSkillSet.classList.add("show");
                    innerContainer.classList.add("active");
                } else {
                    clickedSkillSet.classList.remove("show");
                    innerContainer.classList.remove("active");
                }
            }
        };

        nodeList.forEach(node => {
            node.addEventListener("click", handleShowEffect);
        });

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
                            <i class='bx bx-code' ></i>
                                <h5>Material UI</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-react'></i>
                                <h5>React.js</h5>
                            </div>
                            <div className="list">
                            <i class='bx bx-code-alt' ></i>
                                <h5>Next.js</h5>
                            </div>
                            <div className="list">
                                <i className='bx bxl-redux'></i>
                                <h5>Redux</h5>
                            </div>
                            <div className="list">
                            <i class='bx bx-code' ></i>
                                <h5>Zustand</h5>
                            </div>
                            <div className="list">
                            <i class='bx bx-code-alt' ></i>
                                <h5>React Query</h5>
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
                            <i class='bx bx-code' ></i>
                                <h5>Bitbucket</h5>
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
