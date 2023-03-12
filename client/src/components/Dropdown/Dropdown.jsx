import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dropdown.scss'

export const Dropdown = ({setDrop}) => {
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    const handleLogout = () =>{
        setDrop(false);
        logout();
        toast("Wow so easy!")
        navigate('/')
    }

    return (
        <div className="dropdown">
            <div className="links">
                <Link to='/create' className="link  droplink" onClick={() => setDrop(false)}>Create blog</Link>
                <Link to='/dashboard' className="link droplink" onClick={() => setDrop(false)}>Dashboard</Link>
                <span className='link droplink' onClick={handleLogout}>Logout</span>
                <ToastContainer />
            </div>
        </div>
    )
}