import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
  return (
    <div>
        <div className='loginfront'>
      <h1>Welcome</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;