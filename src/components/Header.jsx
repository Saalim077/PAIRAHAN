import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" id="nav-logo">
          <div className="header__logo-icon">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="8" fill="#2E7D32"/>
              <path d="M8 34L16 12L22 26L28 18L36 34H8Z" fill="none" stroke="#A2D149" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M22 14L28 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
              <rect x="25" y="4" width="6" height="6" rx="1" fill="#A2D149"/>
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="logo-pairahan">PAIRAHAN</span>
            <span className="logo-design">DESIGN <span className="logo-consultants">CONSULTANTS</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" id="main-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              id={`nav-${label.toLowerCase().replace(' ', '-')}`}
              className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary header__nav-cta" id="nav-cta">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-nav">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `header__mobile-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ margin: '1rem 1.5rem' }}>
          Get a Quote
        </Link>
      </div>
    </header>
  )
}
