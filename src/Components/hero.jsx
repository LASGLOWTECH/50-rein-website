import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
// import Carouselitem from "./carousel";
import CarouselList from "./Heroslide";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./faq";
import Testifiers from "./Trustcarousel";


const Home = () => {
  const AboutSlides = {
    backgroundImage: `url(/ourvision.jpg)`,

    backgroundPosition: "center",
    height: "100vh",
    backgroundSize: "cover",
    clipPath: "ellipse(100% 40% at 50% 40%)",
    backgroundRepeat: "no-repeat"
  }


  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <>


<div className="bg-white -z-40"> <CarouselList /></div>
     
    




      <section className=" py-6 mt-8 ">


        <div className="container mt-10  mx-auto">
          <h3 className=" text-greyBlack text-3xl text-center ">Who we are</h3>


          <div className="border-2 mt-2  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>


          <div className=" grid md:mt-10 gap-3 grid-cols-1    md:grid-cols-2 ">


            <div className="   rounded-md " data-aos="zoom-in-up">
              <div className="left px-2 pb-2  ">
                <h3 className="text-darkBlue   pt-10 place-item-center    text-center md:text-left font-medium text-5xl">An Ideation </h3>


                <p className="text-[18px] text-center md:text-left  text-greyBlack  text-truncate font-md  pt-6 pb-10 leading-8">
                  50 REIN is an ideation with it’s core values and mandate encompass in amplifying the
                  real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
                  integrity, consistency, morals and delivery of values.  </p>

                <Link to="/About" className=" w-auto  text-lg  mx-[35%] md:mx-[0] 
  ">
                  <button className="  px-3 py-3  mt-6 rounded-3xl  bg-orangeRed text-white hover:bg-lightBlue ">Read more</button>


                </Link>

              </div>


            </div>




            <div className=" mt-4 md:mt-10   rounded-br-[50px]   " data-aos="zoom-in-up">
              <img src="/Heros.jpeg" alt="vita" className="  rounded-[30px] h-auto " />




            </div>


          </div>
        </div>

      </section>




      <h3 className="className=text-darkBlue text-3xl pt-32 text-center">What We Do</h3>
      <div className="border-2 mt-1 border-orangeRed   mx-auto rounded-md w-[100px] "></div>








      <section className=" Hero2  mt-10  s">

        <div className="container mx-auto">


          <div className=" grid grid-cols-1 md:grid-cols-2 items-center place-items-center  md:pt-3 " data-aos="zoom-in-up">


            <div className="bg-white rounded-[50px] " data-aos="fade-in">
              <img src="/Heros10.jpg" alt="vita" className="w-full  rounded-3xl md:w-[700px]      " />


            </div>

            <div className="left px-4 py-10 -50 rounded-tl-[50px]    md:-mt-[0px]  rounded-circle ">
              <h3 className="text-darkBlue pt-16   px-3 text-center md:text-left font-medium  text-3xl md:text-5xl">A Strive to Inspire Future Leaders</h3>


              <p className="text-[18px]    text-greyBlack   text-truncate font-md  pb-8 md: pt-6 leading-8 ">
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












      <h3 className="text-darkBlue text-2xl pt-10 text-center">How We Started</h3>
      <div className="border-2 mt-1  border-orangeRed   mx-auto rounded-md w-[100px] "></div>










      <section className=" mt-10  rounded-br-[20%] rounded-bl-[20%]">

        <div className="container mx-auto">

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center  justify-center  pt-6 " data-aos="zoom-in-up">



            <div className="left px-4 py-10  md:-mt-[30px]   " data-aos="slide-right">

              <h3 className="text-darkBlue py-10 md:py-2 px-1 text-4xl text-center  md:text-left font-medium md:text-5xl">A Journey of Resilience and Vision </h3>


              <p className="text-[18px]  mb-8  text-greyBlack   text-truncate font-md  pb-4 md:pt-10 leading-8 ">
                In the dynamic world of real estate, our journey began with a stumble, but it transformed
                into an unwavering quest for authenticity and dependability. Picture a group of young
                individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                to carve their path, they invested their time, resources, and aspirations into projects that held
                the promise of success. But the real estate landscape had its lessons to teach, and those
                lessons came at a cost.

              </p>


              <div>     <Link to="/ourhistory" className=" text-xl mx-[35%] md:mx-0
 px-4 py-3 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>




            <div className="pt-2 pe-2 bg-orangeRed rounded-tl-[30px] rounded-br-[30px]  " data-aos="fade-in">
              <img src="/Heros4.jpeg" alt="vita" className="w-full   rounded-tl-[30px]  border-3 md:w-[600px] border-bl-blue    rounded-br-[30px] h-auto " />


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
            <div className="pl-1 pt-1 bg-orangeRed  rounded-tl-[30px] rounded-br-[30px] " data-aos="slide-in">
              <img src="/Heros6.jpeg" alt="vita" className="w-full  border-3 md:w-[600px]  rounded-br-[30px]   rounded-tl-[30px] h-auto " />


            </div>


            <div className="left px-4 py-10  md:-mt-[30px]   " data-aos="slide-up">

              <h3 className="text-darkBlue py-6 md:py-2 text-center  md:text-left font-medium md:text-4xl text-4xl"> Remarkable Journey of Iconic Real Estate Founders</h3>


              <p className="text-[18px]  text-center  md:text-left  text-greyBlack   text-truncate font-md  pb-4 md:py-5 leading-8 ">
                Our goal is to commemorate the remarkable journey of iconic real estate founders in an inspiring anthology. We aim to ensure that iconic
                founders and CEOs in real estate are brought to light.


              </p>


              <div>            <Link to="/realtors" className=" text-xl mx-[35%] md:mx-0
px-4 py-3 mt-10 rounded-2xl bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base ">Read more</button> </Link></div>



            </div>







          </div>






        </div>











      </section>








      <h3 className="text-darkBlue mt-32   text-3xl text-center ">Testimonials</h3>

      <div className="border-2 mt-2 mb-6  border-orangeRed  mx-auto rounded-md w-[100px] " data-aos="slide-right"></div>

      <h3 className="text-darkBlue pt-2 pb-6   md:py-2 px-1 text-center my font-medium text-2xl md:text-3xl">What People Say About Us</h3>



<Testifiers/>
      {/* <div className="mt-2 ">
        <Carouselitem />
      </div> */}

      <div className="  Hero  md:mx-36 ">



        <Faq data-aos="flip-up" />
      </div>

    </>



  )
}
export default Home;
