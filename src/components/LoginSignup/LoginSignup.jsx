import React, { useState } from 'react'
import './LoginSignup.css'
import emailpng from '../assets/email.jpg'
import userpng from '../assets/userIMG.png'
import passwordpng from '../assets/password.png'

function LoginSignup() {
    const [action, setAction] = useState('Sign Up')
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "login"?<div></div>:
            <div className="input">
            <img src={userpng} alt="" />
            <input type="text" placeholder='name...' />
            </div>}
            
            <div className="input">
                <img src={emailpng} alt="" />
                <input type="email"  placeholder='email....'/>
            </div>
            <div className="input">
                <img src={passwordpng} alt="" />
                <input type="password" placeholder='password' />
            </div>
        </div>
        {action ==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click here</span></div>}
        
        <div className="submit-container">
            <div className={action === "login"?"submit gray":"submit"} onClick={ () => {setAction('Sign Up')}}>Sign Up</div>
            <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={() => {setAction('login')}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup