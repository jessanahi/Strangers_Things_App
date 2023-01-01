import styles from './Header.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <img alt='site logo' src={'https://www.g33kmania.com/wp-content/uploads/stranger-things-logo-square.jpeg'} />
    </header>
  );
}

export default Header;
