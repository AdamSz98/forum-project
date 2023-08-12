'use client';
import Button from '../Button';
import Input from '../Input';
import Modal from './Modal'
import styles from './RegisterModal.module.css';
import { useStore } from '../../lib/store';

const RegisterModal = () => {
  const isOpen = useStore((store: any) => store.modalOpen);

  return (
    <Modal isOpen={isOpen} >
      <div className={styles.header}>
        <h2 className={styles.title}>Sign Up</h2>
        <p className={styles.description}>
          Ready to dive in? Join today and be part 
          of the conversation that matters to you. 
        </p>
      </div>
      <div>
        <form>
          <Input label="Username" />
          <Input label="Email Address" /> 
          <Input label="Password" type="password" />
          <Input label="Confirm Password" type="password" />
          <Button label="Sign Up" type="submit" disabled={true}/>
        </form>
      </div>
      <div className={styles.footer}>
        <p className={styles.description}>
          Already have an account? <span className={styles.link}>Log In</span>
        </p>
      </div>
    </Modal>
  )
}

export default RegisterModal;