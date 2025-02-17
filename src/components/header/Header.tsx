import { useEffect, useState } from 'react';
import './header.css'
import MyImage from '../../assets/avatar.png'
export const Header = () => {
    const [position, setPosition] = useState(0);

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
        <div className='header-up'>
            <div className='header-menu'>
                <button className='header-menu-toggle-theme-btn'></button>
                <button className='header-menu-open-navbar-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className='header-content'>
                <span className='header-content-hello'>Привет, я Алёна</span>
                <span className='header-content-professions'>аналитик ↠ тестировщик ↠ веб-разработчик</span>
            </div>
        </div>
        <div className='header-down'>
            <div className='header-down-content'>
                <span>FRONTEND</span>
                <span>DEVELOPER</span>
                <img src={MyImage} alt='avatar' className='avatar'/>
            </div>
        </div>
        <div className='header-stripes'  style={{ backgroundPositionX: `${position * 0.5}px` }}>
        </div>
        <div className='header-stripes-left'  style={{ backgroundPositionX: `${position * -0.5}px` }}>
        </div>
        </>
    )
}