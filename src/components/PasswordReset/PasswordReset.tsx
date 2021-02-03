import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PasswordReset.css';

interface IEmail {
    email: string, 
}

const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState<IEmail>({email: ''})
    const history = useHistory();

    const reset = () => {
        console.log('CLicked reset password')
    }

    const returnToLogin = () => {
        history.push('/login');
    }
    
    return (
        <div className='resetContainer'>
            <form className='formPanel reset'>
            <img src="../img/logo.svg" alt="logo" className="nav-logo2"></img>
                <h2>Password Reset</h2>
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
                <div className="buttonContainer">
                    <button className='btnReset' onClick={returnToLogin}>Return to Login</button>
                    <button 
                    className='btnReset'
                    onClick={reset}
                    >Reset</button>
                </div>
            </form>
        </div>
    );
};

export default PasswordReset;
  