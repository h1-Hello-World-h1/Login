import '../App.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    console.log('Logging in with:', { email, password });

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div>
        <header><p><Link to= "/">Home</Link></p></header>
        <div className='loginfront'>
      <h2 className='h2'>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='userinput'>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className='passinput'>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button className='loginspace' type="submit">Login</button>
      </form>
      <div className='spacing'>
      <p>Don't have an account? <br /> <Link to="/signup">Sign up here</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Login;