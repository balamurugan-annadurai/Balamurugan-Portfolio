import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container inner-ft-container">
                <div className="brand-container">
                    <div className="logo">
                        <h3 className='d-flex align-items-center'>Balamurugan A</h3>
                    </div>
                    <div className="social-icons social-icons-footer">
                        <a href="https://www.linkedin.com/in/balamurugan-a/" target='_blank'><i class='bx bxl-linkedin-square' ></i></a>
                        <a href="https://github.com/balamurugan-annadurai" target='_blank'><i class='bx bxl-github' ></i></a>
                    </div>
                </div>

                <div className="info-container custom-ft">
                   
                </div>

                <div className="contact-details-container custom-ft">
                    <h4 className='blue-secondary'>Email</h4>
                    <ul>
                        <li>abalamurugan2003@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer