import React from 'react'
import Auth from '../utils/auth';
import './Logout.css';

const Logout = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        <div>
            <button className="logout-btn" onClick={logout}>
                Logout
            </button>

        </div>
    )
}

export default Logout