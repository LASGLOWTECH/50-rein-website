import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Carouselitem from "./carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./faq";


const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <>

      <section className="Hero W-100">



        <div className="  pb-8 pt-6   md:pt-10 h-auto w-100 ">



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


          <div className="md:absolute flex items-center top-[100%] md:top-[20%] left-[60%]" data-aos="fade-out">

            <img className=" rightapp md:w-[600px]" src="/hand.png"></img>
          </div>
        </div>


      </section>




      <section className=" container mt-20  mx-auto ">



        <h3 className="text-darkBlue text-3xl text-center ">Who we are</h3>


        <div className="border-2 mt-2  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>


        <div className=" grid md:mt-10 gap-3 grid-cols-1    md:grid-cols-2 ">


          <div className="   rounded-md " data-aos="zoom-in-up">
            <div className="left px-2 pb-2  ">
              <h3 className="text-darkBlue pt-10 place-item-center   px-3 text-center md:text-left font-medium text-5xl">An Ideation </h3>


              <p className="text-[18px] text-center md:text-left leading-loose text-greyBlack   text-truncate font-md  pt-6 pb-10 leading-8">
                50 REIN is an ideation with it’s core values and mandate encompass in amplifying the
                real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
                integrity, consistency, morals and delivery of values.  </p>

              <Link to="/About" className=" w-auto mt-4 text-xl mx-[35%] md:mx-[0] 
 px-4 py-3 mt-10 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button>


              </Link>

            </div>


          </div>




          <div className=" mt-4 md:mt-10  bg-blue-50  rounded-[50px] " data-aos="zoom-in-up">
            <img src="/homeabout.png" alt="vita" className="   h-auto " />




          </div>












        </div>


      </section>




      <h3 className="className=text-darkBlue text-3xl pt-32 text-center">What We Do</h3>
      <div className="border-2 mt-1 border-orangeRed   mx-auto rounded-md w-[100px] "></div>








      <section className=" Hero2  mt-10  s">

        <div className="container mx-auto">


          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  pt-6  " data-aos="zoom-in-up">


            <div className="bg-white rounded-[50px] " data-aos="fade-in">
              <img src="/homeserv.png" alt="vita" className="w-full  md:w-[600px]     h-auto " />


            </div>

            <div className="left px-4 py-10 -50 rounded-tl-[50px]    md:-mt-[0px]  rounded-circle ">
              <h3 className="text-darkBlue pt-16 place-item-center   px-3 text-center md:text-left font-medium text-5xl">A Strive to Inspire Future Leaders</h3>


              <p className="text-[18px]   leading-loose text-greyBlack   text-truncate font-md  pb-8 md: pt-10 leading-8 ">
                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.

              </p>


              <div>            <Link to="/services" className=" text-xl mx-[35%] md:mx-0
 px-4 py-3 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>




          </div>






        </div>











      </section>












      <h3 className="text-darkBlue text-3xl pt-20 text-center">How We Started</h3>
      <div className="border-2 mt-1  border-orangeRed   mx-auto rounded-md w-[100px] "></div>










      <section className=" mt-10  rounded-br-[20%] rounded-bl-[20%]">

        <div className="container mx-auto">

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  pt-6 " data-aos="zoom-in-up">



            <div className="left px-4 py-10  md:-mt-[30px]   " data-aos="slide-right">

              <h3 className="text-darkBlue py-10 md:py-2 px-1 text-center  md:text-left font-medium text-5xl">A Journey of Resilience and Vision </h3>


              <p className="text-[18px]  mb-8 leading-loose text-greyBlack   text-truncate font-md  pb-4 md:pt-10 leading-8 ">
                In the dynamic world of real estate, our journey began with a stumble, but it transformed
                into an unwavering quest for authenticity and dependability. Picture a group of young
                individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                to carve their path, they invested their time, resources, and aspirations into projects that held
                the promise of success. But the real estate landscape had its lessons to teach, and those
                lessons came at a cost.

              </p>


              <div>            <Link to="/ourhistory" className=" text-xl mx-[35%] md:mx-0
 px-4 py-3 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>




            <div className="pt-6 bg-blue-50  rounded-[50px] " data-aos="fade-in">
              <img src="/howstarted.png" alt="vita" className="w-full  border-3 md:w-[600px] border-bl-blue    rounded-br-[30px] h-auto " />


            </div>


          </div>






        </div>











      </section>


      {/* REAL TORS SECTION */}








      <h3 className="text-darkBlue text-3xl pt-20 text-center">Real Estate Icons</h3>
      <div className="border-2 mt-1  border-orangeRed   mx-auto rounded-md w-[100px] "></div>




      <section className=" mt-10  Hero2  rounded-bl-[20%]">

        <div className="container mx-auto">

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  pt-6 " >
            <div className="pt-6 bg-white  rounded-[50px] " data-aos="slide-down">
              <img src="/homevector.jpg" alt="vita" className="w-full  border-3 md:w-[600px]     rounded-[50px] h-auto " />


            </div>


            <div className="left px-4 py-10  md:-mt-[30px]   " data-aos="slide-up">

              <h3 className="text-darkBlue py-10 md:py-2 text-center  md:text-left font-medium text-5xl"> Remarkable Journey of Iconic Real Estate Founders</h3>


              <p className="text-[18px]  text-center  leading-loose text-greyBlack   text-truncate font-md  pb-4 md:pt-10 leading-8 ">
                Our goal is to commemorate the remarkable journey of iconic real estate founders in an inspiring anthology. We aim to ensure that iconic
                founders and CEOs in real estate are brought to light.


              </p>


              <div>            <Link to="/realtors" className=" text-xl mx-[35%] md:mx-0
px-4 py-3 mt-10 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>







          </div>






        </div>











      </section>








      <h3 className="text-darkBlue mt-32   text-3xl text-center ">Testimonials</h3>

      <div className="border-2 mt-2 mb-6  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>

      <h3 className="text-darkBlue py-10 md:py-2 px-1 text-center my font-medium text-4xl">What People Say About Us</h3>



      <div className="mt-2">
        <Carouselitem />
      </div>

      <div className="  Hero mt-20 md:mx-36 ">



        <Faq data-aos="flip-up" />
      </div>

    </>



  )
}
export default Home;
