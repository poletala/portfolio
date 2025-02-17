import { useState } from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Project } from "../projects/Project";
import { HTMLCSSProjects, reactJSProjects } from "../../constants/projects";
import './aboutProjects.css'

export const AboutProjects = () => {
    const [isReactJS, setIsReactJS] = useState(true)
    const [isHTML, setIsHTML] = useState(false)
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: reactJSProjects.length > 1,
    };
    const handleReactJSClick = () => {
        setIsReactJS(true)
        setIsHTML(false)
    }
    const handleHTMLClick = () => {
        setIsReactJS(false)
        setIsHTML(true)
    }
    return (
        <div className='about-description-projects'>
            <div className='about-description-projects-filter-buttons'>
                <button 
                    className='about-description-projects-filter-buttons--react-js' 
                    style={{backgroundColor: isReactJS ? 'var(--accent-color' : 'transparent'}}
                    onClick={handleReactJSClick}
                >
                    React/JS
                </button>
                <button 
                    className='about-description-projects-filter-buttons--html-css' 
                    onClick={handleHTMLClick}
                    style={{backgroundColor: isHTML ? 'var(--accent-color' : 'transparent'}}
                >
                    HTML/CSS
                </button>
            </div>
            {isReactJS && 
                <div className='about-description-projects-slider'>
                    <Slider {...sliderSettings}>
                    {reactJSProjects.map((project) => ( 
                        <div key={project.title}>
                            <Project
                                title={project.title}
                                description={project.description}
                                images={project.images}
                                githubUrl={project.githubUrl}
                                githubPagesUrl={project.githubPagesUrl}
                                stack={project.stack}
                            />
                        </div>
                    ))}
                    </Slider>
                </div>
            }
            {isHTML && 
            <div className='about-description-projects-slider'>
                <Slider {...sliderSettings}>
                    {HTMLCSSProjects.map((project) => (
                        <div key={project.title}>
                            <Project
                                title={project.title}
                                description={project.description}
                                images={project.images}
                                githubUrl={project.githubUrl}
                                githubPagesUrl={project.githubPagesUrl}
                                stack={project.stack}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            }
        </div>
    )
}