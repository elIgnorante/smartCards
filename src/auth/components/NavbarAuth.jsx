
import { NavLink } from 'react-router-dom'

export const NavbarAuth = () => {
  return (
    <div className='navbarContainer'>
        <nav className='authNavbar'>
            <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} 
                to="/login"
            >
                Login
            </NavLink>

            <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} 
                to="/register"
            >
                Registrate
            </NavLink>
        </nav>
    </div>
  )
}
