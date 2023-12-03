import React from 'react';
import './style.css'
import {Link, useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        // Dodaj logikę uwierzytelniania, a następnie przekieruj na stronę główną
        event.preventDefault();

        // Tutaj możesz dodać logikę uwierzytelniania
        // Jeśli uwierzytelnianie jest udane, możesz przekierować na stronę główną
        // Przykładowo:
        // if (successfulAuthentication) {
        navigate("/");
        // }
    };

    return (
        <div className="login-box">
            <div className="login-container">
                <h2>Zaloguj się</h2>
                <form className="form-global">
                    <input type="text" id="login" name="login" placeholder="Login" />
                    <input type="password" id="password" name="password" placeholder="Hasło"/>
                    <button type="submit" onClick={handleLogin} >Zaloguj się</button>
                </form>
                <p>Nie masz jeszcze konta? <Link to="/signup" className="login-link-text">Zarejestruj się</Link></p>
            </div>
        </div>
    );
};

export default Login;
