import './experienceCard.css'
type Experience = {
    title: string;
    company: string;
    duration: string;
    description: string;
    keywords: string[];
}
export const ExperienceCard = (props: Experience) => {
    return (
        <div className='experience-card'>
            <span className='experience-card-years'>
                {props.duration}
            </span>
            <div className='experience-card-description'>
                <h2 className='experience-card-position'>
                    {props.title}
                </h2>
                <span className='experience-card-company'>{props.company}</span>
                <p id='experience-card-respon'>
                    {props.description}
                </p>
                <div className='experience-card-tags'>
                    {props.keywords.map(keyword => {
                        return <span className='experience-card-keyword'>{keyword}</span>
                    })}
                </div>
            </div>
        </div>
    )
}