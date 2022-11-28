import React from "react";
import { Link } from "react-router-dom";
const Rent1=()=>{
    return(
        <>
    <div className=' p-6'>
        
        <div style={{marginLeft:"200px"}} >
    
    <div>
      <div className='p-5 mt-5  text-dark' style={{width:"61rem"}}>
    <div className='row' style={{marginLeft:"4rem"}}>
      <div className='col-6'>
        <div className='card'>
          <div className='body'> 
          <div className='container' >
          <form class="text-success" >
           <div className='row'>
            <h3 class="text-dark"><strong>Rent For  Books</strong></h3>
            </div>
            <div className="mb-3">
              <label className='text-primary'>Name</label>
              <input type="text" className="form-control" placeholder="Enter  Name"/>
            </div>
            
            <div className="mb-3">
              <label className='text-primary'>Book-Name</label>
              <input type="text" className="form-control" placeholder="Enter Book Name"/>
            </div>
    
            <div className="mb-3">
              <label className='text-primary'>Address</label>
              <textarea type="text" className="form-control" placeholder="Your Address"/>
            </div>
            
            <div className="row">
            <div className="col-4">
            <center>
              <button type="button" class="btn btn-primary  pb-2 btn-sm w-4">
                Submit
              </button>
              </center>
            </div>
            <div className="col-4">
              <button type="reset" className="btn btn-primary pb-2 btn-sm w-4">
               Reset
              </button>
            </div>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card'>
          <div className='body'> 
          <div className='container' style={{height:"18rem"}}>
          <form class="text-success mt-5" >
           <div className='row'>
            <h4 class="text-dark"><strong>By E-Commerce Platforms</strong></h4>
            <div className="mb-3">
              <select name="role"  className="form-control">
                <option name="role" value=""  className="form-control mt-3">Send Via</option>
                <option name="role" value="employee"  className="form-control mt-3">
                <Link to='/flip' className='text-warning' >Flipkart</Link>
                </option>
                <option name="role" value="manager"  className="form-control mt-3">
                <Link to='/amzn' className='text-warning' >Amazon</Link>
                </option>
                </select>
            </div>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
        </div>
              
        </div>
        </>
    )
}
export default Rent1;