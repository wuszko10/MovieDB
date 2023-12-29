import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    const handleChangeRoute = () => {
        navigate('/signin');
        window.location.reload();
    };

    const handleRegistration = async (event) => {
        event.preventDefault();

        axios
            .post('https://at.usermd.net/api/user/create', {
                name: formData.name,  // Fix here
                email: formData.email,
                password: formData.password
            })
            .then((response) => {
                handleChangeRoute();
            })
            .catch((error) => {
                console.log(error);

                setFormData({
                    name: '',
                    email: '',
                    password: '',
                });
            });
    };

    return (
        <div className="login-box">
            <div className="login-container">
                <h2>Zarejestruj się</h2>
                <form className="form-global">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nazwa"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Hasło"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button type="submit" onClick={handleRegistration}>
                        Zarejestruj się
                    </button>
                </form>
                <p>
                    Masz już konto?{' '}
                    <Link to="/signin" className="login-link-text">
                        Zaloguj się
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
