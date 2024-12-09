import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Create = () => {
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
            alert("Succesfull Created")
        }
    };
    return (
        <section className="createAccount">
            <div className="container">
                <div className="item">
                    <h2>Account Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email Address</label>
                        <input type="email" id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <div className="passwords">
                            <div className="confirm">
                                <label>Password</label>
                                <input type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                {error && <p style={{ color: 'red', marginTop: '1px' }}>{error}</p>}
                            </div>
                        </div>
                        <div className="buttons">
                            <button type='submit'
                                className="button"
                            >
                                CREATE ACCOUNT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Create
