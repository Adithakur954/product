import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    
    if (loginData.email === storedUser.email && loginData.password === storedUser.password) {
      console.log("Login successful!");
      setError(""); 
      alert("Login Successful!");

     
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2 className="text-3xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="w-80">
        <label>Email Address:</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Enter your email" className="border p-2 rounded w-full my-2" required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" className="border p-2 rounded w-full my-2" required />

        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Show error if login fails */}

        <button type="submit" className="bg-black text-white p-2 rounded w-full my-2">LOGIN</button>
      </form>

      <p>Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
    </div>
  );
}

export default Login;
