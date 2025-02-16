import ProjectCard from './ProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import projects from '../utils/projectData'


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
                <div className="test-credentials text-center w-100 mb-3">Email: testuser@balatestingsxyz.com | Password: testuser123</div>
                <div className="project-card-container container">

                    <Slider {...settings} >
                        {
                            projects.map((project, index) => {
                               return <ProjectCard 
                                key={index}
                               img={project.img}
                               title={project.title}
                               description={project.description}
                               demoUrl={project.demoUrl}
                               frontendRepo={project.frontendRepo}
                               backendRepo={project.backendRepo}
                            />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Projects