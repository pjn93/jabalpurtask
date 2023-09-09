import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="formcontainer">
        <h1 className='login'>Sign Up</h1>
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
  <Link to='/login'>
  <button type="submit">SignUp</button></Link>
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
  <h3>If already have</h3>
  <Link to='/login'>
  <button style={{width:'200px'}} type="submit">LogIn</button></Link>
  </div>
  </div>


</form>
       </div>   
  )
}

export default SignUp

