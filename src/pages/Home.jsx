import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className=' gradient-container grotesk-font'>
        <Navbar />
        <div className=" pt-24">
          <div className=" pt-[8%]">
            <div className="flex justify-center items-center  text-7xl font-bold">
              <p className='text-center bg-gradient-to-b from-black via-slate-500 to-black  bg-clip-text text-transparent'> One stop for all <br /> Airdrop claims</p>
            </div>
            <div className="flex justify-center items-center text-lg">
              <p className=' text-center'>one-stop destination for claiming and participating in airdrops! <br /> Seamlessly claim your rewards and engage with exciting airdrop <br /> opportunities all in one place</p>
            </div>
            <div className=" flex justify-center space-x-6 items-center pt-6">
              <button className=' py-3 px-3 border-2 cursor-pointer font-semibold text-white hover:bg-slate-700'>Create Airdop →</button>
              <button className=' py-3 px-3 border-2 cursor-pointer font-semibold text-white hover:bg-slate-700'>Claim Airdop →</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home