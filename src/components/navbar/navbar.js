import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/cart">Cart </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/addproducts">Addproducts </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/orders">Orders </Link>
                    </li>
                </ul>
                    {/* <button  className="btn btn-outline-warning my-2 my-sm-0" type="submit">Logout</button> */}
                </div>
            </nav>
        )
    }
}

export default Navbar;