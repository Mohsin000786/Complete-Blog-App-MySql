import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { AuthContext } from '../../contexts/AuthContext';
import Art1 from '../../img/art1.jpg';
import './Profile.scss'
import { Modal } from '@mantine/core';
import axios from 'axios';

function HandleModal({ opened, setOpened, user }) {
    const [file, setFile] = useState(null);
    const [updatedata, setUpdateData] = useState({
        username: "",
        email: "",
    });
    console.log(user)

    const handleImage = async (e) => {
        e.preventDefault();
        try {
            const formdata = new FormData();
            formdata.append("file", file);
            const res = await axios.post('http://localhost:8800/upload/updateImage', formdata)
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }


    const updateHandler = async (e) => {
        e.preventDefault();
        const ImgUrl = await handleImage(e);
        const data = {
            username: updatedata.username,
            email: updatedata.email,
            image: file ? ImgUrl : null
        }
        // console.log("DATA",data)

        try {
            const res = await axios.put(`/users/${user.id}`, data)
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdateData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Update Profile"
            >
                <div className="update">
                    <form>
                        <input type="text" placeholder='Username' name="username" value={updatedata.username} onChange={handleUpdate} />
                        <input type="email" placeholder='Email' name="email" value={updatedata.email} onChange={handleUpdate} />
                        <input type="file" name="file" id="updateImg" style={{ "display": "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor="updateImg">{user?.image ? "Update Image" : "Upload Image"}</label>
                        <button className='modalBtn' onClick={(e) => updateHandler(e)}>Update</button>
                    </form>
                </div>
            </Modal>
        </>
    );
}

const Profile = () => {
    const [opened, setOpened] = useState(false);
    const { user } = useContext(AuthContext);

    return (
        <div className="profile">
            <Sidebar />
            <div className="contents">
                <div className="userProfile">
                    <div className="userImage">
                        <img src={`/uploads/${user.image}`} alt="Profile" />
                    </div>
                    <div className="user">
                        <div className="userdata">
                            <h3>Name</h3>
                            <span>{user?.username}</span>
                        </div>
                        <div className="userdata">
                            <h3>Email</h3>
                            <span>{user?.email}</span>
                        </div>
                        <div className="userBtn">
                            <button onClick={() => setOpened(true)}>Update Profile</button>
                        </div>
                        {opened && <HandleModal opened={opened} setOpened={setOpened} user={user}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile