import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';


const Login = () => {
  return (
    <div className="formcontainer">
        <h1 className='login'>Login</h1>
<form>
  <div class="row">
    <label for="email">Email</label>
    <input type="email" name="email" autocomplete="off" placeholder="email@example.com" />
  </div>
  <div class="row">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder='*******'/>
  </div>
  <div class="row">
  <Link to='/'>
  <button type="submit">Login</button></Link>
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
  <h3>Or Create New</h3>
  <Link to='/signup'>
  <button style={{width:'200px'}} type="submit">Sign Up</button></Link>
  </div>
  </div>


</form>
       </div>   
  )
}

export default Login
