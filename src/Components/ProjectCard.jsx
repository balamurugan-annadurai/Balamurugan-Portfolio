import React from 'react'

const ProjectCard = ({ img,title,description,demoUrl,frontendRepo,backendRepo}) => {
    return (
        <>
            <div className='outer-card-container'>
                <div className="inner-card-container">
                    <a href={demoUrl} target='_blank'><img className='project-img' src={img} alt="" /></a>
                    <h4 className='text-center project-title mt-2 mb-2'>{title}</h4>
                    <p className='text-center project-des'>{description}</p>
                    <div className="action-buttons">
                        <div className="project-links">
                            <a href={demoUrl} target='_blank'>LIVE DEMO</a>
                            <a href={frontendRepo} target='_blank'>GitHub FrontEnd</a>
                            {backendRepo && <a href={backendRepo} target='_blank'>GitHub BackEnd</a>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard