import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Nav.module.css';

function BrandNavLink({ children, ...props }: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      {children}
    </NavLink>
  );
}

export function Nav() {
  return (
    <nav className={styles.mainNav}>
      <menu>
        <li>
          <BrandNavLink to="/">Home</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="counter">Counter</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="weather">Weather</BrandNavLink>
        </li>
        <li className={styles.shiftRight}>
          <BrandNavLink to="login">Login</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="register">Register</BrandNavLink>
        </li>
      </menu>
    </nav>
  );
}
