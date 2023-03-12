import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const navigate =  useNavigate()
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: ""
  });

  const handleData = (e) => {
    setData(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(data.password !== data.c_password){
        setErr("Passwords are not matched");
        setData(prev => ({...prev, password: "", c_password: ""}))
      }
      else{
        try {
          const res = await axios.post('/auth/register', data);
          setTimeout(() => {
            navigate('/login')
          }, 3000)
          console.log("RESPONSE", res)
          return setSuccess(res.data.message)
        } catch (error) {
          setErr(error.response.data)
        }
      }
  }

  return (
    <div className='auth'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            {success && <span className='success'>{success}</span>}
            <input required type="text" placeholder='Username'name='username' value={data.username} onChange={handleData} />
            <input required type="email" placeholder='Email' name='email' value={data.email} onChange={handleData} />
            <input required type="password" placeholder='Password' name='password' value={data.password} onChange={handleData} />
            <input required type="password" placeholder='Confirm password' name='c_password' value={data.c_password} onChange={handleData} />
            <button>Register</button>
            {err && <p>{err}</p>}
            <span>Already have an account ? <Link to="/login"  className='link'>Login</Link></span>
        </form>

    </div>
  )
}

export default Register