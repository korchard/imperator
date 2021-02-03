import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import '../LoginForm/LoginForm.css'

const LoginPage: React.FC = () => {
  return (
    <div className='loginContainer'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
