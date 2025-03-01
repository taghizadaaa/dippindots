import React, { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    let numericValue = value.replace(/\D/g, '');
    if (numericValue.length > 4) numericValue = numericValue.slice(0, 4);

    let month = numericValue.slice(0, 2);
    let year = numericValue.slice(2, 4);

    if (parseInt(month, 10) > 12) month = '';
    
    return month + (numericValue.length > 2 ? '/' + year : '');
  };

  const formatName = (value) => {
    return value.replace(/[^a-zA-Z ]/g, '').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatCityAndCountry = (value) => {
    return value
      .replace(/[^a-zA-Z ]/g, '') 
      .replace(/\b\w/g, (char) => char.toUpperCase()); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      setFormData({ ...formData, [name]: formatCardNumber(value) });
      return;
    }
    if (name === 'expiryDate') {
      setFormData({ ...formData, [name]: formatExpiryDate(value) });
      return;
    }
    if (name === 'cvv' && !/^\d{0,3}$/.test(value)) return;
    if (name === 'name') {
      setFormData({ ...formData, [name]: formatName(value) });
      return;
    }
    if (name === 'postalCode' && /\D/.test(value)) return;

    
    if (name === 'city' || name === 'country') {
      setFormData({ ...formData, [name]: formatCityAndCountry(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      alert('You must log in to complete the payment.');
      return;
    }
    if (
      !formData.name ||
      formData.cardNumber.replace(/\s/g, '').length !== 16 ||
      formData.cvv.length !== 3 ||
      !formData.expiryDate
    ) {
      setError('Please fill in all required fields with valid values.');
      return;
    }
    setTimeout(() => {
      console.log('Payment submitted:', formData);
      setError(null);
      setSuccess(true);
    }, 1000);
  };

  return (
    <section className="payment">
      <div className="payment-container">
        <h1>Payment Page</h1>
        {success ? (
          <div className="success-message">
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="payment-form">
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name Surname"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your City"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="10001"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Your Country"
                required
              />
            </div>
            <div className="buttons">
              <button type="submit" className="button">
                Pay Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Payment;
