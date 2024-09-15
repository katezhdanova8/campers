import { useState } from 'react';
import { useMedia } from 'use-media';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Container from '../Container/Container';
import SvgIcon from '../SvgIcon/SvgIcon';
import Drawer from '../Drawer/Drawer';
import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.Header__navLink, isActive && css.active);
};

const HeaderLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/catalog',
    label: 'Catalog',
  },
  {
    to: '/favourites',
    label: 'Favourites',
  }
];

const DesktopHeader = () => {
  return (
    <>
      <NavLink
        to="/"
        className={css.Header__logo}
      >
        <img src={Logo} alt="Logo" />
      </NavLink>

      {HeaderLinks.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={buildLinkClass}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  )
}

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavLink
        to="/"
        className={css.Header__logo}
      >
        <img src={Logo} alt="Logo" />
      </NavLink>

      <button
        className={css.Header__menuButton}
        onClick={() => setOpen(!open)}
      >
        <SvgIcon spriteIconId="menu" />
      </button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={css.Header__menu}>
          {HeaderLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={buildLinkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  )
}

const Header = () => {
  const isMobile = useMedia({ maxWidth: '768px' });

  return (
    <nav className={css.Header}>
      <Container>
        <div className={css.Header__content}>
          {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </div>
      </Container>
    </nav>
  );
}

export default Header;