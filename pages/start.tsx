// pages/start.tsx
import Head from 'next/head';
import { TbCirclePercentage } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { TbHomeDollar } from "react-icons/tb";
import { TbHomeEco } from "react-icons/tb";
import { TbCash } from "react-icons/tb";

export default function Start() {
  return (
    <div>
      <Head>
        <title>Start - Better.com</title>
      </Head>
      <div>
      <h1 className="text-6xl font-bold mb-4 text-center">Hi, I'm Betty!
        <br/>
        What can I help you with?
      </h1>
    </div>
    <div className='bg-green-50'>
      <div className=" flex items-center justify-center text-center hover:text-green-900 w-full py-3 bg-white hover:bg-green-300 text-gray-700 font-semibold  border-solid border-2 border-green-900  rounded-md"> <TbHomeDollar className='text-3xl'/>
      <span> Buying a home</span>
      </div>
     < br/>
      <div className="flex items-center justify-center text-center hover:text-green-900 w-full py-3 bg-white hover:bg-green-300 text-gray-700 font-semibold  border-solid border-2 border-green-900  rounded-md"><TbHomeEco className='text-3xl' />
        <span>Refinance my mortgage</span>
      </div>
      <br />
      <div className=" flex items-center justify-center text-center hover:text-green-900 w-full py-3 bg-white hover:bg-green-300 text-gray-700 font-semibold  border-solid border-2 border-green-900  rounded-md"><TbCash className='text-3xl'/>
        <span>Get cash from my home</span>
      </div>
    </div>
    <br />
    <div>
      <h3 className='text-center text-gray-700 bg-green-50'>After a few questions, you'll unlock:</h3>

     <div className='flex items-center justify-center text-center text-gray-700'>
     <TbCirclePercentage  className='text-green-900 text-xl mr-2'/>
     <span >Custom mortgage rates</span>
      </div>
      <div className='flex items-center justify-center text-center text-gray-700'>
     <CiDollar  className='text-green-900 text-xl mr-2'/>
     <span >Exclusive offers</span>
      </div>
      <div className='flex items-center justify-center text-center text-gray-700'>
     <FaMobileAlt  className='text-green-900 text-xl mr-2'/>
     <span >A personalized dashboard</span>
      </div>
    </div>
    </div>
  );
}
