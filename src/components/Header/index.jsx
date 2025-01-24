import { NavLink } from 'react-router'

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
