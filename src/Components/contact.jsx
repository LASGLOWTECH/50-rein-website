
import { useState } from "react";

import emailjs from '@emailjs/browser'

import React, { useRef } from 'react';
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

import { MdLocationOn } from "react-icons/md";
;


const Contact = () => {



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
          setResult("Thanks for Contacting us, message successfully se")


        }, (1000))

      }, (error) => {
        console.log(error.text);
        setTimeout(() => { setResult("Unable to send ") }, 1000);
        setIsloading(false);


      });

    e.target.reset()
    setResult("")
  };


  return (
    <div className="Contact-Hero  ">
      <div className=" container py-5 px-6 bg- mx-auto ">

        <div className="flex pt-8 flex-row items-center justify-center ">

          <div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
          <h3 className="text-2xl font-bold text-darkBlue ">GET IN <span className="text-orangeRed" >TOUCH</span></h3>
          <div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

        </div>
        <p className="py-3 text-greyBlack   text-base text-center">Contact us for more info and  services </p>


        <div className="grid grid-cols-1 md:grid-cols-2 p-6 bg-cyanGreen ">

          <div className=" bg-white shadow-lg   my-5 ">
            <img src="/emailer.jpg" alt="vita" className="w-full h-auto " />





          </div>

          <div className="form">

            <form className="  my-5 flex flex-col px-3 bg-darkBlue shadow-3xl " ref={form} onSubmit={sendEmail}>
              < h3 className=" font-bold  text-xl pt-5 text-white ">Enter your details here</h3>

              <p className=" text-base text-green-500 ps-5 py-2 text-gray-500">{result} </p>


              <div className="email-send flex flex-col ">
                <label className="pt-4 text-white  font-med " for="text">Name</label>
                <input type="text" className="ps-5 text-darkGrey  bg-cyanGreen shadow-md py-3 mt-2 w-full text-base  rounded-lg " name="user_name" placeholder="Your Name"></input>

              </div>


              <div className="email-send flex  flex-col ">
                <label className="pt-3  text-white font-med  " for="text">Email</label>
                <input type="Email" className="py-2  bg-cyanGreen ps-5 mt-2 w-full text-base text-darkGrey rounded-lg " name="user_email" required placeholder="Enteryour email"></input>

              </div>


              <div className="email-send flex flex-col ">
                <label className="pt-3 pb-2  text-white font-med  " for="text">Message</label>
                <textarea className="w-full h-[200px] bg-cyanGreen rounded-lg  text-darkGrey ps-5 py-5  shadow-md text-base" name="message" placeholder="Message" cols="6"
                  rows="3"></textarea>
              </div>


              <div className="email-send flex flex-col ">

                {!loading && <input type="submit" className=" hover:bg-lightBlue hover:text-white font-bold text-base flex place-self-start rounded-md  px-5 py-2 my-3 bg-orangeRed text-white" value="Send" />}
                {loading && <input type="submit" className="text-base flex place-self-start rounded-md px-5 py-2  my-3 bg-yellow-400" disabled value="Sending" />}
              </div>
                      {result &&<p className="text-base text-left text-[green] py-3">{result}</p>}

            </form>



          </div>

        </div>

        <div className="contact-sec justify-evenly flex-col   flex md:flex-row mt-5 pt-4 mx-2">


          <div className="item-1  pt-5 flex justify-start pe-3">
            <div className="ico-items bg-orangeRed mt-2 flex w-[30px] h-[30px] rounded-full items-center justify-center px-2 ">
              < MdLocationOn className="text-white stroke-white" />

            </div>

            <div className="item-info ps-3">
              <h4 className="pt-1 font-bold text-darkBlue">Address</h4>
              <p className="py-1  max-w-md text-darkBlue">12 Ben Flo, Orchid Road, Etiosa, Lagos</p>
            </div>
          </div>






          <div className="item-1 pt-5 flex justify-start pe-3">
            <div className="ico-items bg-orangeRed mt-2 flex items-center justify-center w-[30px] h-[30px] rounded-[50%]"  >
              < BiSolidEnvelope  className="text-white" />
            </div>


            <div className="item-info ps-3">
              <h4 className="pt-1  font-bold text-darkBlue">Email</h4>
              <p className=" text-greyBlack">info@50rein.com</p>
            </div>
          </div>


          <div className="item-1 pt-5  flex justify-start pe-2">
            <div className="ico-items bg-orangeRed mt-2 flex items-center justify-center w-[30px] h-[30px] rounded-[50%]" >
              <BiSolidPhoneCall className="text-white" />

            </div>

            <div className="item-info ">
              <h4 className="pt-1 font-bold ps-3 text-darkBlue">Phone</h4>
              <p className=" text-darkBlue">+234-8100-100-489</p>
            </div>
          </div>


        </div>

      </div >

    </div >
  );
};
export default Contact;