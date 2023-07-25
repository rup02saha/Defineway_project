import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register()
{
    const[name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");
    const[message,setmessage]=useState("");
    let history=useNavigate();

    function handleChange(event)
    {
        if (event.target.name=="email")
        setemail(event.target.value);
        else if(event.target.name=="password")
        setpassword(event.target.value);
        else if(event.target.name=="name")
        setname(event.target.value);
        else
        setconfirmpassword(event.target.value);

        
    }

    function handleRegister(){
        
        if(password!=confirmpassword)
        setmessage("Password does'nt match!");
        else
        {
          axios.post("http://localhost:5000/register",{name,email,password})
          .then(result =>{ 
            console.log(result)
            history('/');
        })
          .catch(err=>console.log(err))
        }
        
        
    }



    return(
        <>
         <h2>Enter your name</h2>
         <input onChange={handleChange} type="text" name="name"></input>
         <br />
          <h2>Enter Your Email</h2>
          <input onChange={handleChange} type="text" name ="email"/>
          <br/>   
          <h2>Enter Your Password</h2>
          <input onChange={handleChange} type="text" name="password"/>
          <br />
          <h2>Confirm Password</h2>
          <input onChange={handleChange} type="text" name="confirm-password"/>
          <br/>
          <br/>
          <h4 style={{color:"red"}}>{message}</h4>

          <button onClick={handleRegister} >Register</button>
          <Link to='/'>Login</Link>

        </>
    )
}

export default Register;