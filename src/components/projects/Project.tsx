import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './project.css'
type ProjectType = {
    title: string;
    description: string;
    images: string[];
    githubUrl: string;
    githubPagesUrl: string;
    stack: string[];
}

export const Project = (props: ProjectType) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    const openProjectSite = () => {
        window.open(props.githubPagesUrl, '_blank', 'noopener,noreferrer');
    };
    const openProjectCode = () => {
        window.open(props.githubUrl, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className='project-container'>
            <div className='project-container-images'>
                <Slider {...sliderSettings}>
                    {props.images.map((image, index) => (
                        <div 
                            key={index} 
                            className='project-container-images-item'
                        >
                            <img 
                                src={image} 
                                alt={`Скриншот проекта ${props.title} ${index + 1}`} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <h2>{props.title}</h2>
            <div className='project-container-stack'>
                {props.stack.map(stack => (
                    <span key={stack} className='project-container-stack-item'>{stack}</span>
                ))}
            </div>
            <p>{props.description}</p>
            <div className='project-container-buttons'>
                <button 
                    className='project-container-buttons-site'
                    onClick={openProjectSite}
                >
                    Посмотреть сайт проекта
                </button>
                <button 
                    className='project-container-buttons-github'
                    onClick={openProjectCode}
                >
                    Github
                </button>
            </div>
        </div>
    )
}