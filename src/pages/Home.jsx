import React from 'react'
import Navbar from '../components/Navbar'
import Select from 'react-select';

const Home = () => {
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
  return (
    <div>
      <Navbar/>
    <div className='flex items-center justify-between p-[50px]  gap-[30px]'>
      <div className="left  mt-3 h-[70vh] w-[50%] bg-[#141319] p-[20px]">
        <h1 className='font-bold text-2xl sp-text'>Ai Component Generator</h1>
        <p className='text-gray-400 py-2'>Describe Your Thought All Will Help..</p>
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
      </div>
      <div className="right mt-3 h-[70vh] w-[50%] bg-[#141319]"></div>
    </div>
    </div>
  )
}

export default Home
