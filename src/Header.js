import { Link } from 'react-router-dom'
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={'/home'}>Home</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Login</Link>
    </header>
    );
};

export default Header;
