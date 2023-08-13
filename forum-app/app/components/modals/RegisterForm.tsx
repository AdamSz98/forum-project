import Button from '../Button';
import Input from '../Input';
import styles from './RegisterForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

interface RegisterFormProps {
  switchFunc: any;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  switchFunc
}) => {
  const [errorMsg, setErrorMsg] = useState('err');
  const [errorVisibility, setErrorVisibility] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required().min(4),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().oneOf([yup.ref("password")])
  });
  
  const checkErrors = () => {
    if(errors.username) {
      setErrorMsg("Username must be at least 4 characters.");
      setErrorVisibility(true);
    } else if (errors.email) {
      setErrorMsg("Please provide a valid email address!");
      setErrorVisibility(true);
    } else if (errors.password) {
      setErrorMsg("The password must be at least 6 characters.");
      setErrorVisibility(true);
    } else if (errors.confirmPassword) {
      setErrorMsg("The passwords doesn't seem to match.");
      setErrorVisibility(true);
    } else {
      setErrorVisibility(false);
    }
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/users/register",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log("Error:", err);
    }
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Username" name="username" register={register} />
          <Input label="Email Address" name="email" register={register} /> 
          <Input 
            label="Password" 
            type="password"  
            name="password" 
            register={register}
          />
          <Input 
            label="Confirm Password" 
            type="password" 
            name="confirmPassword" 
            register={register} 
          />
          <p className={!errorVisibility ? styles.errorMsg : styles.visibleErr}>
            {errorMsg}
          </p>
          <Button label="Sign Up" type="submit" onClick={checkErrors}/>
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