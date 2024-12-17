import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password.length < 8) {
            setError('Password must be at least 8 characters long!');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed!');
            }

            localStorage.setItem('token', data.access_token);
            setLoading(false);

            navigate('/');
            window.location.reload();
        } catch (err) {
            setError(err.message || 'An error occurred, please try again!');
            setLoading(false);
        }
    };

    return (
        <section className="accountPage">
            <div className="container">
                <div className="items">

                    <div className="sign">
                        <form onSubmit={handleSubmit}>
                            <label>Email Address:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="buttons">
                                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                                <button type="submit" className="button" disabled={loading}>
                                    {loading ? 'Please wait...' : 'SIGN IN'}
                                </button>
                                <button className="forget">
                                    <a className="passBlue" href="/reset">Forgot your password?</a>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="create">
                        <div className="item">
                            <h2>New Customer?</h2>
                            <p>By creating an account, you will be able to:</p>
                            <ul>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                                <li>Save items to your Wish List</li>
                            </ul>
                            <div className="buttons">
                                <button className="button">
                                    <a href="/register" className="white">CREATE ACCOUNT</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;