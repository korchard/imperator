import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './PasswordReset.css';

interface IEmail {
    email: string, 
    confirmEmail: string
}

const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState<IEmail>({email: '', confirmEmail: ''})
    const history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        console.log('Clicked reset password', email);
        dispatch({ type: 'RESET_PASSWORD', payload: email });
        setEmail({email: '', confirmEmail: ''});
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
                        value={email.email}
                        onChange={(e) => setEmail({...email, email: e.target.value})}
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor='email'>
                    Confirm Email:
                    <input
                        className="loginForm"
                        type='text'
                        name='username'
                        required
                        value={email.confirmEmail}
                        onChange={(e) => setEmail({...email, confirmEmail: e.target.value})}
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
  