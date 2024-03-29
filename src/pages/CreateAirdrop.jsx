import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Airdrop from "../assets/airdrop.png";

const CreateAirdrop = () => {
  const [host, setHost] = useState({
    name: "",
    location: "",
    totaltickets: "",
    price: "",
    date: "",
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
        <div className=" flex justify-center mx-20 space-x-32 items-center">
          <div className=" flex justify-start">
            <img className=" h-96 w-auto" src={Airdrop} alt="" />
          </div>
          <div className=" w-[50%]">
            <h1 className=" text-xl">
              Event Name
              <input
                type="text"
                className=" block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                placeholder="event name"
                required
                name="name"
                value={host.name}
                onChange={handleChange}
              />
            </h1>
            <h1 className=" text-xl pt-6">
              Venue
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                placeholder="location"
                name="location"
                value={host.location}
                onChange={handleChange}
              />
            </h1>
            <h1 className="text-xl pt-6">
              Number of tickets
              <input
                type="number"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                placeholder="total tickets"
                name="totaltickets"
                value={host.totaltickets}
                onChange={handleChange}
              />
            </h1>
            <h1 className=" text-xl pt-6">
              Price per ticket
              <input
                type="number"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                placeholder="price"
                name="price"
                value={host.price}
                onChange={handleChange}
              />
            </h1>
            <div className=" space-x-6 pt-6">
              <h1 className=" text-2xl ">
                Date
                <input
                  type="number"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                  placeholder="date"
                  name="date"
                  value={host.date}
                  onChange={handleChange}
                />
              </h1>
            </div>
            <h1 className=" text-xl pt-6 pb-6 ">
              Time
              <input
                type="number"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-gray-500"
                placeholder="time"
                name="time"
                value={host.time}
                onChange={handleChange}
              />
            </h1>
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