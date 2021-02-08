import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import './PasswordReset.css';

interface IEmail {
    email: string, 
    confirmEmail: string
}

interface SwalOptions {
    title?: string,
    text?: string,
    icon?: string,
}

const PasswordReset: React.FC<SwalOptions> = () => {
    const [email, setEmail] = useState<IEmail>({email: '', confirmEmail: ''})
    const history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        console.log('Clicked reset password', email);
        if(email.email === email.confirmEmail) {
            dispatch({ type: 'RESET_PASSWORD', payload: email });
            setEmail({email: '', confirmEmail: ''});
        } else {
            swal({
                title: "Whoops!",
                text: "Please ensure email is accurate",
                icon: "warning",
              });
        }
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
  