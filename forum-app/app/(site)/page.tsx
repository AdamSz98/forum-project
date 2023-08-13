'use client';
import { useSession, signOut } from 'next-auth/react'
import styles from './page.module.css'
import Button from '../components/Button';

export default function Home() {
  const { data: session, status} = useSession();

  if(status == "unauthenticated") {
    return (
      <main className={styles.main}>
        <h1>Hi stranger!</h1>
      </main>
    )
  }

  if(status == "authenticated") {
    return (
      <main className={styles.main}>
        <h1>Hi {session.user?.name}!</h1>
        <Button 
          label="SIGN OUT" 
          onClick={() => {signOut({redirect: false})}}
        />
      </main>
    )
  }
}
