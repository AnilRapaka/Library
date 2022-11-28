import React from "react";
import AdminNavBar from "../HomePageNav/AdminNavbar";
import { useState } from "react";
import axios from "axios";
const AddBooks=()=>{
  const[bookName,setBookName]=useState('');
  const[author,setAuthor]=useState('');
const[image,setImage]=useState([]);


// const [data,setData]=useState([{
//   bookName:"",
//   author:"",
//   image:""
// }]);

const Submit=()=>{
//   const date=Date.now();
// console.log("date is ",new Date());
  axios.post("http://localhost:2520/saveBooks",{
    bookName:bookName,
    author:author,
    image:image

  }).then((res)=>{
    alert("success");
    console.log(res)},
  (err)=>{
    // alert("fail");
    console.log(err)})
}
console.log(image);
    return(
    <>
    <AdminNavBar/>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className='row m-5' style={{height:"400px",width:"500px"}}>

  <div className='col-10'>
    <div className='card p-3 bg-light ' >
      <div className='body ' style={{marginLeft:"10px"}}>
      <form enctype="multipart/form-data" method="post">
        <div>
        <label>Book Name</label>
        <input type="text" className="form-control mt-2" placeholder="Enter Book Name" value={bookName}
        onChange={(e)=>setBookName(e.target.value)}/>
        </div>
        <div>
        <label>Authour Name</label>
        <input type="text" className="form-control mt-2" placeholder="Enter Authour Name" value={author}
       onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div>
        <label>Upload Book</label>
        <input type="file" className="form-control mt-2" value={image} onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <div className='row mt-2'>
        <div className="col-5">
          <button type="button" class="btn btn-primary pb-2 btn-sm " onClick={Submit}> Submit</button>
        </div>
        <div className="col-5">
          <button type="reset" className="btn btn-primary pb-2 btn-sm">Reset</button>
        </div>
        </div>
      </form> 
    </div>
  </div>
  </div>
</div>

    </div>
    </>)
}
export default AddBooks;