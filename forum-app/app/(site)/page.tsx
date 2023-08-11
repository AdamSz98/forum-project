import Navbar from '../components/navbar/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      <h1>Hi</h1>
    </main>
    </>
  )
}
