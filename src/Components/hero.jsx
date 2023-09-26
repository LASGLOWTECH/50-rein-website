
import { Link } from "react-router-dom";
import Carouselitem from "./carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./faq";

import { Button, Flowbite } from "flowbite-react";
const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <>



      <div className="  pb-8 pt-6  md:pt-10 h-auto w-100 ">



        <div className="  container py-6 mx-auto flex flex-row   justify-center items-center">
          <div className="left px-4 py-6  max-width-medium  " data-aos="slide-right">

            <h1 className="text-darkBlue text-center  text-5xl  leading-12 md:text-left pt-5 text-5xl md:text-[80px]  font-bold">A Compedium of<span className="text-orangeRed"> Excellence</span>
            </h1>
            <p className="text-[18px]  text-center md:text-left font-normal text-grey-500 pt-6 leading-loose  md:max-w-xl  pb-10">
              50 REIN is curating an anthology of greatness in a compedium. A compedium where the journeys of Nigerian Real Estate Icons can be explored, their challenges understood, and their triumphs celebrated.
            </p>

            <Link to="/About" className="  mx-[30%] md:mx-[0] text-xl 
       px-4 py-3 mt-10 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
              <button className=" text-xl">Learn more</button> </Link>



          </div>





        </div>


        <div className="md:absolute flex items-center top-[100%] md:top-[20%] left-[60%]" >

          <img className="  md:w-[600px]" src="/hand.png"></img>
        </div>
      </div>






      <section className=" container mt-20  mx-auto ">



        <h3 className="text-darkBlue text-3xl text-center ">Who we are</h3>


        <div className="border-2 mt-2  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>
        <h3 className="text-darkBlue pt-10 place-item-center   px-3 text-center font-medium text-5xl">An Ideation </h3>


        <div className=" grid md:mt-10 gap-3 grid-cols-1    md:grid-cols-2 ">


          <div className="   rounded-md " data-aos="zoom-in-up">
            <div className="left px-2 pb-2  ">


              <p className="text-[18px] text-center md:text-left leading-loose text-greyBlack   text-truncate font-md md:mt-20 pt-6 pb-10 leading-8">
                50 REIN is an ideation with it’s core values and mandate encompass in amplifying the
                real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
                integrity, consistency, morals and delivery of values.  </p>

              <Link to="/About" className=" mt-4 text-xl ml-[30%] md:mx-[0] 
 px-4 py-3 mt-10 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link>

            </div>


          </div>




          <div className=" mt-4 md:mt-10  bg-blue-50  rounded-tl-[100px]  rounded-br-[100px]" data-aos="zoom-in-up">
            <img src="/homeabout.png" alt="vita" className="   h-auto " />




          </div>





          {/* 
<div className="">
<h3 className="text-darkBlue text-3xl text-center ">Who we are</h3>


<div className="border-2 mt-2  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>



<div className=" md:mt-20  bg-blue-50  rounded-tl-[100px]  rounded-br-[100px]" data-aos="zoom-in-up">
            <img src="/ourservices.jpg" alt="vita" className="  pl-6 h-auto " />




          </div>
         


          <div className=" bg-white mt-2 md:mt-20 " data-aos="slide-up">


            
            <div className="left px-4  md:py-12 ">

              
              <p className="text-[18px] max-w-4xl text-greyBlack   font-md py-6 ">
                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/services" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>



</div>
 */}









        </div>


      </section>




      <h3 className="className=text-darkBlue text-3xl pt-20 text-center">What We Do</h3>
      <div className="border-2 mt-1 border-orangeRed   mx-auto rounded-md w-[100px] "></div>

      <h3 className="text-darkBlue pt-16 place-item-center   px-3 text-center font-medium text-5xl">A Strive to Inspire Future Leaders</h3>









      <section className=" bg-gradient-to-r from-blue-50  to-white-40 mt-10  rounded-tr-[300px]">

        <div className="container mx-auto">

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  pt-6  " data-aos="zoom-in-up">



            <div className="left px-4 py-10 -50 rounded-tl-[50px]  bg-yellow-50  md:-mt-[0px]  rounded-circle ">



              <p className="text-[18px]   leading-loose text-greyBlack   text-truncate font-md  pb-8 md: pt-10 leading-8 ">
              Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  

              </p>


              <div>            <Link to="/services" className=" text-xl
 px-4 py-3 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>

            <div className=" " data-aos="fade-in">
            <img src="/homeserv.png" alt="vita" className="w-full  md:w-[600px] border-bl-blue   rounded-br-[30px] h-auto " />


          </div>



          </div>






        </div>











      </section>












      <h3 className="text-darkBlue text-3xl pt-20 text-center">How We Started</h3>
      <div className="border-2 mt-1  border-orangeRed   mx-auto rounded-md w-[100px] "></div>

      <h3 className="text-darkBlue pt-10 place-item-center   px-3 text-center font-medium text-5xl">A Journey of Resilience and <br/>Vision </h3>









      <section className=" bg-gradient-to-r from-yellow-50  to-white-40 mt-10  rounded-tl-[300px]">

        <div className="container mx-auto">

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  pt-6  " data-aos="zoom-in-up">


          <div className="pt-6 " data-aos="fade-in">
            <img src="/howstarted.png" alt="vita" className="w-full  border-3 md:w-[600px] border-bl-blue  md:mt-6  rounded-br-[30px] h-auto " />


          </div>

            <div className="left px-4 py-10  rounded-tl-[50px]  bg-white  md:-mt-[30px]   ">



              <p className="text-[18px]   leading-loose text-greyBlack   text-truncate font-md  pb-4 md:pt-10 leading-8 ">
                In the dynamic world of real estate, our journey began with a stumble, but it transformed
                into an unwavering quest for authenticity and dependability. Picture a group of young
                individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                to carve their path, they invested their time, resources, and aspirations into projects that held
                the promise of success. But the real estate landscape had its lessons to teach, and those
                lessons came at a cost.

              </p>

 
              <div>            <Link to="/ourhistory" className=" text-xl
 px-4 py-3 mt-4 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>

          


          </div>






        </div>











      </section>


      {/* REAL TORS SECTION */}




      <h3 className="text-darkBlue mt-20 text-center font-medium text-4xl">Real estate Icons  that
        Have Maintained <br />Integrity </h3>


      <section className=" mt-10 pb-6 bg-indigo-100 rounded-bl-[200px] rounded-tr-[400px]  ">

        <div className=" grid  grid-cols-1 md:grid-cols-2 ">


          <div className="pt-6 " data-aos="fade-in">
            <img src="/homevector.jpg" alt="vita" className="w-full  border-3 md:w-[600px] border-bl-blue  md:mt-6 rounded-tl-[30px] rounded-br-[30px] h-auto " />


          </div>

          <div className=" pt-20" data-aos="zoom-up">
            <div className=" px-10   ">



              <p className="text-[18px] text-greyBlack  leading-loose  max-w-lg font-md pt-10 pb-6 ">
                Our goal is to commemorate the remarkable journey of iconic real estate founders in an inspiring anthology. We aim to ensure that iconic
                founders and CEOs in real estate are brought to light.

              </p>

              <Link to="/realtors" className="  text-xl 
px-3 py-2 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  " >
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>


        </div>
      </section>











      <h3 className="text-4xl  text-center mt-20 pfont-bold px-6 text-darkBlue ">Testimonials</h3>

      <div className="mt-2">
        <Carouselitem />
      </div>

      <div className=" mt-10 md:mx-36 ">



        <Faq data-aos="flip-up" />
      </div>

    </>



  )
}
export default Home;
