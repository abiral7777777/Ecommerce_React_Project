import React, { useState } from 'react';
import './LoginForm.css';
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'abiral@gmail.com' && password === 'admin') {

            history.push('/');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span>Register</span></p>
        </div>
    );
};

export default LoginForm;
