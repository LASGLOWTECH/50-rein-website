
import { useState } from "react";
import { RxHamburgerMenu, RxThickArrowDown } from "react-icons/Rx";
import { AiOutlineClose } from "react-icons/Ai"
import { Link } from "react-router-dom";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
const Navbar = () => {


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




      <div className='Nav  w-100v  bg-darkBlue '>
        <div className=" xs:px-4 mx-auto container flex flex-row py-2 justify-between items-center ">
          <div className="navbrand">
            <img src="/50rein.png" alt="vita" className="w-[200px] h-auto " />

          </div>

          <div className="hidden LIinksmd md:flex pt-3 font-medium ms-32" >
            <Link to="/" className="text-base px-4  hover:border-b-2 hover:rounded-l transition border-orangeRed  text-white">Home</Link>
{/* drop items main header */}
            <div className="drophead text-base px-4   relative transition duration-500 ease-out border-orangeRed  text-white " >


              <span className="flex flex-row justify-start cursor items-center"  onClick={openItems}>Who we are

                {!isOpen ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) :
                  (<IoMdArrowDropup className="text-orangeRed text-base" />)
                }</span>

              <div className=" flex flex-col"  >

                {isOpen && (
                  <div className="dropItems  flex flex-col absolute  transition duration-500 ease-out  w-[150px]  mt-6 bg-white"  onClick={openItems}  onMouseLeave={openItems}>
                    <Link to="/About" className="text-base px-6  pt-2  hover:text-orangeRed  text-darkBlue">About us
                    </Link>

                    {/* drop items sumheader */}
                    <span className="flex flex-row px-3 text-darkBlue pt-2 justify-start items-center" onClick={openItems2}  >Our People

                      {!isOpen2 ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) : (<IoMdArrowDropup className="text-orangeRed text-base" />)} </span>

                    {isOpen2 && (
                      <div className=" flex flex-col bg-white">
                        <Link to="/Team" className="text-base px-3  pt-2  hover:text-orangeRed  text-darkBlue">Our Team
                        </Link>
                        < Link to="/About" className="text-base px-3  pt-2  hover:text-orangeRed  text-darkBlue">Testimonials
                        </Link>
                      </div>
                    )}

                  </div>

                )}
              </div>




            </div>




            <Link to="/services" className="text-base px-3   hover:border-b-2 transition  border-orangeRed text-white ">What We Do</Link>




            <div className="drophead text-base px-3   relative transition duration-500 ease-out border-orangeRed  text-white "  >


<span className="flex flex-row justify-start cursor items-center" onClick={openItems3}>Keep Up With Us

  {!isOpen3 ? (<IoMdArrowDropdown className="text-orangeRed text-base" />) :
    (<IoMdArrowDropup className="text-orangeRed text-base" />)
  }</span>

<div className=" flex flex-col h-auto py-2"   >

  {isOpen3 && (
    <div className="dropItems flex flex-col absolute  transition duration-500 ease-out  w-[150px]  mt-6 bg-white" onMouseLeave={openItems3} onClick={openItems3}>
      <Link to="/About" className="text-base px-3  pt-2  hover:text-orangeRed  text-darkBlue">Events
      </Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-darkBlue ">Photo gallery</Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-darkBlue ">Volunteer</Link>
      <Link to="/Team" className="text-base px-3   hover:text-orangeRed transition    text-darkBlue ">Partners</Link>

     

    </div>

  )}
</div>




</div>
            {/* <div className="drophead text-base px-3   relative transition duration-500 ease-out border-orangeRed  text-white "  >

            

</div> */}






          </div>
          <Link to="/contact" className=" hidden text-base px-3 py-2 rounded-md font-bold bg-orangeRed text-white md:flex ">
            <button className=" ">Contact us</button> </Link>

          {/* CONTROLS */}
          {!show && < div className=' flex items-center rounded-sm hover:bg-black hover:text-white w-8 h-8  bg-lightBlue text-light justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg text-white transition duration-500  " onClick={handleShow} /></div>}

          {show && < div className=' flex items-center rounded-sm hover:bg-black hover:text-white w-8 h-8  bg-lightBlue text-light justify-center md:hidden'><AiOutlineClose className="font-bold text-lg text-white transition duration-500  " onClick={handleClose} /></div>}


        </div>

      </div>




      <div className={`hidden  text-white py-2 flex ${toggleI} bg-darkBlue transition  ease-out 5s duration-500  md:hidden    `} onClick={handleClose}>


        <div className="container px-6 mx-auto Navlinks  flex   flex-col space-y-3 text-white justify-between  text-base font-medium md:hidden  ">
          <Link to="/hero" className="text-base   hover:text-orangeRed  text-white"> Home</Link>

          <Link to="/About" className="text-base   hover:text-orangeRed "> About</Link>
          <Link to="/." className="text-base   hover:text-orangeRed  text-white"> Services</Link>

          <Link to="/Team" className="text-base   hover:text-orangeRed "> Team</Link>

          <Link to="/About" className="text-base   hover:text-orangeRed  text-white">estate Icons </Link>
          <Link to="/Gallery" className="text-base  hover:text-orangeRed  text-white"> Gallery</Link>


          <Link to="/contact" className="text-base   hover:text-orangeRed  text-white"> Contact</Link>

        </div>





      </div>






    </>
  )
}


export default Navbar;