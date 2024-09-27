import React from 'react'

const ProjectCard = ({ img }) => {
    return (
        <>
            <div className='outer-card-container'>
                <div className="inner-card-container">
                    <img className='project-img' src={img} alt="" />
                    <h4 className='text-center project-title mt-2 mb-2'>Tourism booking web Application</h4>
                    <p className='text-center project-des'>WildLens Tours, a comprehensive platform for discovering and booking wildlife tours globally. This MERN stack application offers a dynamic user experience for planning adventures and robust admin features for managing bookings and tours</p>
                    <div className="action-buttons">
                        <div className="project-links">
                            <a href="">LIVE DEMO</a>
                            <a href="">GitHub FrontEnd</a>
                            <a href="">GitHub BackEnd</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard