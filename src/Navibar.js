import { Link } from 'react-router-dom';
import styles from './Navibar.module.css';

function Navibar({ currentUser }) {
  return (
    <div className={styles.navibar}>
      {currentUser && <div>Welcome, {currentUser.username}!</div>}
      <Link to={'/home'}>Home</Link>
      {!currentUser && <Link to={'/register'}>Register</Link>}
      {!currentUser && <Link to={'/login'}>Login</Link>}
      {currentUser && <Link to={'/posts'}>Strange Posts</Link>}
      {currentUser && <Link to={'/logout'}>Log Out</Link>}
    </div>
  );
}

export default Navibar;
