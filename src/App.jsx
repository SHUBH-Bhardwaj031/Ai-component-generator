import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Nopage from "./pages/Nopage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
