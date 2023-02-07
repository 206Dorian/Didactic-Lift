import React from 'react'
import Auth from '../utils/auth';

const Logout = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        <div> 
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
            </button>
        
        </div>
    )
}

export default Logout