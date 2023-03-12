import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/dashboard" className='link sidebarLink'>
                Dashboard
            </Link>
            <Link to='/profile' className='link sidebarLink'>
                Profile
            </Link>
            <Link to='/category' className='link sidebarLink'>
                Categories
            </Link>
        </div>
    )
}

export default Sidebar