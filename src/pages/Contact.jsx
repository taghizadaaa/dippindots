import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.length < 10) {
            setError('The message must be at least 10 letter long.');
        } else {
            setError('');
            navigate('/');
            alert("Succesfull Submit")
        }
    };

    return (
        <section className="contactUs">
            <div className="container">
                <div className="contactItems">
                    <div className="head">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="bottom">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <label>First Name</label>
                                <input type="text" id='name'
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required />
                                <label>Last Name</label>
                                <input type="text" id='surname'
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    required />
                                <label>First Name</label>
                                <input type="email" id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <label>Meassage</label>
                                <textarea name="textarea" id="textarea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                                {error && <p style={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{error}</p>}
                                <div className="buttons">
                                    <button type='submit'
                                        className="button"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="address">
                            <div className="item">
                                <h3>ADDRESS</h3>
                                <ul>
                                    <li>Dippin' Dots, LLC.</li>
                                    <li>5101 Charter Oak Drive</li>
                                    <li>Paducah, KY 42001</li>
                                </ul>
                                <h3>PHONE & FAX</h3>
                                <ul>
                                    <li>Phone: (270) 443-8994</li>
                                    <li>Fax: (270) 443-8997</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
