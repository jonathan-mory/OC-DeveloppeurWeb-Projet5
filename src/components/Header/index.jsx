import { NavLink } from 'react-router'
import Logo from '../../assets/images/logo_kasa.png'
import './Header.scss'
import { useEffect, useState } from 'react'

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="header">
      <img src={Logo} alt="Logo de Kasa" className="header__logo" />
      <nav className="header__navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {isMobile ? 'ACCUEIL' : 'Accueil'}
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {isMobile ? 'A PROPOS' : 'A propos'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
