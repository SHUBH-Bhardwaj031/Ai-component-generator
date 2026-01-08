import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Select from 'react-select';
import { BsStars } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import Editor from '@monaco-editor/react';
import { FiDownload } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { PiBracketsAngleBold } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";
import { GoogleGenAI } from "@google/genai";


const Home = () => {
  const options = [
    { value: 'html-css', label: 'HTML+CSS' },
    { value: 'html-tailwind', label: 'HTML+Tailwind CSS' },
    { value: 'html-bootstrap', label: 'HTML+Bootstrap' },
  ];

  const [outputScreen, SetOutputScreen] = useState(true)
  const [tab,SetTab]=useState(1)

  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:"AIzaSyDw1z0iP4JooABm3scYpeCWH9I4sir0yBY" });

async function getResponse() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-between p-[50px]  gap-[30px]'>
        {/* Left */}
        <div className="left mt-1 h-[auto] py-[20px] rounded-xl w-[50%] bg-[#141319] p-[20px]">
          <h1 className='font-bold text-2xl sp-text'>Ai Component Generator</h1>
          <p className='text-gray-400 py-2'>Describe Your Thought All Will Help..</p>
          <p className='mb-2 font-bold'>Framework</p>
          <Select
            options={options}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#6b7280",     // focus (gray)
                primary25: "#374151",  // hover (dark gray)
                neutral0: "#1f2937",   // background
                neutral80: "#e5e7eb",  // text
                neutral20: "#4b5563",  // border
              },
            })}
          />
          <textarea className='w-[100%] mt-5 bg-[#0b0b12] rounded-2xl p-3 min-h-50' name="" id="" placeholder='Write Your Query Here...'></textarea>
          <button onClick={getResponse} className="flex items-center mt-5 ml-auto bg-gradient-to-r from-violet-700 to-fuchsia-700 p-4 rounded-xl gap-1 cursor-pointer transition-all hover:opacity-[.8]"><i><BsStars /></i>Generate</button>
        </div>
        {/* Right Side */}
        <div className="right mt-1 h-[70vh] w-[50%] bg-[#141319] rounded-xl">
          {
            outputScreen === false ?
              <>
                <div className="skelton flex flex-col w-full h-full  items-center justify-center ">
                  <div className="circle w-[70px] h-[70px] text-[30px]  flex items-center justify-center bg-gradient-to-r from-violet-700 to-fuchsia-700  rounded-[50%]"><HiCode /></div>
                  <p className='mt-3 text-[gray]'>your code & components will appear here...</p>
                </div>
              </> :
              <>
                <div className="top h-[60px] flex items-center justify-between ">
                  <button onClick={()=>{SetTab(1)}} className={`btn w-full rounded-xl flex items-center justify-center gap-2 cursor-pointer p-3 transition-all ${tab===1 ? "bg-gradient-to-r from-[#0f172a]  to-[#334155]" : ""}`}><PiBracketsAngleBold /> code</button>
                  <button onClick={()=>{SetTab(2)}} className={`btn w-full flex justify-center items-center gap-2 rounded-xl cursor-pointer p-3 transition-all ${tab===2 ? "bg-gradient-to-r from-[#0f172a]  to-[#334155]" : ""}`}> <i><FiEye /></i>Live preview</button>
                </div>
                <div className='m-2 flex justify-between items-center'>
                 <p className=' p-3'>Code Editor</p>
               <div className='flex gap-4 items-center'>
                {
                  tab===1 ?
                  <>
                            <button className="btn p-2 flex gap-2 rounded-xl items-center bg-blue-950 cursor-pointer transition-all hover:opacity-[0.8]"><i><MdContentCopy /></i></button>
                 <button className="btn p-2 flex gap-2 rounded-xl items-center bg-blue-950 cursor-pointer transition-all hover:opacity-[0.8]"><i><FiDownload /></i></button>
                 
                  </> :
                  <>
                   <button className="btn p-2 flex gap-2 rounded-xl items-center bg-blue-950 cursor-pointer transition-all hover:opacity-[0.8]"><i><ImNewTab /></i></button>
                 <button className="btn p-2 flex gap-2 rounded-xl items-center bg-blue-950 cursor-pointer transition-all hover:opacity-[0.8]"><i><HiOutlineRefresh /></i></button>
                  </>
                }

               </div>

                </div>
              {
                tab===1 ?
                <>
                 <Editor height="75%" theme='vs-dark' defaultLanguage="html" defaultValue="" />
                 </> :
                 <>
                 <div className=" preview  h-[75%] text-black bg-gray-400"></div>
                 </>
              }
               
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Home
