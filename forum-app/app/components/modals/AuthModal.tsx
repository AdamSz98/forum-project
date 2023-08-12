'use client';
import Modal from './Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useStore } from '../../lib/store';
import { useState } from 'react';


const RegisterModal = () => {
  const [authType, setAuthType] = useState('register');
  const isOpen = useStore((store: any) => store.modalOpen);

  return (
    <Modal isOpen={isOpen} >
      {
        authType === 'register' ? 
        <RegisterForm switchFunc={setAuthType}/> 
        : <LoginForm  switchFunc={setAuthType}/>
      }
    </Modal>
  )
}

export default RegisterModal;