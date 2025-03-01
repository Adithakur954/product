import Navbar from "../components/Navbar";

import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mx-auto text-center py-16">
        <div className="lg:w-1/2 flex justify-center"> <img src="https://pideaky.com/wp-content/uploads/2024/05/pagaky-beneficio-garantia2.png" alt="" /></div>
        <div className="lg:w-1/2 text-left"><h1 className="text-5xl font-medium mb-10">Ready When You Are</h1>
        <p className="text-2xl font-normal">Jump right in and start exploring. Whether you're <br />  here to create,  manage, or discover, our app is ready<br />  to go whenever you are!</p></div>
      </div>
      <div className="flex justify-evenly bg-purple-600 mx-30 my-4 rounded-3xl  text-center py-16">
        <p className="font-bold text-white bg-purple-800 px-2 rounded-full">P</p>
        <ul className="flex justify-between space-x-6" >
          <li>Pricing</li>
          <li>How it works</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Affiliates</li>
          <li>Login/Signup</li>
        </ul>
        <div className="flex justify-between space-x-4">
          <p className="bg-white p-2 rounded-[3px]"> Book 1:1  Demo</p>
          <p className="bg-black text-white rounded-[3px] px-3 py-2"> Get started</p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
