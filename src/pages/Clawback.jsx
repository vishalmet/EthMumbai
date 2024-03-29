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
            <p className=" flex justify-center text-5xl font-bold">Clawback</p>    
        </div> 
    </div>
  );
};

export default CreateAirdrop;
