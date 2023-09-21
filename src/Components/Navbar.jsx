
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from "react-router-dom";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
const Navbar = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });

}, []);


  const [isOpen3, setisOpen3] = useState(false)
  const [isOpen2, setisOpen2] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  const handleClose = () => {
    setShow(false)
  }


  const openItems3 = () => {
  
    setisOpen3(!isOpen3)
  }



  const openItems2 = (e) => {
    e.stopPropagation()
    setisOpen2(!isOpen2)
  }


  
  const openItems = (event) => {
    event.stopPropagation()

    setisOpen(!isOpen)
  }



  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(show => !show)

  }
  const active = { display: 'flex' }
  

  const toggleI = show ? 'active' : '';
  return (
    <>




      <div className='Nav border border-b-black-200 md:px-20 w-100vh  bg-white ' data-aos="slide-up">
        <div className=" xs:px-4   mx-auto  flex flex-row py-2 justify-between items-center ">
          <div className="navbrand">
            <img src="/50rein.png" alt="vita" className="w-[200px] h-auto " />

          </div>

          <div className="hidden LIinksmd md:flex pt-4 font-medium ms-32" >
            <Link to="/" className="text-base px-4  hover:border-b-2 hover:rounded-l transition text-base  border-orangeRed  text-lightBlue font-bold">Home</Link>
{/* drop items main header */}
            <div className="drophead text-base px-4   relative transition duration-500 ease-out border-orangeRed  text-lightBlue font-bold" >


              <span className="flex flex-row justify-start cursor items-center"  onClick={openItems}>Who we are

                {!isOpen ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) :
                  (<IoMdArrowDropup className="text-orangeRed text-base" />)
                }</span>

              <div className=" flex flex-col"  >

                {isOpen && (
                  <div className="dropItems  flex flex-col absolute  transition duration-500 ease-out  w-[150px]  mt-3 bg-white"  onClick={openItems}  onMouseLeave={openItems}>
                    <Link to="/About" className="text-base px-6  pt-2  hover:text-orangeRed  text-lightBlue font-medium ">About us
                    </Link>
                    <Link to="/ourhistory" className="text-base px-6  pt-2  hover:text-orangeRed  text-lightBlue font-medium ">Our  History
                    </Link>

                    {/* drop items sumheader */}
                    <span className="flex flex-row px-3 text-lightBlue  font-medium pt-2 justify-start items-center" onClick={openItems2}  >Our People

                      {!isOpen2 ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) : (<IoMdArrowDropup className="text-orangeRed text-base" />)} </span>

                    {isOpen2 && (
                      <div className=" flex flex-col bg-white">
                        <Link to="/Team" className="text-base px-3  pt-2  hover:text-orangeRed  text-lightBlue font-medium">Our Team
                        </Link>
                        < Link to="/About" className="text-base px-3  pt-2  hover:text-orangeRed  text-lightBlue font-medium">Testimonials
                        </Link>
                      </div>
                    )}

                  </div>

                )}
              </div>




            </div>




            <Link to="/services" className="text-base px-3   hover:border-b-2 transition  border-orangeRed text-lightBlue  font-bold">What We Do</Link>




            <div className="drophead text-base px-3   relative transition duration-500 ease-out border-orangeRed text-lightBlue   "  >


<span className="flex flex-row justify-start cursor font-bold items-center" onClick={openItems3}>Keep Up With Us

  {!isOpen3 ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) :
    (<IoMdArrowDropup className="text-orangeRed text-base" />)
  }</span>

<div className=" flex flex-col h-auto py-2"   >

  {isOpen3 && (
    <div className="dropItems flex flex-col absolute  transition duration-500 ease-out  w-[150px]  mt-3 bg-white" onMouseLeave={openItems3} onClick={openItems3}>
      <Link to="/realtors" className="text-base px-3  pt-2  hover:text-orangeRed   text-lightBlue">Realtors
      </Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-lightBlue ">Photo gallery</Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-lightBlue ">Volunteer</Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-lightBlue ">Partners</Link>

     

    </div>

  )}
</div>




</div>
            




          </div>
          <Link to="/contact" className=" hidden text-base px-3 py-2 hover:bg-lightBlue rounded-md font-bold bg-orangeRed text-white md:flex ">
            <button className=" ">Contact us</button> </Link>

          {/* CONTROLS */}
          {!show && < div className=' flex items-center rounded-sm hover:bg-lightBlue hover:text-white w-8 h-8 me-3 bg-orangeRed text-light justify-center md:hidden'>< GiHamburgerMenu  className="font-bold text-lg text-white transition duration-500  " onClick={handleShow} /></div>}

          {show && < div className=' flex items-center rounded-sm hover:bg-lightBlue hover:text-white w-8 h-8  mr-3 bg-orangeRed text-light justify-center md:hidden'><AiOutlineClose className="font-bold text-lg text-white transition duration-500  " onClick={handleClose} /></div>}


        </div>

      </div>




{/* responsive class */}

      <div className={`hidden  text-white py-5 flex ${toggleI} bg-darkBlue border-lightBlue border-t-2 w-[100%] h-[auto] transition  ease-in-out delay-200 duration-500  md:hidden    `} onClick={handleClose}>


        <div className="container px-6 mx-auto Navlinks  flex  pt-5 flex-col space-y-3 text-white justify-between  text-base font-medium md:hidden  ">
          <Link to="/" className="text-base   hover:text-orangeRed  text-white"> Home</Link>

          


          <div className="drophead text-base   relative transition-all duration-500 ease-out   text-white " >


<span className="flex flex-row justify-start cursor items-center"  onClick={openItems}>Who we are

  {!isOpen ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) :
    (<IoMdArrowDropup className="text-orangeRed text-base" />)
  }</span>

<div className=" flex flex-col"  >

  {isOpen && (
    <div className="dropItems  flex flex-col   transition duration-500 ease-out  w-[150px]  mt-2 "  onClick={openItems}  onMouseLeave={openItems}>
      <Link to="/About" className="text-base  pt-2  hover:bg-orangeRed  text-white">About us
      </Link>
      <Link to="/ourhistory" className="text-base  pt-2  hover:bg-orangeRed  text-white">Our History
      </Link>

      {/* drop items sumheader */}
      <span className="flex flex-row text-white pt-2 justify-start items-center" onClick={openItems2}  >Our People

        {!isOpen2 ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) : (<IoMdArrowDropup className="text-orangeRed text-base" />)} </span>

      {isOpen2 && (
        <div className=" flex flex-col " onClick={handleClose} >
          <Link to="/Team" className="text-base   pt-2  hover:text-orangeRed  text-white">Our Team
          </Link>
          < Link to="/About" className="text-base  pt-2  hover:text-orangeRed  text-white">Testimonials
          </Link>
        </div>
      )}

    </div>

  )}
</div>




</div>





          <Link to="/services" className="text-base   hover:text-orangeRed  text-white"> What we do</Link>

       

          <Link to="/realtors" className="text-base   hover:text-orangeRed  text-white">Estate Icons </Link>
          <Link to="/team" className="text-base  hover:text-orangeRed  text-white"> Gallery</Link>


          <Link to="/contact" className="text-base   hover:text-orangeRed  text-white"> Contact</Link>

        </div>





      </div>






    </>
  )
}


export default Navbar;