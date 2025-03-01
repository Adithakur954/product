import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" h-16 p-6 mb-14 ">
      <div className="flex justify-between">
       <div className="flex ">
        <img src="https://pincel.app/assets/images/logo.svg" alt=""  className="max-h-14 mr-14 "/>
        <div className="flex space-x-8 align-bottom pt-3 font-medium  text-[18px]">
        <Link to="/" className="hover:cursor-pointer">Home</Link>
        <Link to="/about" className="hover:cursor-pointer">About</Link> 
        <Link to=" " className="hover:cursor-pointer">Explore</Link>
        <Link to=" " className="hover:cursor-pointer">Tools</Link>
        <Link to=" " className="hover:cursor-pointer">Pricing</Link>
        <Link to=" " className="hover:cursor-pointer">Contact</Link>
        
        </div>
        </div>
        <div className="space-x-4">
          
          <Link to="/login" className=" text-black-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200">
            Login
          </Link>
          <Link to="/Signup" className="border-2 font-bold text-black-600 px-4 py-2 rounded-md hover:bg-gray-200">
            Signup
            </Link> 
        </div> {/*app jsx mein shi karo routes*/}
      </div>
    </nav>
  );
};

export default Navbar;
