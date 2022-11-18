import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNavBar from '../HomePageNav/HomeNavBar';
const Login = () => {
        
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");

  //validation messages
  const [nm,setNm]=useState("");
  const [pass,setPass]=useState("");
   const valid=(e)=>{
    if(user=="")
  {
    setNm("Please Enter UserName")
  }
  else
  {
    setNm(" ")
  }
  if(password=="")
  {
    setPass("Please Enter Password")
  }
  else
  {
    setPass(" ")
  }
}
   const Reset=()=>{
    setNm("");
    setPass("");

  }
  return (
    <>
    <HomeNavBar/>
    <div className='bg-light  card m-2'>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className='row m-5' style={{height:"500px",width:"500px"}}>

  <div className='col-12'>
    <div className='card p-3  text-white' >
      <div className='body'>
        <form class="text-success">
       
        <h3 class="text-primary">Login page</h3>
       
        <div className="mb-3">
          <label className='text-dark fs-5'>UserName</label>
          <input type="text" className="form-control" placeholder="UserName" name="name" id="name"
          value={user} onChange={(e)=>setUser(e.target.value)}/><br/>
          <small className='text-danger'>{nm}</small>
        </div>
        
        <div className="mb-3">
          <label className='text-dark fs-5'>Password</label>
          <input type="password" className="form-control" placeholder="Password"
          name="pass" id="pass"value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          <small className='text-danger'>{pass}</small>
        </div>
        <div><Link to='/forgot' className='text-primary' ><strong>Forgot Password</strong></Link></div>
        
        <div className="row">
        <div className="col-4">
        <center>
          <button type="button" class="btn btn-primary  pb-2 btn-sm w-4" onClick={valid}>
            Login
          </button>
          </center>
        </div>
        <div className="col-4">
          <button type="reset" className="btn btn-primary pb-2 btn-sm w-4" onClick={Reset}>
            Reset
          </button>
        </div>
        </div>
        <small className='text-dark fs-6'>don't have an account<Link to='/register' className='text-primary' > <strong>SignUp</strong> </Link></small>
      </form>
    </div>
  </div>
  </div>
</div>

    </div>
    </div>
    </>
  )
}

export default Login