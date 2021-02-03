import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PasswordReset.css';

interface IEmail {
    email: string, 
}

const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState<IEmail>({email: ''})

    const reset = () => {
        console.log('CLicked reset password')
    }
    
    return (
        <div className='login'>
        <form className='formPanel'>
        <img src="../img/logo.svg" alt="logo" className="nav-logo2"></img>
            <h2
            >Login</h2>
            <div>
                <label htmlFor='email'>
                Email:
                <input
                    className="loginForm"
                    type='text'
                    name='username'
                    required
                    // value={user.email}
                    // onChange={(e) => setEmail({...user, email: e.target.value})}
                />
                </label>
            </div>
            <div>
                <button className='linkBtn' onClick={reset}>Forgot Password?</button>
            </div>
            <div>
                <input className='btn' type='submit' name='submit' value='Log In' />
            </div>
        </form>
    </div>
    );
};

export default PasswordReset;
  