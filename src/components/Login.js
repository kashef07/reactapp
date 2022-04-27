import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';


function Login(){
  const navigate=useNavigate()

// const validate=document.getElementById('validate')
// validate.addEventListener('click',validateTbale )
// function validateTbale(){
//   const mobile=document.getElementById('mobile').value;
//   //const password=document.getElementById('password');
//   if(mobile==null){
//     alert('fill')
//   }
// }

  return<div className='img'>
    <ul className='list'>
        <li><a href='#'>Login</a></li>
        <li><a href='#'>Signup</a></li>
    </ul>
    <div className='form'>
    <form>
      <input type="number" placeholder='Mobile No' id='mobile'></input><i class='fa fa-user icon' id="icon"></i>
      <br></br><br></br>
      <input type='password' placeholder='*****' id='password'></input><i class="fa fa-eye" id="icon"></i>
      <br></br><br></br>
      <u>Forget Password?</u>
    </form>
    </div>
  <button className='btn' onClick={() =>navigate('home')} id="validate">Submit</button>
  </div>
}


export default Login;


