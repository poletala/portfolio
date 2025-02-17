import { experience } from "../../constants/experience"
import { ExperienceCard } from "../experienceCard/ExperienceCard"
import './aboutExperience.css'

export const AboutExperience = () => {
return (
    <div className="about-description-experience">
        {experience.map((experience) => {
        return <ExperienceCard 
                    key={experience.title} 
                    title={experience.title} 
                    company={experience.company} 
                    duration={experience.duration}
                    description={experience.description}
                    keywords={experience.keywords}/>
    })}
    </div>
    
)
}