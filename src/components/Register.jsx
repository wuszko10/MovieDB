import React from 'react';
import './style.css'
import {Link, useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        // Dodaj logikę uwierzytelniania, a następnie przekieruj na stronę główną
        event.preventDefault();

        // Tutaj możesz dodać logikę uwierzytelniania
        // Jeśli uwierzytelnianie jest udane, możesz przekierować na stronę główną
        // Przykładowo:
        // if (successfulAuthentication) {
        navigate("/login");
        // }
    };

    return (
        <div className="login-box">
            <div className="login-container">
                <h2>Zarejestruj się</h2>
                <form>
                    <input type="text" id="email" name="email" placeholder="Adres e-mail" />
                    <input type="text" id="firstname" name="firtsname" placeholder="Imię" />
                    <input type="text" id="login" name="login" placeholder="Login" />
                    <input type="password" id="password" name="password" placeholder="Hasło"/>
                    <button type="submit" onClick={handleLogin}>Zarejestruj się</button>
                </form>
                <p>Masz już konto? <Link to="/login" className="login-link-text">Zaloguj się</Link></p>
            </div>
        </div>
    );
};

export default Register;
