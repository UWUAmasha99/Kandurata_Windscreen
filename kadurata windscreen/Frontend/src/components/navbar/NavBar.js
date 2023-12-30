import React,{useState} from "react";
import "./Navbar.css";
import Logo from "./Img/1.png";
const Navbar =()=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
      <div className="Navbar">
          <span><img src={Logo} alt="Logo" height="80" width="80" /></span>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
            <a href="/contact">Contact</a>
            <a href="/login">Loging</a>
            <a href="/signup">Signup</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
         onClick={()=> setIsOpen(!isOpen)}>
            <div className ="bar"></div>
        </div>
      </div>  
    )
}

export default Navbar;