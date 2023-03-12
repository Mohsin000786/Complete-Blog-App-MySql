import React from 'react'
import Logo from '../../img/logo.png'
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={Logo} alt="logo" />
        <span>Made with React.js , MySql , Node.js</span>
      </div>
    </div>
  )
}

export default Footer