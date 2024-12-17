import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(''); 
    const [surname, setSurname] = useState(''); 
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('https://picsum.photos/800'); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setError('The password must be at least 8 characters long!');
        } else {
            setError('');
            try {
                
                const createResponse = await fetch('https://api.escuelajs.co/api/v1/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: `${user} ${surname}`, 
                        email,
                        password,
                        avatar, 
                    }),
                });

                const createData = await createResponse.json();

                if (!createResponse.ok) {
                    throw new Error(createData.message || 'Account creation failed!');
                }

                
                const loginResponse = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const loginData = await loginResponse.json();

                if (!loginResponse.ok) {
                    throw new Error(loginData.message || 'Login failed!');
                }

                
                localStorage.setItem('token', loginData.access_token);
                alert('Account successfully created and logged in!');
                navigate('/'); 
            } catch (err) {
                setError(err.message || 'An error occurred, please try again!');
            }
        }
    };

    return (
        <section className="createAccount">
            <div className="container">
                <div className="item">
                    <h2>Account Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>First Name:</label>
                        <input type="text" id="name"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required />
                        <label>Last Name:</label>
                        <input type="text" id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required />
                        <label>Email Address:</label>
                        <input type="email" id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <div className="passwords">
                            <div className="confirm">
                                <label>Password:</label>
                                <input type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                {error && <p style={{ color: 'red', marginTop: '1px' }}>{error}</p>}
                            </div>
                        </div>
                        <div className="buttons">
                            <button type='submit' className="button">
                                CREATE ACCOUNT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
