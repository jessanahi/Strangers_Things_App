import { Link } from 'react-router-dom';
import styles from './Navibar.module.css';

function Navibar({ currentUser, logout }) {
  return (
    <div className={styles.navibar}>
      <Link to={'/home'}>Home</Link>
      {
        currentUser && (
          <>
            <div>Welcome, {currentUser.username}!</div>
            <Link to={'/posts'}>Strange Posts</Link>
            <Link to={'/logout'} logout={logout}>Log Out</Link>
          </>
        )
      }
    
      {
        !currentUser && (
          <>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
          </>
        )
      }
    </div>

  );
}

export default Navibar;
