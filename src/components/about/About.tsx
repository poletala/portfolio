import { useState } from 'react'
import './about.css'
import { Cursor } from '../cursor/Cursor';
import { AboutMe } from '../aboutMe/AboutMe';
import { AboutStack } from '../aboutStack/AboutStack';
import { AboutProjects } from '../aboutProjects/AboutProjects';
import { AboutExperience } from '../aboutExperience/AboutExperience';
export const About = () => {
    const [isAboutMe, setIsAboutMe] = useState(true);
    const [isAboutStack, setIsAboutStack] = useState(false);
    const [isAboutProjects, setIsAboutProjects] = useState(false);
    const [isAboutExperiences, setIsAboutExperiences] = useState(false);
    const showStack = () => {
        setIsAboutMe(false)
        setIsAboutStack(true)
        setIsAboutProjects(false)
        setIsAboutExperiences(false)
    };
    const showAboutMe = () => {
        setIsAboutMe(true)
        setIsAboutStack(false)
        setIsAboutProjects(false)
        setIsAboutExperiences(false)
    };
    const showProjects = () => {
        setIsAboutMe(false)
        setIsAboutStack(false)
        setIsAboutProjects(true)
        setIsAboutExperiences(false)
    };
    const showExperiences = () => {
        setIsAboutMe(false)
        setIsAboutStack(false)
        setIsAboutProjects(false)
        setIsAboutExperiences(true)
    };
    

    return (
        <>
        <Cursor/>
        <div className='about'>
            <div className='about-information'>
                <div className='about-information-header'>
                    <h1>Aлёнa Пoлeтaeвa</h1>
                    <h2>веб-разработчик</h2>
                    <code>Меня вдохновляет возможность создавать удобные и интуитивно понятные интерфейсы, которые делают жизнь пользователей проще и помогают им достигать своих целей.</code>
                </div>
                <nav className='about-information-menu'>
                    <span className={isAboutMe ? 'active' : ''} onClick={showAboutMe}>ОБО МНЕ</span>
                    <span className={isAboutStack ? 'active' : ''} onClick={showStack}>СТЕК</span>
                    <span className={isAboutProjects ? 'active' : ''} onClick={showProjects}>ПРОЕКТЫ</span>
                    <span className={isAboutExperiences ? 'active' : ''} onClick={showExperiences}>ОПЫТ РАБОТЫ</span>
                </nav>
                <div className='about-information-social'></div>
            </div>
            <div className='about-description'>
                {isAboutMe && <AboutMe/>}
                {isAboutStack && <AboutStack/>}
                {isAboutProjects && <AboutProjects/>}
                {isAboutExperiences && <AboutExperience/>}
            </div>
            </div>
        </>
    )
}