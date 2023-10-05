// import { useState } from 'react'
import { useState, useEffect } from 'react';
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/hero';
import Realtors from './Components/realtors';
import Footer from './Components/footer';
import Services from './Components/services';
import Team from './Components/Team';
import About from './Components/About';
import Contact from './Components/contact';
import Faq from './Components/faq';
import Failurepage from './Components/failure';
import { Routes, Route } from "react-router-dom"
import Ourstory from './Components/ourhistory';
import ScrollTop from './Components/scroll';

function App() {
 
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);



    
  }, [])
    
  return (
    <div className="App  ">

{loading ? <div className='load bg-gradient-to-r from-blue-50 to-white
    flex  flex-col justify-center items-center h-[100vh] '
       >

        <img src='/50logo.png' className="load-img animate-pulse w-[400px]" alt='hem' ></img>

        </div> :
<>
      <Navbar/>
     
   <Routes>

   <Route path='/' element={<Home />} />
  
      <Route path='/About' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/team' element={<Team />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/realtors' element={<Realtors />} />
      <Route path='/ourhistory' element={<Ourstory />} />
      <Route path='/*' element={<Failurepage  />} />
      
   </Routes> 
<ScrollTop/>
   <Footer /></>
  }
  </div>
  )
}

export default App;
