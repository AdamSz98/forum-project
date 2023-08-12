import Input from '../Input';
import Modal from './Modal'
import styles from './RegisterModal.module.css';

const RegisterModal = () => {
  return (
    <Modal>
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
        </form>
      </div>
    </Modal>
  )
}

export default RegisterModal;