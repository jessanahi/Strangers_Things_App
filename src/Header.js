import styles from './Header.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <img alt='site logo' src={'https://res.cloudinary.com/teepublic/image/private/s--8wqKRZQj--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1482755311/production/designs/991823_1.jpg'} />
    </header>
  );
}

export default Header;
