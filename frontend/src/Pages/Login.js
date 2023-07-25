import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link ,useNavigate } from "react-router-dom";



function Login()
{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [info,setinfo]=useState({});
    const [message,setMessage]=useState("");
    let history=useNavigate();

    function handleChange(event)
    {
        if (event.target.name=="email")
        setemail(event.target.value);
        else
        setpassword(event.target.value);

        //console.log(email +"  "+password);
    }

    function handleLogin(){
        
        axios.post("http://localhost:5000/login",{email,password})
        .then (res=>{
            console.log(res) 
            if (res.data.flag==0)
            {
              history(`/home/${res.data.name}`) 
              setMessage("")
            }
            else
            {
               setMessage(res.data.message)       
            }
        
        })
        .catch(err=>console.log(err))
        
    }



    return(
         <>
          <h2>Enter Your Email</h2>
          <input onChange={handleChange} type="text" name ="email"/>
          <br/>   
          <h2>Enter Your Password</h2>
          <input onChange={handleChange} type="text" name="password"/>
          <br />
          <span style={{color:"red"}}>{message}</span>
          <br/>
          <button onClick={handleLogin} >Login</button>
           <Link to="/register">Register</Link>
        </>
    )
}
export default Login;