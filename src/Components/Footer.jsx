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
                        <i class='bx bxl-linkedin-square' ></i>
                        <i class='bx bxl-github' ></i>
                    </div>
                </div>

                <div className="info-container custom-ft">
                    <h4 className='blue-secondary'>Links</h4>
                    <ul>
                        <li><a href="#" className='green'>About</a></li>
                        <li><a href="#skills" className='green'>Skills</a></li>
                        <li><a href="#contact" className='green'>Contact</a></li>
                    </ul>
                </div>

                <div className="contact-details-container custom-ft">
                    <h4 className='blue-secondary'>Email</h4>
                    <ul>
                        <li className='green'>abalamurugan2003@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer