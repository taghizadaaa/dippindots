import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setError('The password must be at least 8 characters long!');
        } else {
            setError('');
            navigate('/');
            alert("Succesfull Create")
        }
    };
    return (
        <section className="accountPage">
            <div className="container">
                <div className="items">
                    <div className="sign">
                        <form onSubmit={handleSubmit}>
                            <label>Email Address:</label>
                            <input type="email" id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <label>Password:</label>
                            <input type="password" id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <div className="buttons">
                            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                                <button type='submit'
                                    className="button"
                                >
                                    SIGN IN
                                </button>
                                <button className='forget'>
                                    <Link className='blue' to="/reset">Forgot your password?</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="create">
                        <div className="item">
                            <h2>New Customer?</h2>
                            <p>Create an account with us and you'll be able to:</p>
                            <ul>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                                <li>Save items to your Wish List</li>
                            </ul>
                            <div className="buttons">
                                <button
                                    className="button"
                                >
                                    <Link to="/create" className='white'>CREATE ACCOUNT</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account
