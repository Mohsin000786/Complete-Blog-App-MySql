import React, { useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate()
  const [err, setErr] = useState('');
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const {login} = useContext(AuthContext)


  const handleData = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(data)
      navigate('/');
    } catch (error) {
      setErr(error.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleData} />
        <input type="password" placeholder='password' name='password' value={data.password} onChange={handleData} />
        <button>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account ? <Link to="/register" className='link'>Register</Link></span>
      </form>

    </div>
  )
}

export default Login