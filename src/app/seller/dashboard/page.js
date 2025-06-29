'use client';
import { useState, useEffect } from 'react';
import { initialBookForm } from '../../../models/Books';

export default function SellerDashboard() {
  const [form, setForm] = useState(initialBookForm);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    alert(res.ok ? 'Book submitted successfully' : 'Error submitting');
  };

  const formStyle = {
    maxWidth: '640px',
    margin: '40px auto',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '88%',
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={headingStyle}>Submit Book Details</h2>
      {Object.keys(initialBookForm).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          onChange={handleChange}
          required
          type={field === 'price' || field === 'publicationYear' ? 'number' : 'text'}
          style={inputStyle}
        />
      ))}
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}
