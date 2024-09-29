import React from 'react'
import ProjectCard from './ProjectCard'
import wildlenstour from "../assets/wildlenstour.png"
import urlshortner from "../assets/urlshortner.png"
import shoppingCart from "../assets/shopping-cart.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Projects = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

        ]
    };

    return (
        <>
            <div className="projects container mb-3" id='projects'>
                <p className='text-center m-0'>Browse My Recent</p>
                <h2 className='text-center skills-title'>Projects</h2>

                <div className="project-card-container container">

                    <Slider {...settings}>
                        <div className='outer-card-container'>
                            <div className="inner-card-container">
                                <a href="https://wildlens-tours.netlify.app/" target='_blank'><img className='project-img' src={wildlenstour} alt="" /></a>
                                <h4 className='text-center project-title mt-2 mb-2'>Tourism booking Application</h4>
                                <p className='text-center project-des'>WildLens Tours, a comprehensive platform for discovering and booking wildlife tours globally. This MERN stack application offers a dynamic user experience for planning adventures and robust admin features for managing bookings and tours</p>
                                <div className="action-buttons">
                                    <div className="project-links">
                                        <a href="https://wildlens-tours.netlify.app/" target='_blank'>LIVE DEMO</a>
                                        <a href="https://github.com/balamurugan-annadurai/WildLens-Tours-Frontend" target='_blank'>GitHub FrontEnd</a>
                                        <a href="https://github.com/balamurugan-annadurai/WildLens-Tours-Backend" target='_blank'>GitHub BackEnd</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='outer-card-container'>
                            <div className="inner-card-container">
                                <a href="https://oneclick-urlshortener.netlify.app/" target='_blank'><img className='project-img' src={urlshortner} alt="" /></a>
                                <h4 className='text-center project-title mt-2 mb-2'>URL Shortener Application</h4>
                                <p className='text-center project-des'>A full-stack MERN application for shortening long URLs, with features including user authentication, password recovery, URL management, and a statistics dashboard. Easily create and manage short links with a user-friendly interface.</p>
                                <div className="action-buttons">
                                    <div className="project-links">
                                        <a href="https://oneclick-urlshortener.netlify.app/" target='_blank'>LIVE DEMO</a>
                                        <a href="https://github.com/balamurugan-annadurai/Urlshotener-Frontend" target='_blank'>GitHub FrontEnd</a>
                                        <a href="https://github.com/balamurugan-annadurai/urlshortener-backend" target='_blank'>GitHub BackEnd</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='outer-card-container'>
                            <div className="inner-card-container">
                                <a href="https://react-shopping-cart-bala.netlify.app/" target='_blank'><img className='project-img' src={shoppingCart} alt="" /></a>
                                <h4 className='text-center project-title mt-2 mb-2'>React shopping cart Website</h4>
                                <p className='text-center project-des'>A dynamic e-commerce platform built with React, enabling users to add and manage products in their cart, view real-time updates, and experience seamless navigation across devices. Offers a sleek design and intuitive shopping interface, real time</p>
                                <div className="action-buttons">
                                    <div className="project-links">
                                        <a href="https://react-shopping-cart-bala.netlify.app/" target='_blank'>LIVE DEMO</a>
                                        <a href="https://github.com/balamurugan-annadurai/React-Shopping-Cart" target='_blank'>GitHub FrontEnd</a>
                                        <a href="" target='_blank'>GitHub BackEnd</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Projects