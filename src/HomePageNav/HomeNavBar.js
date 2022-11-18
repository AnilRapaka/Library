import React from "react";
import { ImBooks } from 'react-icons/im';
import { Link } from "react-router-dom";
const HomeNavBar=()=>{
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
                    <Link to="/" class="nav-link text-primary" ><strong>Home</strong></Link>
                <Link to="/our_books" class="nav-item nav-link text-primary"><strong>Our Books</strong></Link>
                <Link to="/about" class="nav-item nav-link text-primary"><strong>AboutUs</strong></Link>
                <Link to="/rent" class="nav-item nav-link text-primary"><strong>RentForBook</strong></Link>
                <Link to="/login" class="nav-item nav-link text-primary" ><strong>Login</strong></Link>
            </div>
        </div>
    </div>
</nav>
        </>
    )

}
export default HomeNavBar;