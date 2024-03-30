import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Airdrop from "../assets/airdrop.png";

const CreateAirdrop = () => {
  const [host, setHost] = useState({
    name: "",
    amount: "",
    claimtime: "",
    number: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className=" gradient-container h-screen grotesk-font">
      <Navbar />
      <div className=" pt-24">
        {/* <p className=" flex justify-center items-center text-3xl lg:text-5xl font-semibold">
          Create an Airdrop
        </p> */}
        <div className=" flex justify-center mx-20 space-x-32 items-center bg-transparent">
          {/* <div className=" flex justify-start">
            <img className=" h-96 w-auto" src={Airdrop} alt="" />
          </div> */}
          <div className=" w-[50%] pt-[4%]">
            <h1 className=" text-xl">
              Admin Name
              <input
                type="text"
                className=" block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-gray-700 focus:outline-none focus:ring-0 peer placeholder-gray-600"
                placeholder="Enter admin name"
                required
                name="name"
                value={host.name}
                onChange={handleChange}
              />
            </h1>
            <h1 className=" text-xl pt-6">
              Amount
              <input
                type="text"
                className="block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-gray-700 focus:outline-none focus:ring-0 peer placeholder-gray-600"
                placeholder="Enter the amount"
                name="amount"
                value={host.amount}
                onChange={handleChange}
              />
            </h1>
            <h1 className="text-xl pt-6">
              Claim time
              <input
                type="time"
                className="block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-gray-700 focus:outline-none focus:ring-0 peer placeholder-gray-600"
                placeholder="Claim period"
                name="claimtime"
                value={host.claimtime}
                onChange={handleChange}
              />
            </h1>
            <h1 className=" text-xl pt-6">
              Total drops
              <input
                type="number"
                className="block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-gray-700 focus:outline-none focus:ring-0 peer placeholder-gray-600"
                placeholder="Enter the number of drops"
                name="number"
                value={host.number}
                onChange={handleChange}
              />
            </h1>
           
            {/* <h1 className=" text-xl pt-6 pb-6 ">
              Time
              <input
                type="number"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-gray-700 focus:outline-none focus:ring-0 peer placeholder-gray-600"
                placeholder="time"
                name="time"
                value={host.time}
                onChange={handleChange}
              />
            </h1> */}
            <div className=" flex justify-center space-x-6 items-center pt-6">
              <a href='/create' className=' py-3 px-3 border-2 cursor-pointer font-semibold text-white hover:bg-slate-700'>Create →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAirdrop;