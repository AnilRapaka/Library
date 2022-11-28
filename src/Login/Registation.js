import React, { useState } from 'react'
//import { MdAppRegistration } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import {useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
  const [name,setName]=useState("");
  const [gender,setGender]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");

  //validation messages
  const [nm,setNm]=useState("");
  const [gen,setGen]=useState("");
  const [eml,setEml]=useState("");
  const [mb,setMb]=useState("");
  const [pass,setPass]=useState("");
  const[msg,setMsg]=useState("");
  const[link,setLink]=useState('');
  const [validEmail,setValidEmail]=useState('true');
  let count=0;
   const valid=(e)=>{
    if(name=="")
  {
    setNm("Please Enter First Name")
  }
  else if(!(/^[a-zA-Z\s]+$/.test(name)))
  { 
    setNm("Name Must be alphabets")
  }
 
   else if(name.length <=2)
  {
    setNm("Name must be More than 2 Characters")
  }
  else
  {
    setNm(" ");
    count++;
  }

if(gender=="")
  {
    setGen("Select Your Gender")
  }
  else{
    setGen(" ")
    count++;
  }
  if(email=="")
  {
    setEml("Please Enter Your Email") 
  }
  else if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)))
  {
    setEml("Invalid Email Id")
  }
  else{
    setEml(" ");
    count++;
  }
  if(mobile=="")
  {
    setMb("Enter Mobile No")
  }
  else if(!(/^[6-9]\d{9}/.test(mobile)))
  { 
    setMb("Enter Valid Mobile No")
  }
  else
  {
    setMb(" ");
    count++;
  }
  if(password=="")
  {
    setPass("Please Enter Password")
  }
  else
  {
    setPass(" ");
    count++;
  }
  if(count==5 && !validEmail){
   Registation();
  }
  else{
    setEml("Email Already Exist");
  }
}

useEffect(()=>{
  setValidEmail(false);
  axios.get(`http://localhost:2520/getDetails/${email}`).then((res)=>{
    console.log(res);
    
    setValidEmail(true);
    console.log(validEmail);
  })
},[email])

  const Registation=()=>{
    axios.post("http://localhost:2520/saveData",{
      email:email,
      name:name,
      phoneNo:mobile,
      password:password,
      gender:gender
    }).then((res)=>{
      
      setLink(<Link to="/login">Login</Link>);
      setMsg("Registatin Successfull Click Here  ");
    //   setTimeout(() => {
    //     setMsg("");
    //  }, 5000);
    },(err)=>{console.log(err)})
  }
   
   const Reset=()=>{
    setNm("");
    setGen("");
    setEml("");
    setMb("");
    setPass("");

    setName('');
    setEmail('');
    setGender('');
    setPassword('');
    setMobile('');
    setMsg("");
  }

  return (
    <>
   <div className='d-flex m-3'>
    <ImBooks className="fs-1 "/>
        <h4><strong>Books Library</strong></h4>
        </div>
    <div >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className='row m-5' style={{height:"400px",width:"500px"}}>

  <div className='col-12'>
    <div className='card bg-light ' >
      <legend className='text-center text-primary'>User Registation</legend>
      <div className='body ' style={{marginLeft:"90px"}}>
      <form >
        <table>
            <tr className="mb-3">
          <td className="text-dark"><label>Name</label></td>
          <td><input type="text" className="form-control mt-3" placeholder="Enter First Name"
         value={name} onChange={(e)=>setName(e.target.value)} /></td>
         </tr>
          <tr>
            <td></td>
          <td><small className='text-danger'>{nm}</small></td>
          </tr>
          <tr>
                    <td className="col-1 text-dark" >Gender</td>
                    <td className='text-dark'> <input type="radio" name="gen" value="Male"
                     onChange={(e)=>setGender(e.target.value)} />Male
                    <input type="radio" name="gen" value="Female"
                   onChange={(e)=>setGender(e.target.value)} />Female</td>
                    
                </tr>
                <tr>
            <td></td>
          <td><small className='text-danger'>{gen}</small></td>
          
          </tr>
            <tr>
          <td className="col-5"><label className='text-dark'>Email</label></td>
         
          <td><input type="email" className="form-control " placeholder="Enter Email"
          value={email} onChange={(e)=>setEmail(e.target.value)}  /></td>
          </tr>
          <tr>
            <td></td>
          <td><small className='text-danger'>{eml}</small></td>
          </tr>
          <tr>
          <td className="col-5"><label className='text-dark'>Mobile</label></td>
          <td><input type="number" className="form-control " placeholder="Enter Mobile Number"
          value={mobile} onChange={(e)=>setMobile(e.target.value)} /></td>
          </tr>
          <tr>
           <td></td>
          <td><small className='text-danger'>{mb}</small></td>
          
          </tr>
            <tr>
          <td className="col-5"><label className='text-dark'>Password</label></td>
          
          <td><input type="password" className="form-control " placeholder="Enter Password"
          value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
          </tr>
          <tr>
            <td></td>
          <td><small className='text-danger'>{pass}</small></td>
          
          </tr>
       
        
        <tr>
          <td colSpan="2" className='text-center'>

         
          <button type="button" class="btn btn-primary  btn-sm m-2" onClick={valid}> Submit</button>
        
          <button type="reset" className="btn btn-primary  btn-sm" onClick={Reset}>Reset</button>
          </td>
        </tr>
       
        
        </table>
      </form> 
      <div className='text-success fs-5 text-center'>{msg} {link}</div>
    </div>
  </div>
  </div>
</div>

    </div>
    </div>
   
    </>
  )
}

export default Register