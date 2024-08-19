import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
  return (
    <div>
        <div className='loginfront'>
          <div className='welcome'>
      <h1>Welcome</h1>
      <Link to="/login">
        <button className='logbtn'>Login</button>
      </Link>
      <Link to="/signup">
        <button className='signbtn'>Sign Up</button>
      </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Home;