import styles from './Dropdown.module.css';
import { CgProfile } from 'react-icons/cg';

interface DropdownProps {
  isOpen: boolean,
  close?: any
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  close
}) => {
  if(isOpen) {
    return (
      <div className={styles.page}>
  
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <CgProfile className={styles.icon}/>
            <p className={styles.title}>My Stuff</p>
          </div>
          <p className={styles.option}>Profile</p>
          <p className={styles.option}>Sign Out</p>
        </div>
        <div className={styles.outside} onClick={close}/>
      </div>
    )
  } else {
    return;
  }
}

export default Dropdown;