import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './About'
import Contact from './Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="
        max-w-[2500px] 
        mx-auto ">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  );
}

export default App;
