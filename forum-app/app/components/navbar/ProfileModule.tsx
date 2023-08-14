'use client';
import { useSession } from 'next-auth/react'
import { useStore } from '../../lib/store';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import styles from './ProfileModule.module.css';
import Button from '../Button';

interface ProfileModuleProps {
  openFunc: any;
}

const ProfileModule: React.FC<ProfileModuleProps> = ({
  openFunc
}) => {
  const { data: session, status} = useSession();
  const setModalOpen = useStore((store: any) => store.setModalOpen);

  if(status == 'unauthenticated') {
    return (
      <div className={styles.btnBox}>
        <Button label="Log In" onClick={setModalOpen}/>
      </div>
    )
  }

  if(status == 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <AiOutlinePlus className={styles.icon}/>
        </div>
        <div className={styles.profile} onClick={openFunc}>
          <CgProfile className={styles.icon}/>
          <AiOutlineDown className={styles.small}/>
        </div>
      </div>
    )
  }

}

export default ProfileModule;