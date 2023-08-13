import Button from '../Button';
import Input from '../Input';
import styles from './RegisterForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import * as yup from 'yup';

interface LoginFormProps {
  switchFunc: any;
}

const LoginForm: React.FC<LoginFormProps> = ({
  switchFunc
}) => {
  const [errorVisibility, setErrorVisibility] = useState(false);

  const schema = yup.object().shape({
    identifier: yup.string().required().min(3),
    password: yup.string().required().min(6),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", {
      identifier: data.identifier,
      password: data.password,
      redirect: false,
    })
    console.log(result);

    if(result!.error == null) {
      setErrorVisibility(false);
    } else {

      setErrorVisibility(true);
    }
  }

  const checkErrors = () => {
    if(errors.identifier || errors.password) {
      setErrorVisibility(true);
    }
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Username / Email" 
            name="identifier"
            register={register} 
          />
          <Input 
            label="Password" 
            type="password" 
            name="password"
            register={register}
          />
          <p className={!errorVisibility ? styles.errorMsg : styles.visibleErr}>
            Invalid credentials.
          </p>
          <Button 
            label="Log In" 
            type="submit" 
            customClass="green"
            onClick={checkErrors}
          />
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