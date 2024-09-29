import React, { useEffect, useState } from 'react'
import "../App.css"
import img from "../../public/balamurugan.png"
import Skills from './Skills'
import Projects from './Projects'
import Contactme from './Contactme'
import Footer from './Footer'
import { TypeAnimation } from 'react-type-animation';  // Import TypeAnimation
import resume from "../assets/resume.pdf"


const Home = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const mobileMenu = document.querySelector(".mobile-navbar-list");
        const menuIcon = document.querySelector(".logo i");
        const closeIcon = document.querySelector(".close-icon");

        menuIcon.addEventListener("click", () => {
            mobileMenu.classList.add("show-menu");
        })

        closeIcon.addEventListener("click", () => {
            mobileMenu.classList.remove("show-menu")
        })

        const handleNavclick = () => {
            const menuClass = document.querySelector(".mobile-navbar-list");
            menuClass.classList.remove("show-menu");
        }

        const aNodeListMobile = document.querySelectorAll(".mobile-navbar-list ul li a");
        aNodeListMobile.forEach(a => {
            a.addEventListener("click", handleNavclick)
        });

        const aNodeList = document.querySelectorAll(".navbar ul li a");

        const onfocusEffect = (event) => {
            aNodeList.forEach((a) => {
                a.classList.remove("onfocus-effect");
                event.currentTarget.classList.add("onfocus-effect");
            })
        }

        aNodeList.forEach(a => {
            a.addEventListener("click", onfocusEffect)
        });

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => {
            aNodeList.forEach(a => {
                a.removeEventListener("click", onfocusEffect)
            })
            document.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <div className="mobile-navbar-list">

                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <i className='bx bx-x close-icon'></i>

            </div>

            <header className={isScrolled ? "scrolled" : ""}>
                <nav>
                    <div className="navbar container">
                        <div className="logo">
                            <i class='bx bx-menu toggle'></i>
                            <h3 className='d-flex align-items-center'>Balamurugan A</h3>
                        </div>
                        <ul className='desktop-menu'>
                            <li><a href="#" className="onfocus-effect">About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/balamurugan-a/" target='_blank'><i class='bx bxl-linkedin-square' ></i></a>
                            <a href="https://github.com/balamurugan-annadurai" target='_blank'><i class='bx bxl-github' ></i></a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className='container p-0'>
                <div className="home-content p-0">
                    <div className="left-container">
                        <h2>Hi, I'am Balamurugan</h2>
                        <div className="type-text">
                            <TypeAnimation
                                sequence={[
                                    "I'm a passionate Full Stack Developer",
                                    1000,
                                    "skilled in MERN stack",
                                    1000,
                                    "with a strong foundation in web development",
                                    1000,
                                    "Let's create something amazing together!",
                                    1000,
                                ]}
                                speed={20}  // Typing speed
                                style={{ whiteSpace: 'pre-line', fontSize: '1.8em' }}
                                repeat={Infinity}  // Repeat the typing animation
                            />
                        </div>
                        <p>As a MERN Stack Developer, I specialize in creating dynamic and responsive web applications. I bring a solid skill set in both front-end and back-end development</p>
                        <div className="action-buttons">
                            <a className='download-btn' target='_blank' href="https://docs.google.com/document/d/1U8WfeGRc5hyEiXwCstLQyz-vQ9NSKYlZBdVmZUSGoiE/edit?usp=sharing">View Resume</a>
                            <a className='contact-btn' href='#contact'>Contact me</a>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="img-container">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>

                <Skills />
                <Projects />
                <Contactme />
                <Footer />
            </main>
        </>
    )
}

export default Home