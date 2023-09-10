import React from 'react';
import "./Join.css";
import logo from "../../images/logo.png"
function Join() {
    return (
        <div className='JoinPage'>
            <div className='JoinContainer'>
                <img src={logo} alt="logo" />
                <h1>INFO RKC</h1>
                <input type="text" id="JoinInput" />
                <button className='joinbtn' >LogIn</button>
            </div>
        </div>
    )
}

export default Join;