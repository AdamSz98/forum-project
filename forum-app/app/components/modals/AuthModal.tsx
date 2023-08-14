'use client';
import Modal from './Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useState } from 'react';


const RegisterModal = () => {
  const [authType, setAuthType] = useState('register');

  return (
    <Modal>
      {
        authType === 'register' ? 
        <RegisterForm switchFunc={setAuthType}/> 
        : <LoginForm  switchFunc={setAuthType}/>
      }
    </Modal>
  )
}

export default RegisterModal;