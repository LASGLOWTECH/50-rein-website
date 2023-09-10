
import { useState } from "react";
import React, { useRef } from 'react';
import  {BiEnvelope}  from "react-icons/bi";
import { BsTelephone,  } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, } from "react-icons/fa"
import { Link } from "react-router-dom";


const Footer = () => {

  const form = useRef();
  const [loading, setIsloading] = useState(false)
  const [result, setResult] = useState("")

  const sendEmail = (e) => {
    console.log(env);
    e.preventDefault();

    setIsloading(true);

    emailjs.sendForm('service_fee58ei', 'template_w36kvl7', form.current, 'bQh5caIlf3NMdx1_0')

      .then((result) => {


        setIsloading(false);
        setTimeout(() => {
          setResult("Succesfully subscribed")


        }, (1000))

      }, (error) => {
        console.log(error.text);
        setTimeout(() => { setResult("Unable to send ") }, 1000);
        setIsloading(false);


      });
    e.target.reset()
    setResult("")
    }




  const today = new Date().getFullYear();
    const [newDay] = useState(today)
  return (

    <div className=" bg-darkBlue py-12 Footer-items">
      <div className="container  px-2 mx-auto">
        <div className="grid  gap-5 grid-cols-1 justify-evenly   md:grid-cols-4">

          <div className="footer-items flex flex-col ">


            {/* <h5 className=' max-w-md text-xl pb-2 text-left text-orangeRed font-bold md:text-xl'>Contact us </h5> */}
            <img src="/50rein.png" alt="vita" className="w-[100px] h-auto " />

              < p className="text-base text-gray-500 py-3">Real Estate icons in Nigeria</p>

            <div className="flex flex-row justify-left items-center pt-3">

              <span className=" rounded-[100%]    me-2 bg-orangeRed  text-white text-2xl">    <GrLocation className=" p-1 text-white " /></span>
              <p className="text-base   text-white ">12 Ben Flo, Orchid Road, Etiosa, Lagos</p>
            </div>

            <div className="flex flex-row justify-start items-center">

              <span className=" rounded-[100%]   my-3 me-2 bg-orangeRed  text-2xl">   < BiEnvelope className="p-1 text-white" /></span>

              <p className="text-base  text-white">info@50rein.com </p>

            </div>


            <div className="flex flex-row  items-center">
            <span className=" rounded-[100%]   my-3  me-2 bg-orangeRed  text-2xl">< BsTelephone className="p-1 text-white" /></span>

            <p className="text-base  text-white"> +234-8100-100-489</p>
</div>


          
          </div>



          {/* second grid */}
          <div className="footer-items 
      w-100 flex justify-left md:ms-10 flex-col ">

            <h4 className='   text-base pb-2  text-left  text-orangeRed font-bold md:text-xl '>Quick Links </h4>
            <p className="text-base  hover:text-orangeRed text-gray-200 py-2"><Link to="/About">About us </Link> </p>
            <p className="text-base hover:text-orangeRed  text-gray-200 py-2"><Link to="/services">Services</Link> </p>
            <p className="text-base  hover:text-orangeRed text-gray-200 py-2"><Link to="/realtors">Iconic Estates</Link> </p>
            <p className="text-base  hover:text-orangeRed text-gray-200 py-2"><Link to="/contact">Team</Link> </p>

          </div>



          <div className="footer-items flex 
  flex-col ">

            <h4 className='   text-base pb-2  text-left  text-orangeRed font-bold md:text-xl '>Pages</h4>
            <p className="text-base  text-left text-gray-200 py-2"><Link to="/faq">FAQ</Link> </p>



          </div>

          <div className="footer-items 
        flex flex-col ">
<h4 className='   text-base pb-2  text-left  text-orangeRed font-bold md:text-xl '>Subscribe to our newsletter</h4>
            
            <p className="text-base text-left text-gray-500 py-3">Get updates from us on our latest evennts</p>
            <form className="form" ref={form} onSubmit={sendEmail}>


            <div className="email-send flex  flex-row justify-betweenitems-center ">
             
                <input type="Email" className="py-1  bg-cyanGreen ps-5 mt-2 w-[300px] h-[40px] text-base text-darkGrey rounded-md " name="user_email" required placeholder="Enter your email"></input>
                <input type="submit" className=" hover:bg-lightBlue hover:text-white font-bold text-base flex place-self-start rounded-md  px-2 py-2 mt-2 mx-2 bg-orangeRed text-white" value="Send" />
              </div>
              {result &&<p className="text-base text-left text-[green] py-3">{result}</p>}

            </form>
            
            
            <div className='Email    flex  justify-start'>

<span className=" rounded-[100%]   my-5 me-2 text-white bg-orangeRed  text-2xl"><a href="https://twitter.com/50rein2023"><BsTwitter className="p-1" /></a></span>
<span className="rounded-[100%] my-5  mx-2  text-white bg-orangeRed  text-2xl"><a href="https://www.facebook.com/50rein"><FaFacebookF className="p-1" /></a></span>
<span className=" rounded-[100%] my-5 mx-2 text-white  bg-orangeRed text-2xl"><a href="https://instagram.com/50rein/"><FaInstagram className="p-1" /></a></span>
<span className=" rounded-[100%] my-5 mx-2 text-white  bg-orangeRed text-2xl"><a href="https://linkedin.com/mwlite/in/nicholason-ugwuanyi-214428153"><BsLinkedin className="p-1" /></a></span>

</div>

          </div>


        </div>

<div className="flex flex-col justify-between row flex-col md:flex-row">
<p className="text-sm text-center md:text-left font-lighter  text-gray-500 py-2"> Copyright &copy; 50 rein  All rights reserved <span className="  text-greyDark">{newDay} </span><br></br> powered by Lasglowtech</p>
 

</div>
             </div>


    </div>

  )
}


export default Footer;