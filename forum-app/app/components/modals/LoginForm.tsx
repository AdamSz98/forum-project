import Button from '../Button';
import Input from '../Input';
import styles from './RegisterForm.module.css';

interface LoginFormProps {
  switchFunc: any;
}

const LoginForm: React.FC<LoginFormProps> = ({
  switchFunc
}) => {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Log In</h2>
        <p className={styles.description}>
        Welcome back! We missed you! 
        Log in now and jump back in. 
        </p>
      </div>
      <div>
        <form>
          <Input label="Username / Email" />
          <Input label="Password" type="password" />
          <Button label="Log In" type="submit" disabled={true} customClass="green"/>
        </form>
      </div>
      <div className={styles.footer}>
        <p className={styles.description} onClick={() => {switchFunc('register')}}>
          New to our forum? <span className={styles.link}>Sign Up</span>
        </p>
      </div>
    </>
  )
}

export default LoginForm;