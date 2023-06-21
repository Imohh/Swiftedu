import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
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
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  );
}

export default App;
