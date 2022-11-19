import React, { useState } from 'react'
import HomeNavBar from '../HomePageNav/HomeNavBar';
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
   const valid=(e)=>{
    if(name=="")
  {
    setNm("Please Enter First Name")
  }
  else if(!(/^[a-zA-Z]+$/.test(name)))
  { 
    setNm("Name Must be alphabets")
  }
  else
  {
   if(name.length <=2)
  {
    setNm("Name must be More than 2 Characters")
  }
  else
  {
    setNm(" ")
  }
}
if(gender=="")
  {
    setGen("Select Your Gender")
  }
  else{
    setGen(" ")
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
    setEml(" ")
  }
  if(mobile=="")
  {
    setMb("Please Enter First Name")
  }
  else if(mobile.length<=9)
  { 
    setMb("Number should be 10 digits")
  }
  else
  {
    setMb(" ")
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
    setGen("");
    setEml("");
    setMb("");
    setPass("");

  }

  return (
    <>
    <HomeNavBar/>
    <div >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className='row m-5' style={{height:"400px",width:"500px"}}>

  <div className='col-12'>
    <div className='card p-3 bg-light ' >
      <div className='body ' style={{marginLeft:"90px"}}>
      <form >
        <table>
         
       
        <h3 class="text-primary">Registration page</h3>
        
        <div className="">
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
            <td></td>
          </tr>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
        
            <tr>
          <td className="col-5"><label className='text-dark'>Email</label></td>
         
          <td><input type="email" className="form-control " placeholder="Enter Email"
          value={email} onChange={(e)=>setEmail(e.target.value)}  /></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          <td><small className='text-danger'>{eml}</small></td>
          
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
          <td className="col-5"><label className='text-dark'>Mobile</label></td>
         
          <td><input type="number" className="form-control " placeholder="Enter Mobile Number"
          value={mobile} onChange={(e)=>setMobile(e.target.value)} /></td>
          </tr>
          <tr>
           
          <td><small className='text-danger'>{mb}</small></td>
          
          </tr>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
            <tr>
            <td></td>
          </tr>
        </div>
        <div className="row">
        <div className="col-5">
          <button type="button" class="btn btn-primary pb-2 btn-sm" onClick={valid}> Submit</button>
        </div>
        <div className="col-5">
          <button type="reset" className="btn btn-primary pb-2 btn-sm" onClick={Reset}>Cancel</button>
        </div>
        </div>
        </table>
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

export default Register