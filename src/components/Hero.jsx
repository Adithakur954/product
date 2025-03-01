import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <section >
      <div className=" m-6 flex justify-around flex-wrap py-16 px-4">
        <div className="lg:w-1/2 pr-4">
          <p className="text-indigo-900 mb-6 font-semibold max-w-max  bg-gradient-to-r from-indigo-200   to-indigo-50 px-2 rounded-full">Deliver your ideas faster</p>

          <div className="text-7xl mb-8 font-bold">Supercharge your productivity with AI image tools</div>
          <div className="text-xl text-gray-500">Say goodbye to tedious and time consuming photo editing tasks and embrace a high-productivity workflow with an AI assisted toolset.</div>
          <Link to="/auth" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-md  font-semibold text-xs">
            TRY IT NOW
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src="https://pincel.app/assets/images/pincel-header-transformed.png" alt="" className="max-w-[500px]"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
