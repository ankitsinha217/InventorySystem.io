import React, { useState } from 'react'
import './login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Path from './Route';
import back from "./back3.jpg"

  function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [temp,setTemp]=useState(false);
  const [loadHome,setLoadHome]=useState(false);

  const handleOnChange= (e)=> {
   if(e.target.name==="email"){
   setEmail(e.target.value);
   }
  if(e.target.name==="password"){
    setPassword(e.target.value);
  }
}

  const validate =()=> {
    if (!email || !password) {
      window.alert('*Please enter the mandatory fields')        
      return
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return
    }
    return true
  }

  const handleSubmit= ()=> {
  

    fetch('http://localhost:9999/login',{
      method:"POST",
      body:JSON.stringify({email:email,password:password}),
      headers:{
          "content-Type":"application/json",
      }
  }).then((r)=>{
    console.log("success")
    if (r.status === 200) {
      window.localStorage.setItem('login', JSON.stringify(r.data))
   
     setLoadHome(true);
    }
     
  }).catch((e)=>{
     console.log(e)
     setTemp(true)
  })






    /*
    console.log(email, password)
    if (validate()) {
      // post Request
      axios.post('http://localhost:9999/login', {
        email,
        password
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            window.localStorage.setItem('login', JSON.stringify(response.data))
           setTemp(true)
          }
        })
        .catch((error) => {
          console.log(error)
          setLoadHome(true);
         
        })
    }
    */
  }


    return (<>
    
      { temp ? (<Redirect push to="/home"/>) : null }        
     {!loadHome ?    <div style={{ backgroundImage: `url(${back})` }}>   <div id='sign-in' className="outer">
   
        <div><h1>Sign In</h1></div>
        {/* email */}
        <div className="inner">
        <div className='form-field'>
          <th>Email Id*   :-</th> <td><input placeholder="Enter Email Id" type='text' name='email' value={email} onChange={handleOnChange} /></td>
        </div>
        {/* password */}
        <div className='form-field'>
          <th>Password*:</th><td>
          <input placeholder="Enter password" type='password' name='password' value={password} onChange={handleOnChange} /></td>
        </div>
        <div className='form-field'>
          <button className="btn btn-primary" onClick={handleSubmit}>Signin</button>
        </div>
        </div>
        </div>
        </div>
       :null  }

      {loadHome? <Path/> :null }
  
      </>
    )
  }


export default Login;