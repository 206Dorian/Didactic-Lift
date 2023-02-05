import React from "react"

export default function UserInfo (){
    return (
        <div className="user-container">
            {/* Render User info */}
        <h2> Welcome User</h2>
        <span>Age: </span>
        <span>Height: </span>
        <span>Weight: </span>
        <button>Delete User</button>
        <button>Update User</button>
      </div>
    )
}
