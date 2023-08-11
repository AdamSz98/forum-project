import Link from 'next/link';
import styles from './Navbar.module.css';
import { RiAliensFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <div className={styles.logo}>
          <RiAliensFill/>
        </div>
        <h3 className={styles.title}>forum</h3>
      </Link>
    </nav>
  )
}

export default Navbar;