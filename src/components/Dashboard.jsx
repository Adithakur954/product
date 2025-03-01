import { Link } from "react-router-dom";
import { FaTshirt, FaMagic, FaSearch, FaWrench, FaArrowUp,  FaCog } from "react-icons/fa";
import React from 'react';


const products = [
  {
    id: 1,
    name: "Green Shirt Example",
    category: "Men's Clothing",
    type: "Polo Shirt",
    image: "path/to/green-shirt.jpg"
  },
  {
    id: 2,
    name: "Red Sweater Example",
    category: "Women's Clothing",
    type: "Sweater (Pullover)",
    image: "path/to/red-sweater.jpg"
  },
  {
    id: 3,
    name: "Brown Jumper Example",
    category: "Women's Clothing",
    type: "Sweater (Pullover)",
    image: "path/to/brown-jumper.jpg"
  },
];

const Dashboard = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex space-x-6">
        <div className="lg:w-3/45 flex flex-col justify-around "> <div> <div  className="flex flex-col items-center space-y-6">
          <h2 className="text-xl font-bold text-purple-600">P</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center text-purple-600 font-semibold space-x-2">
              <FaTshirt /> <br />
               <Link to="/products">My Products</Link>
            </li>
            <li className="flex items-center text-gray-600 space-x-2">
              <FaMagic /> <br /><span>Fashion Generator</span>
            </li>
            <li className="flex items-center text-gray-600 space-x-2">
              <FaSearch /> <span>SEO Keywords</span>
            </li>
            <li className="flex items-center text-gray-600 space-x-2">
              <FaWrench /> <span>Clean Up</span>
            </li>
            <li className="flex items-center text-gray-600 space-x-2">
              <FaArrowUp /> <span>Upscaler</span>
            </li>
            <li className="flex items-center text-gray-600 space-x-2">
               <span>Remove Background</span>
            </li>
          </ul>
        </div> </div>
<div>
          
          <div className="flex justify-between items-center">
            <FaCog className="text-gray-600" />
            <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full">S</div>
          </div> </div></div>
        <div className="lg:w-40/45"> <div className="mb-5">
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <div className="border-dashed border-2 border-purple-300 p-5 text-center mt-3">
            <p className="text-gray-500">Drag & drop anywhere to add product</p>
            <button className="mt-3 bg-purple-500 text-white py-2 px-4 rounded">
              + Start Uploading
            </button>
          </div>
        </div>

          
          <h2 className="text-xl font-bold mb-3">My Products</h2>
          <p className="text-sm text-gray-500">Monthly Product Limit 0/1</p>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {products.map(product => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-3 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="h-32 w-32 object-cover mb-2" />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-gray-400 text-sm">{product.type}</p>
              </div>
            ))}
          </div></div>
      </div>

    </div>
  );
};



export default Dashboard;
