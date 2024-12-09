import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email) {
            alert('Successful Reset'); 
            navigate('/'); 
        } 
    };

    return (
        <section className="reset">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="buttons">
                        <button type="submit" className="button">
                            RESET PASSWORD
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;

