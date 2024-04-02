import React from "react";
import {useState} from "react";
import axios from "axios";
// //materialUI
// import { Button , TextField } from '@mui/material';

function Login() {

    const [username , setusername] = useState('');
    const [password , setpassword] = useState('');

    const handleusername = (e) =>{
      setusername(e.target.value)
    }
    const handlepassword = (e) => {
      setpassword(e.target.value)}
          
    const handleapi = async (e) => {
      e.preventDefault();
      
      try{
         const response = await axios.post('http://127.0.0.1:8000/bookreview/user/' ,{
          username,password,
         } );
      // console.log(response.data.)
      const accesstoken = response.data.access;
    //   const decode = jwtDecode(accesstoken)
    //   console.log('deccoded token=',decode)
    //   console.log('loginsuccessful ', response.data)
       }catch (error) {
        console.error("login failed ",error.response.data)
        alert(error.response.data.detail)
       }
    }
    return(
        <>

   
    <h1>Login</h1>
     <h2>Premium Service</h2>
    <form onSubmit={handleapi} >
    <label>    
    Username 
    {/* <TextField id="standard-basic" label="Username" variant="standard" type="text" name='usernama' value={username} onChange={handleusername} required/>    */}
    <input type="text" name='usernama' value={username} onChange={handleusername} required/>
    </label>
    <lable>
    Password
    {/* <TextField id="standard-basic" label="Password" variant="standard" type='password' name='password' value={password} onChange={handlepassword} required/> */}
     <input type='text' name='password' value={password} onChange={handlepassword} required/><br></br>
    </lable>
    
    
    <button type='submit'>Submit</button>
    </form>
    <h6>Please Login Using Django.<a href='www.ATOz.com'>CLICK</a></h6>
    </>
    );
}
export default Login;