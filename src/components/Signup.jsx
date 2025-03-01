import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    localStorage.setItem("user", JSON.stringify(signup));

    console.log("Signup Data Saved:", signup);
    
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2 className="text-3xl font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="w-80">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" className="border p-2 rounded w-full my-2" required />

        <label>Email Address:</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Enter your email" className="border p-2 rounded w-full my-2" required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" className="border p-2 rounded w-full my-2" required />

        <button type="submit" className="bg-black text-white p-2 rounded w-full my-2">SIGN UP</button>
      </form>

      <p>Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  );
}

export default Signup;
