import { Link } from 'react-router-dom';
import '../App.css'

const LoginSuccess = () => {
  return (
    <div>
        <div className='loginfront'>
      <h2 className='success'>Login Successful!</h2>
      <p className='success'>Welcome back! <br /> You have successfully logged in.</p>
      <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default LoginSuccess;