import Button from '../Button';
import Input from '../Input';
import styles from './RegisterForm.module.css';

interface RegisterFormProps {
  switchFunc: any;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  switchFunc
}) => {
  return (
    <>
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
        <p className={styles.description} onClick={() => {switchFunc('login')}}>
          Already have an account? <span className={styles.link}>Log In</span>
        </p>
      </div>
    </>
  )
}

export default RegisterForm;