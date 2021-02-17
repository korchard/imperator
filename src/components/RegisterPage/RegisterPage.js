import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

const RegisterPage = () => {
  const history = useHistory();
  return (
    <div className='registerContainer'>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
