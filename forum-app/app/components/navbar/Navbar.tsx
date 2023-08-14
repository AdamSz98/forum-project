'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { RiAliensFill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import Button from '../Button';
import { useStore } from '../../lib/store';
import ProfileModule from './ProfileModule';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <div className={styles.logo}>
          <RiAliensFill/>
        </div>
        <h3 className={styles.title}>forum</h3>
      </Link>
      <div className={styles.searchBar}>
        <label className={styles.searchIcon}>
          <BsSearch />
        </label>
        <input 
          type="text" 
          placeholder="Search in our forum"
          className={styles.searchInput}
        />
      </div>
      <ProfileModule />
    </nav>
  )
}

export default Navbar;