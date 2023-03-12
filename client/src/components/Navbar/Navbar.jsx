import React, { useContext, useState } from 'react'
import './Navbar.scss';
import Logo from '../../img/logo.png';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Dropdown } from '../Dropdown/Dropdown';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [drop, setDrop] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="links">
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contact" className='link'>Contact</Link>
          <Link to="/blog" className='link'>Blog</Link>
          <Link to="/latest" className='link'>Latest</Link>
        </div>

        <>
          {
            user ? (
              <div className="profile" onClick={() => setDrop(!drop)}>
                {user?.image ? <img src={`/uploads/${user.image}`} alt="Profile" /> : <FaUserCircle scale={30} />}
                <span className='link'>{`${user?.username.slice(0, 8)}.`}</span>
                <span><FaCaretDown /></span>
                {drop && <Dropdown setDrop={setDrop} />}
              </div>
            ) : (
              < div className="profile">
              <Link to='/login'>
                <button className='createlink'>Login</button>
              </Link>
              </div>
            )
          }
        </>
      </div>
    </>
  )
}

export default Navbar