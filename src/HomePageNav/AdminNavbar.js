import React from "react";
import { ImBooks } from 'react-icons/im';
import { Link } from "react-router-dom";
import{CgProfile} from 'react-icons/cg';
const AdminNavBar=()=>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <ImBooks className="fs-1"/>
        <h4><strong>Books Library</strong></h4>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
            </div>
            <div class="navbar-nav ms-auto">
                    <Link to="/admin" class="nav-link text-primary" ><strong>Home</strong></Link>
                <Link to="/adminbooks" class="nav-item nav-link text-primary"><strong>Books</strong></Link>
                <Link to="/add_books" class="nav-item nav-link text-primary"><strong>AddBooks</strong></Link>
                <Link to="/actions" class="nav-item nav-link text-primary"><strong>Update/Remove_Book</strong></Link>
                <strong className="fs-4 mt-0 text-danger"><CgProfile/>{sessionStorage.getItem("name")} </strong>
                <Link to="/" class="nav-item nav-link text-primary" ><strong>Logout</strong></Link>
            </div>
        </div>
    </div>
</nav>
        </>
    )

}
export default AdminNavBar;