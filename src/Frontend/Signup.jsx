import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    console.log('Signing up with:', { username, email, password });

    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <header><p><Link to= "/">Home</Link></p></header>
      <div className='loginfront'>
      <h2 className='h2'>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          </div>
          <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className='signupspace' type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Signup;