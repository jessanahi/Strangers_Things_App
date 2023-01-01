import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ currentUser }) {
  return (
    <header className={styles.header}>
      {currentUser && <div>Welcome, {currentUser.username}!</div>}
      <Link to={'/home'}>Home</Link>
      {!currentUser && <Link to={'/register'}>Register</Link>}
      {!currentUser && <Link to={'/login'}>Login</Link>}
      {currentUser && <Link to={'/posts'}>Strange Posts</Link>}
      {currentUser && <Link to={'/logout'}>Log Out</Link>}
    </header>
  );
}

export default Header;
