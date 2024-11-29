import Link from "next/link";
import styles from './Navbar.module.css'; 

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li><Link href="/" className={styles.navItem}>Home</Link></li>
      <li><Link href="/draw" className={styles.navItem}>Draw</Link></li>
      <li><Link href="/gallery" className={styles.navItem}>Gallery</Link></li>
      <li><Link href="/about" className={styles.navItem}>About</Link></li>
      <li><Link href="/contact" className={styles.navItem}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
