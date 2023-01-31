import React from 'react'
import { css } from '@emotion/react'
const Login = () => {
  return (
    <>


<container className='login-page'>
  <container className='container'>
    <container className='row'>
      <container className='col-2'>
        
      </container>
      <container className='col-2'>
        <container className='form-container'>
          <container className='form-btn'>
            <span onclick='login()'>Login or </span>
            <span onclick='register()'>Register</span>
            <hr id='indicator' />
          </container>
          <form id='loginForm'>
            <input type='Email' placeholder='Email' id='email-login' />
            <input type='Password' placeholder='Password' id='password-login' />
            <button type='submit' className='btn'>Login</button>
          </form>
          <form id='registerForm'>
            <input
              type='First Name'
              placeholder='First Name'
              id='firstname-signup'
            />
            <input
              type='Last Name'
              placeholder='Last Name'
              id='lastname-signup'
            />
            <input type='Email' placeholder='Email' id='email-signup' />
            <input
              type='Username'
              placeholder='Username'
              id='username-signup'
            />
            <input
              type='Password'
              placeholder='Password'
              id='password-signup'
            />
            <button type='submit' class='btn'>Register</button>
          </form>
        </container>
      </container>
    </container>
  </container>
</container>


<script src='./js/login.js'></script>
<script src='./js/toggle-form.js'></script>



    </>
  )
}

export default Login