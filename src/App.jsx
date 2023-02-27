import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-[#ECF2FF] h-screen flex justify-center items-center px-0 sm:px-[10px]">
      <div className="w-[756px] min-h-[512px] rounded-[32px] bg-white flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 bg-gradientStrongBlue rounded-t-none  sm:rounded-[32px] rounded-b-[32px] h-full flex flex-col items-center pt-[38px] px-[54px] pb-[46px] shadow shadow-black">
          <h2 className="text-2xl text-[#CAC9FF] mb-[35px]">Your Result</h2>
          <div className="min-w-[200px] min-h-[200px] bg-gradientBlackBlue rounded-full flex flex-col items-center justify-center">
            <p className="text-[76px] flex-grow-1 leading-[72px] mb-1 font-extrabold text-white">
              76
            </p>
            <p className="text-[#CAC9FF]/50">of 100</p>
          </div>
          <h2 className="text-white text-3xl mt-7 mb-3.5">Great</h2>
          <p className="text-center text-lg text-[#CAC9FF] font-medium">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 px-[40px] pt-[38px] pb-[46px]">
          <h2 className='text-2xl mb-[28px]'>Summary</h2>
          <div className="flex justify-between w-full rounded-[12px] mb-[16px] px-[16px] py-[14px] bg-gradientRed">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#F55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                />
              </svg>
              <span className="text-[#F55] ml-3 text-lg font-medium" >Reaction</span>
            </div>
            <p className="text-[#303B59] text-lg">
              80<span className=" opacity-50"> / 100</span>
            </p>
          </div>
          <div className="flex justify-between w-full rounded-[12px] mb-[16px] px-[16px] py-[14px] bg-gradientYellow">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                />
              </svg>
              <span className="text-[#FFB21E] ml-3 text-lg font-medium">Memory</span>
            </div>
            <p className="text-[#303B59] text-lg">
              92<span className=" opacity-50"> / 100</span>
            </p>
          </div>
          <div className="flex justify-between w-full rounded-[12px] mb-[16px] px-[16px] py-[14px] bg-gradientGreen">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#00BB8F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                />
              </svg>
              <span className="text-[#00BB8F] ml-3 text-lg font-medium">Verbal</span>
            </div>
            <p className="text-[#303B59] text-lg">
              61<span className=" opacity-50"> / 100</span>
            </p>
          </div>
          <div className="flex justify-between w-full rounded-[12px] mb-[41px] px-[16px] py-[14px] bg-gradientBlue">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                />
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                />
              </svg>
              <span className="text-[#1125D6] ml-3 text-lg font-medium">Visual</span>
            </div>
            <p className="text-[#303B59] text-lg">
              73<span className=" opacity-50"> / 100</span>
            </p>
          </div>
          <button className='py-[17px] bg-[#303B59] rounded-[128px] text-white hover:bg-gradientStrongBlue'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
