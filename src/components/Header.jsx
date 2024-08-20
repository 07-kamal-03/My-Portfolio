import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
import darkIcon from '../assets/dark.png'
import lightIcon from '../assets/light.png'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import searchDark from '../assets/search-dark.png'
import searchLight from '../assets/search-light.png'

export const Header = ({ theme, setTheme }) => {

  const scrollHeader = () => {
    if (window.scrollY === 0) {
      document.querySelector('.header').style.boxShadow = 'none';
      document.querySelector('.header').style.borderBottom = '2px solid gray';
    } else {
      document.querySelector('.header').style.boxShadow = '0px 4px 2px -2px gray';
      document.querySelector('.header').style.borderBottom = 'none';
    }
  };
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    scrollHeader();
    window.addEventListener('scroll', scrollHeader);
    // const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
    // };
    // window.addEventListener('resize', handleResize);
    // localStorage.setItem('current_theme', theme);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      //window.removeEventListener('resize', handleResize);
    };
  }, []);

  function showMenu() {
    document.querySelector('.navigation').classList.toggle('show');
    document.querySelector('.hamburger').classList.toggle('open');
  }

  return (
    <header className={`header ${theme}`}>
      <div className='logo'>
        <img src={theme == 'light' ? logoLight : logoDark} />
      </div>
      <div className={`navigation ${theme}`}>
        <ul>
          <li className='menu-items'><Link to="/">Home</Link></li>
          <li className='menu-items'><Link to="/general">General</Link></li>
          <li className='menu-items'><Link to="/education">Education</Link></li>
          <li className='menu-items'><Link to="professional">Professional</Link></li>
          <li className='menu-items'><Link to="contact">Contact</Link></li>
        </ul>
      </div>
      <div className={`search ${theme}`}>
        <input type="text" placeholder="Search..." />
        {window.innerWidth < 1279 ? <img src={theme == 'light' ? searchDark : searchLight} alt="Search" /> : <img src={theme == 'light' ? searchLight : searchDark} alt="Search" />}
      </div>
      <div className="theme-toggle">
        <img src={theme == 'light' ? darkIcon : lightIcon} alt={theme == 'light' ? "Light mode" : "Dark mode"} onClick={() => { theme == 'light' ? setTheme('dark') : setTheme('light') }} />
      </div>
      <div className='hamburger' onClick={showMenu}>
        <div className={`line ${theme}`}></div>
        <div className={`line ${theme}`}></div>
        <div className={`line ${theme}`}></div>
      </div>
    </header>
  )
}
