import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandMark from './BrandMark.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/founders', label: 'Founders' },
  { to: '/team', label: 'Team' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/sources', label: 'Sources' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" to="/" aria-label="Inside Canopy home">
          <BrandMark />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link className="header-cta" to="/team">Meet the people <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
