import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="contents">
                <div className="cards">
                    <h2>Total Posts</h2>
                    <span>1234</span>
                </div>
                <div className="cards">
                    <h2>Total Users</h2>
                    <span>1234</span>
                </div>
                <div className="cards">
                    <h2>Total categories</h2>
                    <span>6969</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard